const Modal = (props: any) => {
  const { isOpen, setIsOpen } = props;

  return (
    <div className="contact-overlay" onClick={() => setIsOpen(false)}>
      {isOpen && (
        <form
          className="contact-form"
          action="https://formsubmit.co/https://ace1012.github.io/antony-rapando-portfolio"
          method="POST"
          onClick={(e) => e.stopPropagation()}
        >
          <h1>👋🏾 Contact Me</h1>
          {/* <button id="close-contact-form" onClick={() => setIsOpen(false)}>Close</button> */}
          <span id="close-contact-form" onClick={() => setIsOpen(false)}>&times;</span>
          <label data-section="Name:">
            <input id="name" type="text" name="name" required />
          </label>
          <label data-section="Email:">
            <input id="email" type="email" name="email" required />
          </label>
          <label data-section="Message:">
            <textarea name="message" id="message" required/>
          </label>
          <div className="form-buttons">
            <button type="submit">Send</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Modal;
