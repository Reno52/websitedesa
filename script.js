// JavaScript untuk meningkatkan fungsionalitas halaman

document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.style.position = 'fixed';
    preloader.style.top = '0';
    preloader.style.left = '0';
    preloader.style.width = '100%';
    preloader.style.height = '100%';
    preloader.style.background = '#fff';
    preloader.style.zIndex = '1000';
    preloader.style.display = 'flex';
    preloader.style.justifyContent = 'center';
    preloader.style.alignItems = 'center';
    preloader.innerHTML = '<p>Loading...</p>';
    document.body.appendChild(preloader);

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 500);
        }, 1000);
    });

    // Smooth scrolling untuk navigasi
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href').replace('.html', '');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Highlight navigasi saat scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY + window.innerHeight / 2;

        sections.forEach(section => {
            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {
                const id = section.getAttribute('id');
                document.querySelector('nav ul li a[href="' + id + '.html"]').classList.add('active');
            } else {
                const id = section.getAttribute('id');
                document.querySelector('nav ul li a[href="' + id + '.html"]').classList.remove('active');
            }
        });
    });

    // Animasi pada gambar galeri
    const galleryImages = document.querySelectorAll('.gallery-grid figure img');

    galleryImages.forEach(img => {
        img.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
            img.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
            img.style.boxShadow = 'none';
        });
    });
});
