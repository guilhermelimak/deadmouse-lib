const click = (button, socket) => socket.emit('click', button)

module.exports = click
