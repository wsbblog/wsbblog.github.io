window.addEventListener('DOMContentLoaded', function() {
      var fpsElement = document.getElementById('fps');
      var parentElement = fpsElement.parentElement;
      var bottomBar = document.createElement('div');
      bottomBar.className = 'bottom-bar';
      parentElement.insertBefore(bottomBar, fpsElement);
      bottomBar.appendChild(fpsElement);
  });
  