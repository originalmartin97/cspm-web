/**
 * useScrollNavigation
 * ====================
 * Custom hook for smooth scroll navigation to page sections.
 * 
 * Usage:
 *   import { scrollToSection, scrollToTop } from '../hooks/useScrollNavigation';
 *   
 *   onClick={() => scrollToSection('services')}
 *   onClick={scrollToTop}
 */

/**
 * Scroll to a specific section by ID
 * @param {string} id - The ID of the section to scroll to, or 'top' for top of page
 */
export const scrollToSection = (id) => {
    if (id === 'top') {
        scrollToTop();
        return;
    }
    
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
};

/**
 * Scroll to the top of the page
 */
export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Default export for backward compatibility
const handleButtonClickNavigation = scrollToSection;
export default handleButtonClickNavigation;