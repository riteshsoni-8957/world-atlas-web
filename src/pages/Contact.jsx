function Contact() {
    const handleFormSubmit = (formData) => {
        const formInputData = Object.fromEntries(formData.entries());
        console.log(formInputData);
    };

    return (
        <>
            <section className="contact-section">
                <div className="container">
                    <h1>Contact Us</h1>

                    <form action={handleFormSubmit} className="contact-form flex">
                        <input 
                            type="text" 
                            placeholder="Enter Your Name"
                            required
                            className="contact-input"
                            id="name"
                            name="Name"
                            minLength={3}
                            maxLength={20}
                        />

                        <input 
                            type="email" 
                            placeholder="Enter Your Email"
                            required
                            className="contact-input"
                            id="email"
                            name="Email"
                        />

                        <textarea 
                            placeholder="Enter Your Message"
                            required
                            className="contact-textarea"
                            id="message"
                            name="Message"
                            minLength={20}
                            maxLength={200}
                        ></textarea>

                        <button type="submit" className="contact-button">Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact; 