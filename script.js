/* ============================================
   APPLE-STYLE PORTFOLIO - JavaScript
   Smooth Animations & Interactions
   ============================================ */

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initPageLoader();
  initHeader();
  initMobileMenu();
  initScrollReveal();
  initSkillAnimations();
  initPortfolioFilter();
  initContactForm();
  initSmoothScroll();
  initActiveNavigation();
});

/* ============================================
   PAGE LOADER
   ============================================ */
function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  
  window.addEventListener('load', function() {
    setTimeout(function() {
      loader.classList.add('hidden');
      document.body.style.overflow = 'visible';
    }, 500);
  });
}

/* ============================================
   HEADER SCROLL EFFECT
   ============================================ */
function initHeader() {
  const header = document.getElementById('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

/* ============================================
   MOBILE MENU
   ============================================ */
function initMobileMenu() {
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('open');
    nav.classList.toggle('open');
  });
  
  // Close menu when clicking a link
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('open');
      nav.classList.remove('open');
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
      menuToggle.classList.remove('open');
      nav.classList.remove('open');
    }
  });
}

/* ============================================
   SCROLL REVEAL ANIMATIONS
   ============================================ */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger');
  
  const revealOnScroll = function() {
    revealElements.forEach(function(element) {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = 100;
      
      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', revealOnScroll);
}

/* ============================================
   SKILL BAR & CIRCLE ANIMATIONS
   ============================================ */
function initSkillAnimations() {
  const skillBars = document.querySelectorAll('.skill-item__progress');
  const skillCircles = document.querySelectorAll('.skill-circle__ring .progress');
  
  const animateSkills = function() {
    // Animate skill bars
    skillBars.forEach(function(bar) {
      const barTop = bar.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (barTop < windowHeight - 100 && !bar.classList.contains('animated')) {
        const width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
        bar.classList.add('animated');
      }
    });
    
    // Animate skill circles
    skillCircles.forEach(function(circle) {
      const circleTop = circle.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (circleTop < windowHeight - 100 && !circle.classList.contains('animated')) {
        const percent = circle.getAttribute('data-percent');
        // Circle circumference = 2 * PI * r = 2 * 3.14159 * 45 ≈ 283
        const offset = 283 - (283 * percent / 100);
        circle.style.strokeDashoffset = offset;
        circle.classList.add('animated');
      }
    });
  };
  
  // Initial check
  animateSkills();
  
  // Check on scroll
  window.addEventListener('scroll', animateSkills);
}

/* ============================================
   PORTFOLIO FILTER (Using MixItUp)
   ============================================ */
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.portfolio__filter');
  const portfolioGrid = document.getElementById('portfolioGrid');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  
  // Simple filter without MixItUp as fallback
  filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      portfolioCards.forEach(function(card) {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
          card.style.animation = 'fadeIn 0.5s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

/* ============================================
   CONTACT FORM WITH EMAILJS
   ============================================ */
function initContactForm() {
  // Initialize EmailJS with your public key
  // You need to replace this with your actual EmailJS public key
  // Sign up at https://www.emailjs.com/ to get your keys
  
  const form = document.getElementById('emailForm');
  const submitBtn = document.getElementById('submitBtn');
  const successMessage = document.getElementById('successMessage');
  
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
    };
    
    // Change button state
    submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Option 1: Using EmailJS (uncomment when you have your keys)
    /*
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: "ranggadwi16@gmail.com"
    })
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      showSuccess();
    }, function(error) {
      console.log('FAILED...', error);
      showError();
    });
    */
    
    // Option 2: Using mailto as fallback (current implementation)
    // This will open the user's email client
    const mailtoLink = `mailto:ranggadwi16@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    
    // Simulate sending delay for better UX
    setTimeout(function() {
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success message
      showSuccess();
    }, 1000);
    
    function showSuccess() {
      form.style.display = 'none';
      successMessage.classList.add('show');
      
      // Reset form after 5 seconds
      setTimeout(function() {
        form.reset();
        form.style.display = 'block';
        successMessage.classList.remove('show');
        submitBtn.innerHTML = '<i class="bx bx-send"></i> Send Message';
        submitBtn.disabled = false;
      }, 5000);
    }
    
    function showError() {
      submitBtn.innerHTML = '<i class="bx bx-error"></i> Failed! Try Again';
      submitBtn.disabled = false;
      
      setTimeout(function() {
        submitBtn.innerHTML = '<i class="bx bx-send"></i> Send Message';
      }, 3000);
    }
  });
}

/* ============================================
   SMOOTH SCROLL
   ============================================ */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      
      if (target) {
        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ============================================
   ACTIVE NAVIGATION
   ============================================ */
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  const updateActiveNav = function() {
    const scrollY = window.scrollY;
    
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function(link) {
          link.classList.remove('active');
          
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', updateActiveNav);
}

/* ============================================
   TYPING EFFECT FOR HERO (Optional)
   ============================================ */
function initTypingEffect() {
  const roles = ['Software Engineer', 'Mobile Developer', 'Project Manager', 'Scrum Master'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;
  
  const typeElement = document.querySelector('.hero__title-accent');
  
  if (!typeElement) return;
  
  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typeElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let timeout = isDeleting ? deletingSpeed : typingSpeed;
    
    if (!isDeleting && charIndex === currentRole.length) {
      timeout = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      timeout = 500;
    }
    
    setTimeout(type, timeout);
  }
  
  // Uncomment to enable typing effect
  // type();
}

/* ============================================
   PARALLAX EFFECT (Subtle)
   ============================================ */
function initParallax() {
  const heroImage = document.querySelector('.hero__image-wrapper');
  
  if (!heroImage) return;
  
  window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const maxScroll = 500;
    
    if (scrolled < maxScroll) {
      const parallaxValue = scrolled * 0.3;
      heroImage.style.transform = `translateY(${parallaxValue}px)`;
    }
  });
}

/* ============================================
   LAZY LOADING IMAGES
   ============================================ */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px 0px'
  });
  
  images.forEach(function(img) {
    imageObserver.observe(img);
  });
}

/* ============================================
   CONSOLE EASTER EGG
   ============================================ */
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold;');
console.log('%cWelcome to Rangga Dwi Saputra\'s Portfolio', 'font-size: 14px; color: #0071e3;');
console.log('%cInterested in working together? Contact me at ranggadwi16@gmail.com', 'font-size: 12px;');
