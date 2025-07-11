import React, { useState } from 'react';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const accessKey = import.meta.env.VITE_WEB3FORM_ACCESS_KEY;
        
        const formData = new FormData(event.target);
       formData.append("access_key",accessKey); 
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });

            const result = await response.json();
            
            if (result.success) {
                setSubmitSuccess(true);
                event.target.reset();
                setTimeout(() => setSubmitSuccess(false), 5000); // Skrivanje poruke success nakon 5 sekundi
            } else {
                console.error("Error:", result);
                alert("There was an error sending your message. Please try again.");
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className="w-100 mx-auto p-8 rounded-xl shadow-sm bg-white dark:bg-darkgray border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 font-inter text-darkgray dark:text-white">Send me a message</h2>
          
            {submitSuccess && (
                <div className="mb-4 p-4 bg-green-100 text-darkgray rounded-lg">
                    Message sent successfully! We'll get back to you soon.
                </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
                <input 
                    type="checkbox" 
                    name="botcheck" 
                    className="hidden" 
                    style={{ display: 'none' }}
                />
                
                <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-darkgray dark:text-white mb-1">Full Name</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 hover:border-purple/50 hover:shadow-purple/30 transition-colors">
                       
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full focus:outline-none text-darkgray dark:text-white"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium  text-darkgray dark:text-white mb-1">Email Address</label>
                    <div className="flex items-center border border-gray-300 rounded-lg p-3 hover:border-purple/50 hover:shadow-purple/30 transition-colors">
                        
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full focus:outline-none text-darkgray dark:text-white"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>

                <div className="relative">
                    <label htmlFor="message" className="block text-sm font-medium text-darkgray dark:text-white mb-1">Your Message</label>
                    <div className="flex items-start border border-gray-300 rounded-lg p-3 hover:border-purple/50 hover:shadow-purple/30 transition-colors">
                       
                        <textarea
                            id="message"
                            name="message"
                            className="w-full focus:outline-none text-darkgray dark:text-white resize-none"
                            rows="4"
                            placeholder="Write your message!"
                            required
                        ></textarea>
                    </div>
                </div>

                <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                <button
                    type="submit"
                    disabled={isSubmitting}
                                         className={`w-full flex items-center justify-center border bg-white dark:bg-darkgray text-darkgray border-purple shadow-purple dark:text-white dark:border-purple/50 dark:shadow-purple py-3 px-4 rounded-lg font-medium transition-colors ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-purple hover:text-white dark:hover:text-white'
                    }`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                        </>
                    ) : (
                        'Send Message'
                    )}
                </button>
            </form>
        </div>
    );
};

export default Contact;