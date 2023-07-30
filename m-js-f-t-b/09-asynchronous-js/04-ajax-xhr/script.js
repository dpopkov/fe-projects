const xhr = new XMLHttpRequest();

xhr.open('GET', './movies.json');
// xhr.open('GET', 'https://api.github.com/users/username/repos');

/*
------------------------------------------
readyState has 5 possible values
------------------------------------------
0 - request not initialized
1 - server connection established
2 - request received
3 - processing request
4 - request finished and response is ready
------------------------------------------
*/
xhr.onreadystatechange = function () {
  // console.log(`this.readyState=${this.readyState}; this.status=${this.status}`);

  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);
    // console.log(data);
    const results = document.querySelector('ul#results');
    data.forEach((item) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${item.title}</strong> - ${item.year}`;
      // li.innerHTML = `<strong>${item.name}</strong> updated ${item.updated_at}`;
      results.append(li);
    });
  }
};

xhr.send();
