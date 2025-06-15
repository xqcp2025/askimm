document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const floatingHearts = document.querySelector('.floating-hearts');
    
    // Uçuşan kalpler oluştur
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heart.style.animation = `float ${Math.random() * 3 + 2}s linear forwards`;
        floatingHearts.appendChild(heart);
        
        // Animasyon bitince elementi kaldır
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    // Her 300ms'de bir kalp oluştur
    setInterval(createFloatingHeart, 300);
    
    // Kalp animasyonu için CSS ekle
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Sayfa kaydırma animasyonu
    const sections = document.querySelectorAll('.section');
    
    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Sayfa yüklendiğinde ve kaydırıldığında kontrol et
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
    
    // Başlangıçta tüm bölümleri gizle
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.5s ease-out';
    });
    
    // Fotoğraf değiştirme fonksiyonu
    const photoFrame = document.querySelector('.photo-frame img');
    let currentPhoto = 0;
    const photos = [
        'IMG_2770.jpg',
        'IMG_2924.jpg',
        'IMG_0560.jpg',
        'IMG_0712.jpg',
        'IMG_0852.jpg',
        'IMG_1263.jpg',
        'IMG_1411.jpg',
        'IMG_2088.jpg',
        'IMG_2187.jpg',
        'IMG_2278.jpg',
        'IMG_2392.jpg',
        'IMG_2470.jpg',
        'IMG_2549.jpg',
        'IMG_2653.jpg'
    ];
    
    // Fotoğraf geçiş efekti için CSS ekle
    const photoStyle = document.createElement('style');
    photoStyle.textContent = `
        .photo-frame img {
            transition: opacity 0.5s ease;
        }
    `;
    document.head.appendChild(photoStyle);

    // Her 3 saniyede bir fotoğrafı değiştir
    setInterval(() => {
        currentPhoto = (currentPhoto + 1) % photos.length;
        photoFrame.style.opacity = '0';
        setTimeout(() => {
            photoFrame.src = photos[currentPhoto];
            photoFrame.style.opacity = '1';
        }, 500);
    }, 3000);

    function getTimeBasedMessage() {
        const hour = new Date().getHours();
        let message = '';

        if (hour >= 20 && hour < 22) {
            message = 'İyi akşamlar bitanemm';
        } else if (hour >= 22 || hour < 4) {
            message = 'İyi geceler bitanemm seni çok seviyorum öpüyorum seni bal dudaklarından';
        } else if (hour >= 4 && hour < 12) {
            message = 'Günaydınnn yavrumm';
        } else if (hour >= 12 && hour < 18) {
            message = 'İyi günler aşkbahcemmm';
        } else if (hour >= 18 && hour < 20) {
            message = 'Napıyosun askimmmmm';
        }

        return message;
    }

    function updateTimeBasedMessage() {
        const messageElement = document.querySelector('.time-message');
        if (messageElement) {
            messageElement.textContent = getTimeBasedMessage();
        }
    }

    // Sayfa yüklendiğinde ve her dakika güncelle
    updateTimeBasedMessage();
    setInterval(updateTimeBasedMessage, 60000); // Her dakika güncelle
}); 
