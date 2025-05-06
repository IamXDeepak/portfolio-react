import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Loader } from 'lucide-react';

interface ContactProps {
    darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<string>("Send Message")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await fetch("https://us-central1-yourproject.cloudfunctions.net/sendContactEmail", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("Message sent!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (err) {
            setStatus("Error sending message.");
        }
        finally {
            setTimeout(() => {
                setStatus('Send Message')
            }, 1000)
        }
    };

    const contactLinks = [
        {
            icon: <Mail size={24} />,
            text: 'deepaks8404@gmail.com',
            href: 'mailto:deepaks8404@gmail.com',
            label: 'Email'
        },
        {
            icon: <Phone size={24} />,
            text: '+91 97889 38920',
            href: 'tel:+919788938920',
            label: 'Phone'
        },
        {
            icon: <Github size={24} />,
            text: 'Github',
            href: 'https://github.com/IamXDeepak',
            label: 'Github'
        },
        {
            icon: <Linkedin size={24} />,
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/iam-deepak-s',
            label: 'LinkedIn'
        },
    ];

    return (
        <section id="contact" className="py-16">
            <div className="text-center mb-12">
                <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Contact Me</h2>
                <p className="max-w-2xl mx-auto">
                    I'm always open to new opportunities and collaborations. Feel free to reach out!
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
                    <div className="space-y-4">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${darkMode
                                    ? 'hover:bg-gray-800 text-gray-300 hover:text-white'
                                    : 'hover:bg-gray-100 text-gray-700 hover:text-blue-600'
                                    }`}
                                aria-label={link.label}
                            >
                                <div className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{link.icon}</div>
                                <span>{link.text}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg ${darkMode
                                    ? 'bg-gray-800 border-gray-700 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                                    } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg ${darkMode
                                    ? 'bg-gray-800 border-gray-700 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                                    } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className={`block mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className={`w-full px-4 py-2 rounded-lg ${darkMode
                                    ? 'bg-gray-800 border-gray-700 text-white'
                                    : 'bg-white border-gray-300 text-gray-900'
                                    } border focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`px-6 py-3 rounded-lg font-medium flex flex-row items-center justify-center ${darkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-blue-600 hover:bg-blue-700 text-white'
                                } transition-colors`}
                        >
                            {status == 'Sending...' && <Loader className='mr-2' size={20} />} {status}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;