// project-detail.js

const projectsData = {
    "romantic-website": {
        title: "Romantic Website",
        date: "February 2025",
        image: "romantic2.png",
        overview: "This project was a personal endeavor to create a unique and heartfelt website, designed to express affection and creativity. It focused on custom animations, interactive elements, and a personalized user journey.",
        features: [
            "Custom animated love story timeline",
            "Interactive photo gallery with personalized captions",
            "Responsive design for mobile and desktop",
            "Minimalist and elegant UI/UX"
        ],
        technologies: "HTML5, CSS3 (Tailwind CSS), JavaScript, GSAP (for animations)",
        challenges: "Ensuring smooth and performant animations across different devices was a key challenge. Optimizing image loading and maintaining a consistent visual style while incorporating diverse content required careful planning. The solution involved using lightweight animation libraries and optimizing asset delivery."
    },
    "zimsms-platform": {
        title: "zimSMS Platform",
        date: "April 2025",
        image: "zimSmS2.png",
        overview: "zimSMS was envisioned as a platform to provide small organizations with an affordable and efficient way to send SMS alerts and notifications. The goal was to simplify communication for businesses and community groups.",
        features: [
            "User authentication and dashboard",
            "SMS campaign management (draft, schedule, send)",
            "Contact list management and group segmentation",
            "Basic reporting on message delivery"
        ],
        technologies: "HTML5, CSS3 (Tailwind CSS), JavaScript, Node.js (conceptual backend), Express.js (conceptual backend)",
        challenges: "The primary challenge was securing API funding for SMS gateway integration, which ultimately led to the project being unlaunched. Technical challenges included designing a scalable message queuing system and ensuring robust error handling for message delivery statuses. The project remains a strong concept for future development.",
        status: "Startup Idea, Unlaunched due to funding"
    },
    "tronix-inventory-system": {
        title: "Tronix Inventory Management System",
        date: "May 2025 - Present",
        image: "tronix2.png",
        overview: "Collaborating as a frontend developer, I am building the user interface for Tronix, a comprehensive inventory management system. This system aims to streamline inventory tracking, order processing, and supply chain management for small to medium-sized businesses.",
        features: [
            "Intuitive dashboard for inventory overview",
            "Product management (add, edit, delete items)",
            "Order tracking and fulfillment interface",
            "User roles and permissions (admin, staff)"
        ],
        technologies: "HTML5, CSS3 (Tailwind CSS), React, Redux (for state management)",
        challenges: "Integrating with the backend API and managing complex state across various components has been a significant challenge. Ensuring real-time updates for inventory levels and smooth data synchronization requires careful state management and efficient API calls. We are using Redux for predictable state management and optimizing API requests to address these challenges.",
        status: "In Development"
    },
    "personal-portfolio-site": {
        title: "Personal Portfolio Site",
        date: "June 2025",
        image: "portfolio1.png",
        overview: "This is my personal portfolio website, designed to showcase my journey, skills, and projects as a front-end developer. It serves as a living resume and a platform to share my insights and articles.",
        features: [
            "Responsive and accessible design",
            "Smooth page transitions and animations",
            "Integrated blog for articles and insights",
            "Project gallery with detailed case studies"
        ],
        technologies: "HTML5, CSS3 (Tailwind CSS), JavaScript",
        challenges: "The main challenge was to create a design that is both minimalist and engaging, effectively highlighting my work without overwhelming the user. Balancing performance with visual appeal, especially with animations and image loading, was also a consideration. I focused on clean code, optimized assets, and efficient CSS to achieve this balance.",
        status: "Showcase"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectsData[projectId];

    if (project) {
        // Update the page title
        document.title = `LEON Portfolio - Project: ${project.title}`;

        // Populate project details
        document.getElementById('project-title').textContent = project.title;
        document.getElementById('project-date').textContent = `Project Date: ${project.date}`;
        document.getElementById('project-image').src = project.image;
        document.getElementById('project-image').alt = `${project.title} Screenshot`;
        document.getElementById('project-overview').textContent = project.overview;
        document.getElementById('project-tech').textContent = project.technologies;
        document.getElementById('project-challenges').textContent = project.challenges;

        // Populate features list
        const featuresList = document.getElementById('project-features');
        featuresList.innerHTML = ''; // Clear existing list items
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });

        // Display status if available
        const projectStatus = document.getElementById('project-status');
        if (project.status) {
            projectStatus.textContent = `Status: ${project.status}`;
        } else {
            projectStatus.textContent = ''; // Clear if no status
        }

        // Trigger animations for elements on the project detail page
        document.querySelectorAll('.fade-in-slide-up, .fade-in').forEach(el => {
            el.style.animation = 'none'; // Reset animation
            void el.offsetWidth; // Trigger reflow
            el.style.animation = null; // Reapply animation
        });

    } else {
        // Handle case where project ID is not found (e.g., redirect to projects page)
        document.getElementById('project-title').textContent = 'Project Not Found';
        document.getElementById('project-date').textContent = '';
        document.getElementById('project-image').src = 'https://placehold.co/800x500/cccccc/333?text=Project+Not+Found';
        document.getElementById('project-image').alt = 'Project Not Found';
        document.getElementById('project-overview').textContent = 'The project you are looking for does not exist.';
        document.getElementById('project-features').innerHTML = '';
        document.getElementById('project-tech').textContent = '';
        document.getElementById('project-challenges').textContent = '';
        document.getElementById('project-status').textContent = '';
    }
});
