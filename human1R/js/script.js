// ----- الهيدر: ظل عند التمرير -----
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
    scrollBtn.classList.toggle('show', window.scrollY > 300);
});

// ----- زر القائمة في الموبايل -----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ----- زر السكرول لأعلى -----
const scrollBtn = document.getElementById('scrollTopBtn');
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ----- كاروسيل الأعضاء: أسهم التمرير يمين/يسار -----
const track = document.getElementById('carouselTrack');
document.getElementById('nextBtn').addEventListener('click', () => track.scrollBy({ left: -260, behavior: 'smooth' }));
document.getElementById('prevBtn').addEventListener('click', () => track.scrollBy({ left: 260, behavior: 'smooth' }));

// ----- أنيميشن الظهور عند التمرير -----
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));