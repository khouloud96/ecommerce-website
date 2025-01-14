import React, { useState } from "react";

const ContactPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isChecked) {
      console.log(
        "User submitted without consent for receiving brand-related information."
      );
    }
    console.log("Form submitted successfully!");
  };

  return (
    <div>
      <div className="contact-container">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Name *" />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email *"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number *"
            />
          </div>
          <div className="form-group">
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment *"
            ></textarea>
          </div>

          {/* Checkbox Section */}
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="acceptTerms"
              name="acceptTerms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="acceptTerms" className="checkbox-label">
              I would like to get information about the brand, its offers, and
              other related information. I understand that my information will
              be shared with Chedly Sisters and used as described in the{" "}
              <a href="/privacy-policy" target="_blank">
                privacy policy
              </a>
              .
            </label>
          </div>

          {/* submit Button */}
          <button type="submit" className="btn-submit">
            Send
          </button>
        </form>
      </div>
      <div className="business-info">
        <h1>Business Info</h1>
        <div className="info-grid">
          <div className="info-item">
            <h3>Contact number</h3>
            <p>Need more info?</p>
            <p>
              Contact us on {"  "} <strong>+33 7 49 21 78 84</strong>
            </p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>
              <a href="contact@chiccloset.fr">contact@chiccloset.fr</a>
            </p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>Paris, France.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
