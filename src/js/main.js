// Scroll spy for navigation active states
document.addEventListener('DOMContentLoaded', function() {
    // Only run scroll spy on homepage
    if (window.location.pathname === '/') {
        const navLinks = document.querySelectorAll('nav a[href^="/#"]');
        const sections = document.querySelectorAll('section[id]');
        
        function updateActiveNavLink() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                // Offset for fixed header
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === `/#${current}`) {
                    link.classList.add('active');
                }
            });
        }
        
        // Update on scroll
        window.addEventListener('scroll', updateActiveNavLink);
        
        // Update on page load
        updateActiveNavLink();
    }
});