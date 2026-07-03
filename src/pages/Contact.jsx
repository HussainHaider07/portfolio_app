import { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import "../styles/contact.css";

function Contact() {
  useEffect(() => { document.title = "Contact | Portfolio"; }, []);
  return (
    <div className="page-wrapper"><div className="container">
      <h2 className="section-title">Contact</h2>
      <p className="section-subtitle">Got something to say? Let's talk.</p>
      <ContactForm />
    </div></div>
  );
}
export default Contact;