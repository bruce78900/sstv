const buttons = document.querySelectorAll('.button');
const video = document.getElementById('video');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const source = button.dataset.source;
    video.src = source;
    video.load();
    video.play();
  });
});
