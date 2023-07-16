/* library.js
=====================================================
Description:
Functions of slide show.
===================================================== */


/* doSlides(images, containerSelector, delay)
=====================================================
Turns a container specified by containerSelector
into a slide show using the specified collection
of images and delay in milliseconds.
===================================================== */
function doSlides(images, containerSelector, delay = 3000) {
    const container = document.querySelector(containerSelector);
    const img = container.querySelector('img');
    let slideIndex = 0;
    let running;
    let prefetchedNextImage = new Image();

    // Add Button
    const button = document.createElement('button');
    button.id = 'run-button';
    button.textContent = 'Start';
    button.addEventListener('click', toggle);
    container.insertAdjacentElement('beforeend', button);

    // Add Caption
    const caption = document.createElement('p');
    container.append(caption);

    // Add key
    document.onkeypress = event => {
        if (event.key == ' ') {
            toggle();
            event.preventDefault();
        }
    }

    // Start the slide show
    toggle();
    
    function toggle() {
        if (!running) {
            console.log(`Starting slide show with delay ${(delay / 1000).toFixed(3)} seconds`);
            running = setInterval(next, delay);
            next();
            button.textContent = 'Stop';
        }
        else {
            running = clearInterval(running);
            button.textContent = 'Start';
            console.log('Stopped the slide show');
        }
        container.classList.toggle('running');
    }
    
    function next() {
        img.src = images[slideIndex].src;
        img.title = images[slideIndex].caption;
        img.alt = images[slideIndex].caption;
        caption.textContent = images[slideIndex].caption;
        slideIndex++;
        if (slideIndex >= images.length) slideIndex = 0;
        prefetchedNextImage.src = `${images[slideIndex].src}`
    }
}


/* doLightbox(container)
=====================================================
Creates a pop-up component for all anchors in
the specified container.
===================================================== */
function doLightbox(container) {
    const anchors = document.querySelectorAll(`${container}>a`);
    anchors.forEach(a => {
        // a.onclick = show;
        a.addEventListener('click', show);
    });

    // Create Pop-up Element
    const background = document.createElement('div');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');
    background.id = 'lightbox-background';
    figure.id = 'lightbox';
    figure.appendChild(img);
    figure.appendChild(figcaption);
    document.body.appendChild(background);
    document.body.appendChild(figure);

    // Create Style Sheet for the created elements
    const style = document.createElement('style');
    document.head.insertAdjacentElement('afterbegin', style);
    style.sheet.insertRule(`
        div#lightbox-background {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            background-color: rgb(0,0,0,0.5);
        }
    `);
    style.sheet.insertRule(`
        figure#lightbox {
            position: fixed;
            top: 50%; left: 50%; margin-right: -50%;
            transform: translate(-50%, -50%);
            z-index: 2;
        }
    `);

    // Showing and Hiding
    let currentAnchor;
    function show(event) {
        event.preventDefault();
        currentAnchor = event.currentTarget; // currentTarget - element that has the event listener
        loadImage();
    }
    function loadImage() {
        // Populate the img element
        img.src = currentAnchor.href;  
        const currentImage = currentAnchor.querySelector('img');
        figcaption.textContent = currentImage.alt; // target - element you actually clicked on

        // Show pop-up only when the image is loaded.
        img.onload = event => {
            background.style.display = figure.style.display = 'block';
            document.addEventListener('keydown', doKeys);
        }
    }


    background.onclick = hide;
    hide();
    function hide(event) {
        background.style.display = figure.style.display = 'none';
        document.removeEventListener('keydown', doKeys);
    }

    function doKeys(event) {
        event.preventDefault();

        switch(event.key) {
            case 'Esc': // Old version
            case 'Escape':
                hide();
                break;
            case 'Left':
            case 'ArrowLeft':
                prevImage();
                break;
            case 'Right':
            case 'ArrowRight':
                nextImage();
                break;
            case 'Home':
            case 'Up':
            case 'ArrowUp':
                firstImage();
                break;
            case 'End':
            case 'Down':
            case 'ArrowDown':
                lastImage();
                break;
        }
    }

    function prevImage() {
        if (currentAnchor.previousElementSibling) {
            currentAnchor = currentAnchor.previousElementSibling;
            loadImage();
        } else {
            lastImage();
        }
    }
    function nextImage() {
        if (currentAnchor.nextElementSibling) {
            currentAnchor = currentAnchor.nextElementSibling;
            loadImage();
        } else {
            firstImage();
        }
    }
    function firstImage() {
        currentAnchor = currentAnchor.parentNode.firstElementChild;
        loadImage();
    }
    function lastImage() {
        currentAnchor = currentAnchor.parentNode.lastElementChild;
        loadImage();
    }
}