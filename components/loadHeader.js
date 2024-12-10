document.addEventListener('DOMContentLoaded', function() {
    fetch('/components/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header-container').innerHTML = data;
        })
        .catch(error => console.error('Header yüklenirken hata oluştu:', error));
}); 