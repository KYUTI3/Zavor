const button = document.querySelector('#myButton');

button.addEventListener('click', () => {
    const message = document.createElement('p');
    message.textContent = 'Hello World!';
    document.body.appendChild(message);
  });

const notifyBtn = document.getElementById('redirector')
    notifyBtn.addEventListener('click', function(event) {
    console.log('ok')
  })

function loadHome() {
    const { remote } = require('electron');
    const url = require('url');
    const path = require('path');

    remote.getCurrentWindow().loadURL(url.format({
      pathname: path.join(__dirname, 'home.html'),
      protocol: 'file:',
      slashes: true
    }));
  }