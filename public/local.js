// Start a WebSocket connection with the server using SocketIO
var socket = io(); 	// Note that the SocketIO client-side library was imported on line 13 of index.html,
					// and this file (local.js) was imported on line 14 of index.html

// Create variables for inputs and button
var sendButton = document.getElementById("send");
var nameInput = document.getElementById("nameinput");
var messageInput = document.getElementById("messageinput");

// When user clicks "Send" button, run sendMessage function
sendButton.addEventListener("click", sendMessage);

// If ENTER key was pressed, run sendMessage function
window.addEventListener("keypress", function(event){
	// Normalize key code across browsers:
	var keyCode = event.which || event.keyCode || 0;
	// Keycode #13 is the enter key
	if (keyCode === 13) {
		sendMessage();
	}
});

// When "chat" event received, display message
socket.on('chat', function(data){
	console.log('RECEIVED: name: '+ data.name + ', message: ' + data.message);
	displayNewMessage(data.name, data.message);
});


function sendMessage(event) {
	console.log('SENDING: name: '+ nameInput.value + ', message: ' + messageInput.value);
	// Send the name and message to the server in an event called "chat"
	socket.emit('chat', {name: nameInput.value, message: messageInput.value} );
	// After each messag is sent, delete what shows in the user's chat input box
	messageInput.value = '';
}

// This function handles actually displaying the messages:
function displayNewMessage (username, message) {
	// Create an HTML element <div class="message"></div>
	var newMessage = document.createElement('div');
	newMessage.className = 'message';

	// Create an HTML element <span class="username">username here</span>
	var newMessageUser = document.createElement('span');
	newMessageUser.className = 'username';
	newMessageUser.innerText = username;
	
	// Create a text node containing a colon followed by the user's message
	// like ": message goes here"
	var messageTextNode = document.createTextNode(': ' + message);

	// Combine <span class="username">username here</span> and ": message goes here"
	// both inside <div class="message"></div>
	newMessage.appendChild(newMessageUser);
	newMessage.appendChild(messageTextNode);
	// So now the final HTML looks like:
	// <div class="message"><span class="username">username here</span>: message goes here</div>

	// Finally, put that new HTML content inside the element which has id="chat"
	document.getElementById('chat').appendChild(newMessage);

	// Scroll down to the bottom of the page so we always see the newest messages
	window.scrollTo(0, document.body.scrollHeight);
}
