
document.addEventListener('DOMContentLoaded', function() {
    const userIcon = document.querySelector('.fa-user');
    const loginTab = document.querySelector('.login-tab');
    const closeLogin = document.querySelector('.close-login');
    const loginOverlay = document.querySelector('.login-overlay');
    const body = document.body;
  
    userIcon.addEventListener('click', function(e) {
      e.preventDefault();
      loginTab.style.right = '0';
      loginOverlay.classList.add('active');
      body.classList.add('body-login-open');
    });
  
    function closeLoginTab() {
      loginTab.style.right = '-400px';
      loginOverlay.classList.remove('active');
      body.classList.remove('body-login-open');
    }
  
    closeLogin.addEventListener('click', closeLoginTab);
    loginOverlay.addEventListener('click', closeLoginTab);
  
    const loginForm = document.querySelector('.login-form');
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      closeLoginTab();
      showLoginNotification('Logged in successfully!');
    });
  
    function showLoginNotification(message) {
      const notification = document.createElement('div');
      notification.className = 'login-notification';
      notification.innerHTML = `<span>${message}</span>`;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.classList.add('show');
      }, 10);
      
      setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
          notification.remove();
        }, 300);
      }, 3000);
    }
  });