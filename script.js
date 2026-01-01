document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('command-input');
    const output = document.getElementById('output');
    const terminal = document.querySelector('.terminal');
    const lastLogin = document.getElementById('last-login');

    // Set last login time
    lastLogin.textContent = new Date().toLocaleString();

    // Focus input on click
    document.addEventListener('click', () => {
        input.focus();
    });

    const commands = {
        help: {
            description: 'List all available commands',
            execute: () => {
                let helpHTML = '<div class="section-title">AVAILABLE COMMANDS</div><div class="help-grid">';
                Object.keys(commands).forEach(cmd => {
                    helpHTML += `
                        <span class="help-command">${cmd}</span>
                        <span class="help-description">${commands[cmd].description}</span>
                    `;
                });
                helpHTML += '</div>';
                return helpHTML;
            }
        },
        clear: {
            description: 'Clear the terminal screen',
            execute: () => {
                output.innerHTML = '';
                return null;
            }
        },
        about: {
            description: 'Display contact information and summary',
            execute: () => {
                return `
<div class="section-title">CONTACT & SUMMARY</div>
<div class="contact-info">
    <span class="contact-label">Name:</span> <span>Pubudu Perera</span>
    <span class="contact-label">Role:</span> <span>Senior Front End Engineer</span>
    <span class="contact-label">Location:</span> <span>Colombo, Sri Lanka</span>
    <span class="contact-label">Email:</span> <a href="mailto:ppubudu4@gmail.com">ppubudu4@gmail.com</a>
    <span class="contact-label">LinkedIn:</span> <a href="https://linkedin.com/in/pubudu-dananjaya-perera" target="_blank">linkedin.com/in/pubudu-dananjaya-perera</a>
    <span class="contact-label">Phone:</span> <span>+94775517522</span>
</div>
<p>With over 6 years of experience in software engineering, I have expertise in React, Next js, Node and Java, as well as proficiency in leading and mentoring teams. Spearheaded the successful completion of projects, streamlined codebase for efficiency, and mentored junior developers for talent development.</p>
`;
            }
        },
        experience: {
            description: 'Show work experience',
            execute: () => {
                return `
<div class="section-title">WORK EXPERIENCE</div>

<div class="job-entry">
    <div class="job-header">
        <span class="company">Altrium (Pvt) Ltd</span>
        <span class="date">10/2022 - Present</span>
    </div>
    <span class="role">Associate Lead Software Engineer</span>
    <div class="details">
        <ul>
            <li>Led a team of software engineers to successfully complete projects within deadlines, ensuring high-quality end products.</li>
            <li>Designing, coding, testing, debugging and documenting programs using agile development practices.</li>
            <li>Worked collaboratively with stakeholders to resolve technical roadblocks.</li>
            <li>Streamlined codebase for increased efficiency with regular refactoring and optimization efforts.</li>
            <li>Mentored junior developers, fostering talent development and growth within the company.</li>
            <li>Troubleshot complex issues swiftly under pressure while maintaining clear communication with affected parties.</li>
            <li>Offered experience with React, Java, Spring, MongoDB and Microservices.</li>
        </ul>
    </div>
    <span class="role">Senior Software Engineer</span>
    <div class="details">
        <ul>
            <li>Checked client code for bugs and weaknesses using approved troubleshooting methods.</li>
            <li>Promoted technical leadership to entry-level and junior engineers in complex enterprise system environment.</li>
            <li>Updated job knowledge by studying state-of-the-art development tools and programming techniques.</li>
            <li>Practiced and encouraged respectful and transparent communication in interactions.</li>
            <li>Provided direction and guidance to process improvements and established policies.</li>
            <li>Analyzed proposed technical solutions based on customer requirements.</li>
            <li>Offered experience with React and Java.</li>
        </ul>
    </div>
</div>

<div class="job-entry">
    <div class="job-header">
        <span class="company">Orel IT</span>
        <span class="date">08/2021 - 10/2022</span>
    </div>
    <span class="role">Senior Software Engineer</span>
    <div class="details">
        <ul>
            <li>Lead front end Developer in ORELBUY.</li>
            <li>Worked multiple react project in OREL IT.</li>
            <li>Leading and guiding the frontend team.</li>
            <li>Code reviews the front-end developers.</li>
            <li>Checked client code for bugs and weaknesses using approved troubleshooting methods.</li>
            <li>Promoted technical leadership to entry-level and junior engineers in complex enterprise system environment.</li>
            <li>Offered experience with React, Next Js.</li>
        </ul>
    </div>
</div>

<div class="job-entry">
    <div class="job-header">
        <span class="company">OREL Corporation</span>
        <span class="date">11/2020 - 09/2021</span>
    </div>
    <span class="role">Front End Developer</span>
    <div class="details">
        <ul>
            <li>Mainly my task is built internal web applications in react.</li>
            <li>Manage other front-end developers, code reviews, share knowledge and etc.</li>
            <li>Lead Front-end developer in OREL Corp.</li>
            <li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.</li>
            <li>Improved tools to boost user interaction and deliver design versatility.</li>
            <li>Contributed to projects within Scrum project management environments.</li>
            <li>Guided customers on project stages and iterations with input on best practices, user needs and technology capabilities.</li>
        </ul>
    </div>
</div>

<div class="job-entry">
    <div class="job-header">
        <span class="company">Cyberkode</span>
        <span class="date">10/2019 - 11/2020</span>
    </div>
    <span class="role">Trainee Front End Developer</span>
    <div class="details">
        <ul>
            <li>Attended training courses to build understanding of processes, techniques, and industry.</li>
            <li>Learned new materials, processes, and programs quickly.</li>
            <li>Participated in on-the-job training, working closely with supervisors and coworkers and asking appropriate questions.</li>
        </ul>
    </div>
    <span class="role">Front End Developer Intern</span>
    <div class="details">
        <ul>
            <li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.</li>
            <li>Advocated for well-tested and documented, high quality code.</li>
            <li>Made recommendations for new technology integration based on suitability and alignment to business goals.</li>
        </ul>
    </div>
</div>
`;
            }
        },
        skills: {
            description: 'List technical skills',
            execute: () => {
                return `
<div class="section-title">SKILLS</div>

<div class="skill-category">
    <span class="skill-title">Languages & Frameworks:</span>
    <span class="skill-list">React, Next.js, Node.js, Java, JavaScript, TypeScript, Express, React Native, Redux, Redux-Saga, Recoil, Jotai</span>
</div>
<div class="skill-category">
    <span class="skill-title">Tools & Technologies:</span>
    <span class="skill-list">Git, Docker, MongoDB, MySQL, GraphQL, REST APIs, WebSockets, Microservices, Microfrontend</span>
</div>
<div class="skill-category">
    <span class="skill-title">Styling:</span>
    <span class="skill-list">CSS, SASS, LESS, Tailwind CSS, Ant Design, MUI, Bootstrap, Styled-components</span>
</div>
<div class="skill-category">
    <span class="skill-title">Methodologies & Others:</span>
    <span class="skill-list">Agile, Scrum (Certified ScrumMaster), Figma, Storybook, Jest, npm, yarn, pnpm</span>
</div>
`;
            }
        },
        education: {
            description: 'Display education history',
            execute: () => {
                return `
<div class="section-title">EDUCATION</div>

<div class="edu-entry">
    <div class="edu-header">
        <span class="school">University College Dublin</span>
        <span class="date">01/2020</span>
    </div>
    <span class="degree">Bachelor of Science: Computer Science</span>
    <div class="details">GPA: 3.73 | First Class Honours</div>
</div>

<div class="edu-entry">
    <div class="edu-header">
        <span class="school">Ananda College</span>
        <span class="date">01/2015</span>
    </div>
    <span class="degree">High School Diploma</span>
</div>
`;
            }
        },
        projects: {
            description: 'Show key projects',
            execute: () => {
                return `
<div class="section-title">PROJECTS</div>

<div class="project-entry">
    <div class="project-header">
        <span class="project-name">Planyear</span>
    </div>
    <div class="details">
        <ul>
            <li>Lead Frontend Engineer for Planyear, a SaaS insurance brokerage platform in production.</li>
            <li>Responsible for designing and developing reusable components, while leading and managing a frontend development team.</li>
            <li><strong>Tech:</strong> React, Redux, Redux-toolkit, ant design, java, spring, microservices.</li>
        </ul>
    </div>
</div>

<div class="project-entry">
    <div class="project-header">
        <span class="project-name">Orelbuy Marketplace</span>
    </div>
    <div class="details">
        <ul>
            <li>Developed a fully functional e-commerce application using Next.js with server-side rendering (SSR).</li>
            <li>Solely responsible for the entire web development process.</li>
            <li><strong>Tech:</strong> Next.js, React, Redux, Styled-components, System CSS, SASS.</li>
        </ul>
    </div>
</div>

<div class="project-entry">
    <div class="project-header">
        <span class="project-name">Orelbuy Marketplace Back Office</span>
    </div>
    <div class="details">
        <ul>
            <li>Led the frontend team in developing the full back office for Orelbuy Marketplace.</li>
            <li>Utilized React, Redux-Saga, and Ant Design (AntD).</li>
        </ul>
    </div>
</div>

<div class="project-entry">
    <div class="project-header">
        <span class="project-name">Cash to Cash Project</span>
    </div>
    <div class="details">
        <ul>
            <li>Led the frontend team and designed the frontend architecture for OREL Corp.'s internal application.</li>
            <li>Built using React, Redux-Saga, and Ant Design.</li>
        </ul>
    </div>
</div>

<div class="project-entry">
    <div class="project-header">
        <span class="project-name">Orel Academy</span>
    </div>
    <div class="details">
        <ul>
            <li>Led the frontend team in developing the back office and web platform for Orel Academy.</li>
            <li>Utilized React.js, Redux, Redux-Saga, and integrated with Spring Boot microservices.</li>
        </ul>
    </div>
</div>

<div class="project-entry">
    <div class="project-header">
        <span class="project-name">Fun Projects</span>
    </div>
    <div class="details">
        <ul>
            <li><strong>Google Clone:</strong> Next.js, SSR, Tailwind CSS.</li>
            <li><strong>Hulu Clone:</strong> Next.js, SSR, Tailwind CSS.</li>
            <li><strong>GitHub Repo Search:</strong> Next.js, SSR, Bulma CSS.</li>
        </ul>
    </div>
</div>
`;
            }
        },
        certifications: {
            description: 'List certifications and awards',
            execute: () => {
                return `
<div class="section-title">CERTIFICATIONS & AWARDS</div>

<div class="job-entry">
    <div class="job-header">
        <span class="company">Certified ScrumMaster®</span>
        <span class="date">03/2024 - 03/2026</span>
    </div>
    <span class="role">Scrum Alliance, Inc.</span>
</div>

<div class="job-entry">
    <div class="job-header">
        <span class="company">ACE Award 2023</span>
        <span class="date">11/2023</span>
    </div>
    <span class="role">Altrium - Awards & Scholarships</span>
</div>
`;
            }
        },
    };

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const commandLine = input.value.trim();
            if (commandLine) {
                handleCommand(commandLine);
            }
            input.value = '';
        }
    });

    function handleCommand(cmdLine) {
        const args = cmdLine.split(' ');
        const cmd = args[0].toLowerCase();

        // Create command history entry
        const historyEntry = document.createElement('div');
        historyEntry.className = 'output-line';
        historyEntry.innerHTML = `<span class="prompt">visitor@pubudu.dev:~$</span> ${cmdLine}`;
        output.appendChild(historyEntry);

        if (commands[cmd]) {
            const result = commands[cmd].execute();
            if (result !== null) {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'result';
                resultDiv.innerHTML = result;
                output.appendChild(resultDiv);
            }
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'result';
            errorDiv.style.color = 'var(--error-color)';
            errorDiv.textContent = `Command not found: ${cmd}. Type 'help' for available commands.`;
            output.appendChild(errorDiv);
        }

        // Scroll to bottom
        terminal.scrollTop = terminal.scrollHeight;
    }
});
