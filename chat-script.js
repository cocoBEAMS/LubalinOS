document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const msg = e.target.elements.msg.value;

  // Display the message
  outputMessage(msg);

  // Clear the input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">User <span>9:12pm</span></p>
  <p class="text">
      ${message}
  </p>`;
  document.getElementById('chat-messages').appendChild(div);

  // Scroll down
  document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}
document.getElementById('enter-chat').addEventListener('click', function() {
  const username = document.getElementById('username').value.trim();

  if (username) {
      sessionStorage.setItem('username', username);
      document.querySelector('.username-container').style.display = 'none';
      document.querySelector('.chat-main').style.display = 'flex';
      document.querySelector('.chat-form-container').style.display = 'block';

      addUserToList(username);
  } else {
      alert('Please enter a username');
  }
});

document.getElementById('chat-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const msg = e.target.elements.msg.value.trim();
  const username = sessionStorage.getItem('username');

  if (msg) {
      outputMessage(username, msg);

      // Clear the input
      e.target.elements.msg.value = '';
      e.target.elements.msg.focus();
  }
});

function outputMessage(username, message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${username} <span>${new Date().toLocaleTimeString()}</span></p>
  <p class="text">
      ${message}
  </p>`;
  document.getElementById('chat-messages').appendChild(div);

  // Scroll down
  document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}

function addUserToList(username) {
  const usersList = document.getElementById('users');
  usersList.innerHTML = '';  // Clear any existing content (including "No people are online" message)
  const userItem = document.createElement('li');
  userItem.textContent = username;
  usersList.appendChild(userItem);
}

// Clear the user list and display "No people are online" initially
document.getElementById('users').innerHTML = '<li>No people are online</li>';

document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const msg = e.target.elements.msg.value;

    // Display the message
    outputMessage(msg);

    // Clear the input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">User <span>9:12pm</span></p>
    <p class="text">
        ${message}
    </p>`;
    document.getElementById('chat-messages').appendChild(div);

    // Scroll down
    document.getElementById('chat-messages').scrollTop = document.getElementById('chat-messages').scrollHeight;
}
