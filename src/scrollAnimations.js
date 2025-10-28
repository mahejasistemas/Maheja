// Scroll Animation Utilities
class ScrollAnimations {
  constructor() {
    this.observers = new Map();
    this.init();
  }

  init() {
    // Create intersection observer for scroll animations
    this.createIntersectionObserver();
    
    // Add scroll event listener for navbar
    this.addScrollListener();
    
    // Initialize animations when DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeAnimations());
    } else {
      this.initializeAnimations();
    }
  }

  createIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
          // Optional: unobserve after animation to improve performance
          // this.observer.unobserve(entry.target);
        } else {
          // Remove class when element goes out of view (for re-animation)
          entry.target.classList.remove('animate-in-view');
        }
      });
    }, options);
  }

  addScrollListener() {
    let ticking = false;
    
    const updateNavbar = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    });
  }

  initializeAnimations() {
    // Observe elements with scroll animation classes
    const animatedElements = document.querySelectorAll(
      '.scroll-fade-up, .scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .footer-column, .footer-brand'
    );

    animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  }

  // Method to manually trigger animations
  triggerAnimation(element, animationType = 'fade-up') {
    element.classList.add(`scroll-${animationType}`);
    this.observer.observe(element);
  }

  // Cleanup method
  destroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    this.observers.clear();
  }
}

// Initialize scroll animations
const scrollAnimations = new ScrollAnimations();

// Export for potential external use
export default scrollAnimations;