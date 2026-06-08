function Contact() {
    return (
        <div className="page">

            <h1>Contact Us</h1>

            <form className="contact-form">

                <input
                    type="text"
                    placeholder="Your Name"
                />

                <input
                    type="text"
                    placeholder="Your Email"
                />

                <textarea
                    placeholder="Message"
                />

                <button>
                    Send Message
                </button>


            </form>


        </div>
    );
}

export default Contact;