const handleButtonClick = (id) => {
    if (id === 'top') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        console.log('Scrolled to top of the page');
    } else {
        const targetSection = document.getElementById(id);
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
            console.log(`Scrolled to section with ID: ${id}`);
        } else {
            console.log(`Section with ID: ${id} not found`);
        }
    }
}

export default handleButtonClick;