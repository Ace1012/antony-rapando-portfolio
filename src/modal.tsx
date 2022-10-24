const Modal = (props: any) => {
  const { isOpen, setIsOpen } = props;

  return (
    <div className="contact-overlay" onClick={() => setIsOpen(false)}>
      {isOpen && (
        <form
          className="contact-form"
          action="https://formsubmit.co/d375fdab27e276ae0dcee4b28ea32f8c"
          method="POST"
          onClick={(e) => e.stopPropagation()}
        >
          <span id="close-contact-form" onClick={() => setIsOpen(false)}>
            &times;
          </span>
          <h1>👋🏾 Contact Me</h1>
          <div className="form-content">
            <div className="form-summary">
              <article>
                In case you would like to contact me, go ahead and send me an
                email 😁.
              </article>
            </div>
            <div className="form-input-fields">
              <label data-section="Name:">
                Name:
                <input type="text" name="name" required />
              </label>
              <label data-section="Email:">
                Email:
                <input type="email" name="email" required />
              </label>
              <label data-section="Message:">
                Message:
                <textarea name="message" id="message" required />
              </label>
              <div className="form-buttons">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Modal;
