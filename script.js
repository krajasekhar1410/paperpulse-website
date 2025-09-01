document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carouselContainer = document.querySelector('.carousel-container');
    const projects = document.querySelectorAll('.project');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function updateCarousel() {
        const width = projects[0].clientWidth;
        carouselContainer.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? projects.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === projects.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);

    // AI Tool form submission
    const aiForm = document.getElementById('ai-form');
    const problemInput = document.getElementById('problem-input');
    const aiResponse = document.getElementById('ai-response');
    const responseText = document.getElementById('response-text');

    aiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const problemDescription = problemInput.value.trim();
        if (!problemDescription) return;

        // Simulate AI response generation (placeholder)
        responseText.textContent = "Generating solution framework...";
        aiResponse.style.display = 'block';

        setTimeout(() => {
            // Simple simulated AI response based on keywords
            let solution = "Based on your problem description, we recommend the following approach:\n\n";

            if (/optimization|efficiency|process/i.test(problemDescription)) {
                solution += "- Conduct a thorough process audit.\n- Identify bottlenecks and inefficiencies.\n- Implement lean methodologies and automation where applicable.\n";
            }
            if (/digital|transformation|technology/i.test(problemDescription)) {
                solution += "- Assess current technology stack.\n- Develop a digital transformation roadmap.\n- Integrate modern ERP and data analytics tools.\n";
            }
            if (/data|analysis|insights/i.test(problemDescription)) {
                solution += "- Collect relevant operational data.\n- Use advanced analytics to uncover trends.\n- Apply predictive modeling for decision support.\n";
            }
            if (/improvement|workflow|performance/i.test(problemDescription)) {
                solution += "- Map existing workflows.\n- Engage stakeholders for feedback.\n- Implement continuous improvement cycles.\n";
            }
            if (solution === "Based on your problem description, we recommend the following approach:\n\n") {
                solution += "- Gather detailed information about the problem.\n- Analyze industry best practices.\n- Develop a customized solution framework.\n";
            }

            responseText.textContent = solution;
        }, 1500);
    });

    // Contact form submission (basic)
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you shortly.');
        contactForm.reset();
    });
});
