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

    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    
    if (mobileMenuToggle && mobileNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenuToggle.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open');
        });

        // Close mobile menu when clicking on links
        const mobileNavLinks = mobileNav.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuToggle.contains(event.target) && !mobileNav.contains(event.target)) {
                mobileMenuToggle.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.classList.remove('mobile-menu-open');
            }
        });
    }

    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    function toggleBackToTopButton() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', toggleBackToTopButton);
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dark mode functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const mobileDarkModeToggle = document.getElementById('mobile-dark-mode-toggle');
    
    // Get icons from both toggles
    const desktopSunIcon = darkModeToggle.querySelector('.sun-icon');
    const desktopMoonIcon = darkModeToggle.querySelector('.moon-icon');
    const mobileSunIcon = mobileDarkModeToggle.querySelector('.sun-icon');
    const mobileMoonIcon = mobileDarkModeToggle.querySelector('.moon-icon');
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Function to update all icons
    function updateIcons(theme) {
        if (theme === 'dark') {
            desktopSunIcon.style.display = 'none';
            desktopMoonIcon.style.display = 'block';
            mobileSunIcon.style.display = 'none';
            mobileMoonIcon.style.display = 'block';
        } else {
            desktopSunIcon.style.display = 'block';
            desktopMoonIcon.style.display = 'none';
            mobileSunIcon.style.display = 'block';
            mobileMoonIcon.style.display = 'none';
        }
    }
    
    // Apply theme on page load
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateIcons('dark');
    }
    
    // Function to toggle theme
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcons(newTheme);
    }
    
    // Add event listeners to both toggles
    darkModeToggle.addEventListener('click', toggleTheme);
    mobileDarkModeToggle.addEventListener('click', toggleTheme);
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateIcons(newTheme);
        }
    });
});