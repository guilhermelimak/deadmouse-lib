const scroll = (event, socket) => socket.emit('scroll', event)

module.exports = scroll
