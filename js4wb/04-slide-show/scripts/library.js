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
