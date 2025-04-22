import deepak from "../assets/Deepak.jpg"

interface HeroProps {
    darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
    return (
        <section id="home" className="py-20 md:py-32">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                    <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                        Deepak S
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Full Stack Developer</h2>
                    <p className="text-lg mb-8">
                        With 2 years of experience in building scalable web and mobile applications. Skilled in JavaScript frameworks,
                        backend technologies, and Linux environments. Experienced in OpenWRT development, including LUCI for web-based configuration.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className={`px-6 py-3 rounded-lg font-medium ${darkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                } transition-colors`}
                        >
                            Contact Me
                        </a>
                        <a
                            href="#projects"
                            className={`px-6 py-3 rounded-lg font-medium ${darkMode
                                ? 'bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-900'
                                : 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50'
                                } transition-colors`}
                        >
                            View Work
                        </a>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                    <div className={`w-64 h-64 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-400' : 'border-blue-600'}`}>
                        <img src={deepak} alt="Deepak S" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;