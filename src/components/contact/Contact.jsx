import "./contact.scss"
import { useState } from "react";

export default function Contact() {

    // Hook to display "thank you"-message if the Contact form has ben submitted.
    const [message, setMessage] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents a bug where the "send" button on Contact page misbehaves.
        setMessage(true);
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/contact.jpg" alt=""/>
            </div>
            <div className="center">
                <h2>Documentation:</h2>
                <div className="gridRow">
                    <div className="downloadGrid">
                        <h3>CV</h3>
                        <img className="large" title="Download my CV" src="assets/cv.png" alt="" />
                    </div>
                </div>
                <div className="gridRow">
                    <div className="downloadGrid">
                        <h3>Personal Letter</h3>
                        <img title="Download my personal letter" src="assets/letter.png" alt="" />
                    </div>
                    <div className="downloadGrid">
                        <h3>References</h3>
                        <img title="Download my references" src="assets/references.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="right">
                <h2>Contact:</h2>
                <form onSubmit={handleSubmit}>
                    <p>Please send me a message and I will get back to you as soon as I have the opportunity.</p>
                    <input type="text" placeholder="Email"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank you for your message. I will reply shortly.</span>}
                </form>
            </div>
        </div>
    )
}

