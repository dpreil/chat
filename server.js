const express = require ("express");
const app = express();
const server = app.listen(3000,()=>console.log("listening on port 3000"));
const io = require('socket.io')(server);

app.get('/',(req,res) => res.sendFile(__dirname + '/index.html'));
app.use(express.static(__dirname));

// io.on('connection', (socket) => {
// 	console.log("A user connected");
// 	socket.on('disconnect', () => {console.log("user disconnected");})
// });

io.on('connection', (socket) => {
	socket.on('chat message', (msg) => {
		console.log(msg);
		io.emit('chat message', msg);
	})
})

