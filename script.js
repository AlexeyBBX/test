// Плавная прокрутка к якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Обработка кнопки CTA
document.getElementById('ctaButton').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Обработка формы контактов
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Получаем данные формы
    const formData = new FormData(this);
    
    // Имитация отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    
    // Очищаем форму
    this.reset();
});

// Анимация при скролле
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Применяем анимацию к карточкам услуг
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Приветствие в консоли
console.log('Добро пожаловать на МойСайт! 🚀');
