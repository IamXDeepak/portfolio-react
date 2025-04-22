interface ExperienceProps {
    darkMode: boolean;
}

const Experience = ({ darkMode }: ExperienceProps) => {
    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'COSGrid Networks',
            period: 'Jun 2024 – Present',
            location: 'Chennai',
            responsibilities: [
                'Developed and maintained responsive web applications using Angular, Django, and Strapi with Node.js.',
                'Built and maintained mobile applications using Angular Ionic and integrated third-party services via RESTful APIs.',
                'Implemented authentication using JWT and OAuth.',
                'Developed LUCI interfaces for OpenWRT-based systems and worked in Linux environments.',
                'Collaborated with cross-functional teams to design and deliver scalable and efficient software solutions.',
            ],
        },
        {
            title: 'Frontend Developer (Internship)',
            company: 'COSGrid Networks',
            period: 'Oct 2023 – May 2024',
            location: 'Chennai',
            responsibilities: [
                'Developed and maintained Angular-based web applications with Strapi backend support.',
                'Optimized UI performance, ensuring a responsive and seamless user experience.',
                'Integrated RESTful APIs and contributed to LUCI interfaces for OpenWRT on Linux.',
            ],
        },
        {
            title: 'Frontend Developer (Internship)',
            company: 'XYLOINC',
            period: 'May 2023 – Sep 2023',
            location: 'Coimbatore',
            responsibilities: [
                'Developed responsive UI components for React and Ionic applications.',
                'Assisted in building and maintaining mobile apps using React Native.',
                'Optimized performance and enhanced user experience with UI/UX best practices.',
            ],
        },
    ];

    return (
        <section id="experience" className="py-16">
            <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Work Experience</h2>
                <p className="max-w-2xl mx-auto">
                    My professional journey in software development, focusing on full stack web and mobile application development.
                </p>
            </div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold">{exp.title}</h3>
                                <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>{exp.company}</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-right">
                                <p className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{exp.period}</p>
                                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{exp.location}</p>
                            </div>
                        </div>
                        <ul className="list-disc list-inside space-y-2 pl-4">
                            {exp.responsibilities.map((item, itemIndex) => (
                                <li key={itemIndex} className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;