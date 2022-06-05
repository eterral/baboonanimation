import "../Contact/Contact.css";

import Layout from "../../components/Layout/Layout";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    emailAddress: false,
    emailBody: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      <div className="contact">
        <h2 className="headline">GET IN TOUCH!</h2>
        <div className="contact-container">
          <div className="contact-left">
            <div className="left-headliner">
              <h2 className="sect-one">1</h2>
              <h2>What are you interested in?</h2>
            </div>
            <div className="contact-names-container">
              <div className="contact-buttons">Series - Joe</div>
              <div className="contact-buttons">Voice - Marijke</div>
              <div className="contact-buttons">Development - John</div>
              <div className="contact-buttons">Features - Jeff</div>
            </div>
          </div>
          <div className="contact-right">
            <div className="right-headliner">
              <h2 className="sect-two">2</h2>
              <h2>Drop us a line!</h2>
            </div>
            <form className="email-form">
              <div className="form-row-one">
                <input
                  required
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <input
                  required
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
              </div>
              <input
                required
                type="text"
                name="company"
                value={form.company}
                placeholder="Company"
                onChange={handleChange}
              />
              <input
                required
                type="email"
                name="emailAddress"
                value={form.emailAddress}
                placeholder="Email"
                onChange={handleChange}
              />
              <input
                required
                type="text"
                name="emailBody"
                value={form.emailBody}
                placeholder=""
                onChange={handleChange}
              />
              <button type="submit" className="send-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
