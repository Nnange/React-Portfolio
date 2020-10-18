import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();


  const sendMessage = (e) => {
    e.preventDefault();
    console.log(name, email, subject, message);
    history.push("/contact");
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="ten columns">
          <h1>Reach Out</h1>
          <p className="lead">
            Feel free to contact me for any work or suggestions below
          </p>
        </div>
      </div>
      <div className="row">
        <aside className="eigth columns footer-widgets">
          <div className="widget">

            <form>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}

              />
              <textarea 
                type="text"
                value={message}
                placeholder="Message"   
                onChange={(e) => setMessage(e.target.value)}
              />
              
              
              <button type="submit" onClick={sendMessage}>Send Message</button>
            </form>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactUs;
