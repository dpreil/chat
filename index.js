window.onload = () => {
	const form = document.getElementById("chatBox");
	const chatWindow = document.getElementById("messages");

	var socket = io();
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const message = document.getElementById('m').value
		console.log(message);

		socket.emit('chat message', message);
		document.getElementById('m').value = '';
		return false;
	//	socket.emit()
	})

	socket.on('chat message', (msg) => {
		let node = document.createElement("LI");
		let textNode = document.createTextNode(msg);
		node.appendChild(textNode);
		chatWindow.appendChild(node);
	})
}