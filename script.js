console.log('i am a javascript file')

$(() => {
  const socket = io();
  $('form').submit(() => {
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
});
