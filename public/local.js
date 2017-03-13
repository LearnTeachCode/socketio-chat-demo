// Start a WebSocket connection with the server using SocketIO
var socket = io(); 	// Note that the SocketIO client-side library was imported on line 13 of index.html,
					// and this file (local.js) was imported on line 14 of index.html

// Create variables for inputs and button
var sendButton = document.getElementById("send");
var nameInput = document.getElementById("nameinput");
var messageInput = document.getElementById("messageinput");

// When user clicks "Send" button, run sendMessage function
sendButton.addEventListener("click", sendMessage);

function sendMessage(event) {
	console.log('SENDING: name: '+ nameInput.value + ', message: ' + messageInput.value);
	
	// Write your code here to use SocketIO to send data to the server!
	
	
}

// Write your code here to use SocketIO to receive data from the server,
// and be sure to use the displayNewMessage function below to display it on the page!



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
