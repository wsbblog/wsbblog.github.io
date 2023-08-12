window.addEventListener('DOMContentLoaded', function() {
    var navMusic = document.getElementById('nav-music');
    var fpsElement = document.getElementById('fps');
  
    var bottomBar = document.createElement('div');
    bottomBar.className = 'bottom-bar';
  
    // 将navMusic元素的父元素替换为bottomBar元素
    navMusic.parentNode.replaceChild(bottomBar, navMusic);
  
    // 在bottomBar元素中插入navMusic和fpsElement元素
    bottomBar.appendChild(navMusic);
    bottomBar.appendChild(fpsElement);
  });
