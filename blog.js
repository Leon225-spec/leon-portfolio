// blog.js

const blogPostsData = {
    "accessible-web-experiences": {
        title: "Crafting Accessible Web Experiences",
        date: "July 1, 2025",
        image: "css!.jpg",
        content: `
            <p>Accessibility in web development is not just about compliance; it's about creating inclusive experiences for all users, regardless of their abilities or disabilities. A truly accessible website ensures that everyone can perceive, understand, navigate, and interact with the web.</p>
            <p>One of the foundational principles of web accessibility is to provide alternative text for all non-text content, such as images. This allows screen readers to convey the meaning of the image to users who cannot see it. For example, instead of just <code>&lt;img src="my-image.jpg"&gt;</code>, you should use <code>&lt;img src="my-image.jpg" alt="A descriptive text for the image"&gt;</code>.</p>
            <p>Keyboard navigation is another critical aspect. Many users, including those with motor impairments or who use screen readers, rely solely on keyboards to navigate websites. Ensuring that all interactive elements are reachable and operable via keyboard (using Tab, Enter, Spacebar, etc.) is paramount. This often involves using semantic HTML elements like <code>&lt;button&gt;</code> and <code>&lt;a&gt;</code>, which have built-in keyboard support.</p>
            <h3>Semantic HTML and ARIA Attributes</h3>
            <p>Using semantic HTML tags (e.g., <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>) provides inherent structure and meaning to your content, which assistive technologies can interpret. When semantic HTML isn't sufficient, ARIA (Accessible Rich Internet Applications) attributes can be used to provide additional semantic information to elements, making dynamic content and complex UI components more accessible.</p>
            <p>For instance, for a custom toggle switch, you might use <code>role="switch"</code> and <code>aria-checked="true/false"</code> to convey its state to assistive technologies. However, it's crucial to remember the first rule of ARIA: "If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead use that."</p>
            <h3>Color Contrast and Readability</h3>
            <p>Ensuring sufficient color contrast between text and its background is vital for users with low vision or color blindness. The Web Content Accessibility Guidelines (WCAG) recommend a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. Tools are available to check contrast ratios and help you select accessible color palettes.</p>
            <p>In conclusion, crafting accessible web experiences is an ongoing process that benefits everyone. By integrating accessibility best practices from the start, we can build a more inclusive web for all.</p>
        `
    },
    "future-of-frontend-frameworks": {
        title: "The Future of Front-End Frameworks",
        date: "June 20, 2025",
        image: "css1.jpg",
        content: `
            <p>The landscape of front-end development is constantly evolving, with new frameworks and libraries emerging regularly. While React, Vue, and Angular continue to dominate, several trends suggest what the future might hold for front-end frameworks.</p>
            <p>One prominent trend is the rise of "meta-frameworks" like Next.js, Nuxt.js, and SvelteKit. These frameworks build on top of existing libraries (React, Vue, Svelte, respectively) to provide enhanced features such as server-side rendering (SSR), static site generation (SSG), and API routes out-of-the-box. This approach simplifies complex development workflows and improves performance and SEO.</p>
            <p>Another significant shift is the increasing focus on web standards and native browser capabilities. Frameworks like Svelte and SolidJS compile code down to highly optimized vanilla JavaScript, reducing bundle sizes and improving runtime performance. This "no-runtime" or "minimal-runtime" approach challenges the traditional virtual DOM model and emphasizes leveraging the browser's efficiency directly.</p>
            <h3>Web Components and Interoperability</h3>
            <p>Web Components, a set of web standards that allow you to create reusable custom elements, are gaining traction. While not a framework themselves, they offer a way to build encapsulated components that can be used with any framework or even vanilla JavaScript. This promotes interoperability and reduces framework lock-in, potentially leading to a more modular and flexible front-end ecosystem.</p>
            <p>The emphasis on developer experience (DX) will also continue to grow. Tools that offer fast hot module reloading, intuitive debugging, and streamlined build processes will be favored. Frameworks that can adapt to these demands while maintaining strong performance and scalability will likely thrive.</p>
            <p>In summary, the future of front-end frameworks appears to be moving towards more opinionated meta-frameworks that abstract away complexity, lighter runtimes that leverage native browser features, and increased interoperability through web standards. Developers will have even more powerful tools to build fast, robust, and maintainable web applications.</p>
        `
    },
    "designing-with-whitespace": {
        title: "Designing with White Space",
        date: "June 5, 2025",
        image: "whitespace.jpg",
        content: `
            <p>White space, also known as negative space, is the empty area between and around elements in a design. It's not just "blank space" to be filled; it's a crucial design element that significantly impacts readability, comprehension, and overall user experience.</p>
            <p>Effective use of white space can make a design feel clean, modern, and sophisticated. It helps to reduce cognitive load by providing visual breathing room, allowing users to focus on the essential content without feeling overwhelmed. Think of it as the silence between musical notes – it's just as important as the notes themselves.</p>
            <h3>Types of White Space</h3>
            <ul>
                <li><strong>Micro white space:</strong> Refers to the small spaces between lines of text (leading), between letters (kerning), and around individual elements like buttons or icons. Proper micro white space improves readability and visual comfort.</li>
                <li><strong>Macro white space:</strong> Refers to the larger spaces between major layout elements, such as the margins around a page, the padding within sections, or the gaps between columns. Macro white space helps to define the overall structure and hierarchy of a page.</li>
            </ul>
            <h3>Benefits of Using White Space</h3>
            <ol>
                <li><strong>Improved Readability:</strong> Adequate spacing between lines and paragraphs makes text easier to read and scan.</li>
                <li><strong>Enhanced Comprehension:</strong> By grouping related elements with white space and separating unrelated ones, you create a clear visual hierarchy that aids understanding.</li>
                <li><strong>Increased User Engagement:</strong> A clean, uncluttered layout can make a website feel more inviting and less intimidating, encouraging users to explore further.</li>
                <li><strong>Brand Perception:</strong> Generous white space often conveys a sense of luxury, professionalism, and sophistication, aligning with certain brand identities.</li>
            </ol>
            <p>When designing, consciously consider how you use white space. It's a powerful tool to guide the user's eye, emphasize important information, and create a harmonious and aesthetically pleasing design.</p>
        `
    },
    "component-based-architecture": {
        title: "Component-Based Architecture",
        date: "May 18, 2025",
        image: "cssgrid.jpg",
        content: `
            <p>Component-based architecture has become the de facto standard in modern front-end development, largely popularized by libraries and frameworks like React, Vue, and Angular. This paradigm advocates for building user interfaces by composing small, independent, and reusable pieces called components.</p>
            <p>Each component typically encapsulates its own logic, styling, and markup, making it a self-contained unit. This modularity offers significant advantages in terms of development efficiency, maintainability, and scalability of web applications.</p>
            <h3>Key Principles of Component-Based Architecture</h3>
            <ul>
                <li><strong>Reusability:</strong> Components are designed to be used across different parts of an application, or even in different projects, reducing code duplication.</li>
                <li><strong>Modularity:</strong> Breaking down the UI into smaller components makes the codebase easier to understand, manage, and debug.</li>
                <li><strong>Encapsulation:</strong> Each component manages its own state and behavior, minimizing side effects and unintended interactions with other parts of the application.</li>
                <li><strong>Testability:</strong> Smaller, isolated components are easier to test independently, leading to more robust applications.</li>
            </ul>
            <h3>Benefits in Practice</h3>
            <p>Imagine building a complex e-commerce site. Instead of a single monolithic HTML file, you'd have components for a navigation bar, a product card, a shopping cart, user profiles, and so on. Each of these can be developed, tested, and maintained in isolation.</p>
            <p>When a change is needed for, say, all product cards, you only modify the <code>ProductCard</code> component, and the changes propagate everywhere it's used. This dramatically speeds up development and reduces the risk of introducing bugs.</p>
            <p>While the initial setup might require more planning, the long-term benefits of a component-based approach—especially for large and evolving applications—far outweigh the initial effort. It fosters a more organized, collaborative, and efficient development workflow.</p>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Only run this script on blog-detail.html
    if (!window.location.pathname.includes('blog-detail.html')) {
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    const post = blogPostsData[postId];

    if (post) {
        document.title = `LEON Portfolio - Blog: ${post.title}`;
        document.getElementById('blog-post-title').textContent = post.title;
        document.getElementById('blog-post-date').textContent = `Published: ${post.date}`;
        document.getElementById('blog-post-image').src = post.image;
        document.getElementById('blog-post-image').alt = `${post.title} Image`;
        document.getElementById('blog-post-content').innerHTML = post.content;

        // Trigger animations for elements on the blog detail page
        document.querySelectorAll('.fade-in-slide-up, .fade-in').forEach(el => {
            el.style.animation = 'none'; // Reset animation
            void el.offsetWidth; // Trigger reflow
            el.style.animation = null; // Reapply animation
        });

    } else {
        // Handle case where post ID is not found
        document.getElementById('blog-post-title').textContent = 'Blog Post Not Found';
        document.getElementById('blog-post-date').textContent = '';
        document.getElementById('blog-post-image').src = 'https://placehold.co/800x500/cccccc/333?text=Post+Not+Found';
        document.getElementById('blog-post-image').alt = 'Blog Post Not Found';
        document.getElementById('blog-post-content').innerHTML = '<p>The blog post you are looking for does not exist.</p>';
    }
});
