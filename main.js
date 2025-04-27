// Cookie consent functionality
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    if (cookieBanner && acceptButton) {
        // Check if user has already accepted cookies
        if (!localStorage.getItem('cookiesAccepted')) {
            cookieBanner.style.display = 'block';
        }

        acceptButton.addEventListener('click', function() {
            cookieBanner.style.display = 'none';
            localStorage.setItem('cookiesAccepted', 'true');
        });
    }
});

// FAQ accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const button = item.querySelector('button');
        const content = item.querySelector('.faq-content');
        const icon = item.querySelector('.fa-chevron-down');

        if (button && content && icon) {
            button.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherContent = otherItem.querySelector('.faq-content');
                        const otherIcon = otherItem.querySelector('.fa-chevron-down');
                        if (otherContent && otherIcon) {
                            otherContent.classList.add('hidden');
                            otherIcon.classList.remove('rotate-180');
                        }
                    }
                });

                // Toggle current FAQ item
                content.classList.toggle('hidden');
                icon.classList.toggle('rotate-180');
            });
        }
    });
});

// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Basic form validation
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('border-red-500');
                } else {
                    field.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                // Here you would typically send the form data to a server
                console.log('Form submitted successfully');
                form.reset();
            }
        });
    });
});

// Image error handling
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Replace broken image with a placeholder
            this.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
            this.alt = 'Image not found';
        });
    });
});
