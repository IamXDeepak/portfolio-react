interface ProjectsProps {
    darkMode: boolean;
}

const Projects = ({ darkMode }: ProjectsProps) => {
    const projects = [
        {
            title: 'Partner Portal',
            description: 'Developed a comprehensive portal for managing business collaborations using Angular and Strapi.',
            technologies: ['Angular', 'Strapi', 'Node.js', 'RESTful API'],
            highlights: [
                'Built a scalable architecture for managing partner relationships',
                'Implemented secure authentication and authorization system',
                'Created an intuitive dashboard for monitoring partnership metrics',
            ],
        },
        {
            title: 'Docs App',
            description: 'Built an application for efficient document handling and management with search capabilities.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
            highlights: [
                'Developed a document versioning system',
                'Implemented full-text search functionality',
                'Created custom document viewers for various file formats',
            ],
        },
        {
            title: 'Intranet (Internal Employee Docs Management)',
            description: 'Created an intranet system for internal document management, improving company workflow.',
            technologies: ['Angular', 'Django', 'MySQL', 'LUCI', 'OpenWRT'],
            highlights: [
                'Built a role-based access control system',
                'Developed a streamlined document approval workflow',
                'Created custom LUCI interfaces for OpenWRT-based systems',
            ],
        },
    ];

    return (
        <section id="projects" className="py-16">
            <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Projects</h2>
                <p className="max-w-2xl mx-auto">
                    A selection of projects that showcase my skills in full stack development, from frontend interfaces to backend systems.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg h-full flex flex-col ${darkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                    >
                        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {project.title}
                        </h3>
                        <p className="mb-4 flex-grow">{project.description}</p>

                        <div className="mb-4">
                            <h4 className="font-semibold mb-2">Key Features:</h4>
                            <ul className="list-disc list-inside space-y-1 pl-4">
                                {project.highlights.map((highlight, highlightIndex) => (
                                    <li key={highlightIndex} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto">
                            <h4 className="font-semibold mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className={`px-2 py-1 rounded-full text-xs ${darkMode
                                            ? 'bg-blue-900 text-blue-200'
                                            : 'bg-blue-100 text-blue-800'
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;