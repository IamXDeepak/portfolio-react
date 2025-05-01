interface FooterProps {
    darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className={`text-center md:text-left ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            © {currentYear} Deepak S. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a
                            href="mailto:deepaks8404@gmail.com"
                            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                            aria-label="Email"
                        >
                            Email
                        </a>
                        <a
                            href="https://github.com/IamXDeepak"
                            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>
                        <a
                            href="www.linkedin.com/in/iam-deepak-s"
                            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-blue-600'}`}
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;