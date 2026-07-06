import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showError, setShowError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Me";
    emailjs.init("7J570LfphgYLD4JeX");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    let nameIsValid = true;
    let emailIsValid = true;
    let messageIsValid = true;

    if (formData.name.trim() === '') {
      isValid = false;
      nameIsValid = false;
    }

    if (formData.email.trim() === '' || !isValidEmail(formData.email)) {
      isValid = false;
      if (formData.email.trim() !== '' && !isValidEmail(formData.email)) {
        emailIsValid = false;
      }
    }

    if (formData.message.trim() === '') {
      isValid = false;
      messageIsValid = false;
    }

    if (!isValid) {
      setShowError(true);
      setShowEmailError(false);
      if (nameIsValid && messageIsValid && !emailIsValid) {
        setShowError(false);
        setShowEmailError(true);
      }
    } else {
      setShowError(false);
      setShowEmailError(false);
      setIsLoading(true);

      setTimeout(() => {
        sendMail();
      }, 2000);
    }
  };

  const sendMail = () => {
    const serviceID = "service_q48urvt";
    const templateID = "template_smsbo0b";

    const params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, params)
      .then(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.log("Email not sent!!", error);
        setIsLoading(false);
      });
  };

  const handleSuccessOk = () => {
    setIsSubmitted(false);
    setIsLoading(false);
    setShowError(false);
    setShowEmailError(false);
  };

  return (
    <main className="contact-main">
      <div className="contact-full">
        <div className={`contact-section ${isSubmitted ? 'csa-cs' : ''}`}>
          <div className="cs-top mobile-show">
            <h1>Reach Me</h1>
            <div className="border-line"></div>
          </div>
          <div className="cs-item email">
            <div className="icon"><i className="fas fa-envelope"></i></div>
            <div className="text">
              <div className="placeHolder">E-mail</div>
              <div className="info">{portfolioData.contactInfo.email}</div>
            </div>
          </div>
          <div className="cs-item number">
            <div className="icon"><i className="fas fa-phone"></i></div>
            <div className="text">
              <div className="placeHolder">Phone</div>
              <div className="info">{portfolioData.contactInfo.phone}</div>
            </div>
          </div>
          <div className="cs-item address">
            <div className="icon"><i className="fas fa-map-marker-alt"></i></div>
            <div className="text">
              <div className="placeHolder">Location</div>
              <div className="info">{portfolioData.contactInfo.location}</div>
            </div>
          </div>
        </div>

        <section className={`contact-form ${isSubmitted ? 'csa-cf' : ''}`}>
          <h1>Contact Me</h1>
          <div className="border-line"></div>
          
          <div className={`contact-submit-after ${isSubmitted ? 'show' : ''}`}>
            <div className="box">
              <i className="fa-solid fa-circle-check csa-icon"></i>
              <div className="csa-text">Message sent successfully</div>
              <div className="csa-ok" onClick={handleSuccessOk}>OK</div>
            </div>
          </div>

          <form id="contact-form" className={`form-section ${isSubmitted ? 'hide' : ''}`} onSubmit={handleSubmit} noValidate>
            <div className="form-group name-section">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className={`error ${showError ? 'error-show' : ''}`}>
              <i className="fa-solid fa-circle-xmark error-icon"></i>
              Please fill out all the fields
            </div>

            <div className={`email-error ${showEmailError ? 'error-show' : ''}`}>
              <i className="fa-solid fa-circle-xmark error-icon"></i>
              Email address is not valid
            </div>

            <button
              type="submit"
              id="contact-submit"
              className={`contact-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              <div className={`contact-load ${isLoading ? 'show' : ''}`}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div className={`submit-text ${isLoading ? 'hide' : ''}`}>
                Submit
              </div>
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contact;
