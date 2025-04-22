interface EducationProps {
    darkMode: boolean;
}

const Education = ({ darkMode }: EducationProps) => {
    return (
        <section id="education" className="py-16">
            <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Education</h2>
                <p className="max-w-2xl mx-auto">
                    My academic background that has provided me with a strong foundation in computer science and engineering.
                </p>
            </div>

            <div className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <div className="flex flex-col md:flex-row justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold">BE - Computer Science</h3>
                        <p className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium`}>
                            Coimbatore Institute of Engineering and Technology
                        </p>
                    </div>
                    <p className={`mt-2 md:mt-0 font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>2024</p>
                </div>
                <div className="mt-4">
                    <h4 className="font-semibold mb-2">Languages:</h4>
                    <div className="flex space-x-4">
                        <div>
                            <span className="font-medium">English</span>
                            <span className="ml-2 text-sm">(Fluent)</span>
                        </div>
                        <div>
                            <span className="font-medium">Tamil</span>
                            <span className="ml-2 text-sm">(Fluent)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
