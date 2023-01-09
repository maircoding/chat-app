const socket = io()

socket.on('countUpdated', (count) => {
    console.log(`The count has been updated!`, count);
})

document.querySelector('#inc').addEventListener('click', () => {console.log('clicked'+count); socket.emit('inc')})