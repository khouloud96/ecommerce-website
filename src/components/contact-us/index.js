const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <input type="text" id="name" name="name" placeholder="Name" />
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
            placeholder="Phone number"
          />
        </div>
        <div className="form-group">
          <textarea
            id="comment"
            name="comment"
            placeholder="Comment"
          ></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
