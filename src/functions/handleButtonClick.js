
const handleButtonClick = () => {
    const targetSection = document.getElementById('target-section')
    targetSection.scrollIntoView({ 
        behavior: 'smooth' 
    })
    console.log('Button clicked')
}

export default handleButtonClick