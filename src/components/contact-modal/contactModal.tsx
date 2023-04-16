interface IModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactModal = ({ isOpen, setIsOpen }: IModalProps) => {
  

  return (
    <div
      className={`contact-overlay ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(false)}
    >
      {isOpen && (
        <form
          className="contact-form"
          action="https://formsubmit.co/d375fdab27e276ae0dcee4b28ea32f8c"
          method="POST"
          onClick={(e) => e.stopPropagation()}
        >
          <header>
            <h1>👋🏾 Contact Me</h1>
            <span id="close-contact-form" onClick={() => setIsOpen(false)}>
              &times;
            </span>
          </header>
          <div className="form-content">
            <div className="form-summary">
              <article>
                In case you would like to contact me, go ahead and send me an
                email 😁.
              </article>
            </div>
            <div className="form-input-fields">
            <input type="hidden" name="_next" value="https://ace1012.github.io/antony-rapando-portfolio/" />
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

export default ContactModal;
