interface SkillsProps {
    darkMode: boolean;
}

const Skills = ({ darkMode }: SkillsProps) => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular', 'React', 'React Native', 'Ionic'],
        },
        {
            title: 'Backend',
            skills: ['Node.js', 'Express.js', 'Django', 'Strapi'],
        },
        {
            title: 'Databases',
            skills: ['MongoDB', 'MySQL'],
        },
        {
            title: 'Tools & Others',
            skills: ['Git', 'REST API', 'GraphQL', 'Linux', 'OpenWRT', 'LUCI'],
        },
    ];

    return (
        <section id="skills" className="py-16">
            <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Technical Skills</h2>
                <p className="max-w-2xl mx-auto">
                    My technical toolbox is filled with a variety of languages, frameworks, and tools that I've mastered over the years.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'
                            }`}
                    >
                        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className={`px-3 py-1 rounded-full text-sm ${darkMode
                                        ? 'bg-blue-900 text-blue-200'
                                        : 'bg-blue-100 text-blue-800'
                                        }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;