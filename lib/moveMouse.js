const moveMouse = (distance, socket) => socket.emit('move', distance)

module.exports = moveMouse
