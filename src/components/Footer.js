import React, { useState } from "react";
import "../style/style.css";
import Modal from "react-modal";

function Footer() {
  var subtitle;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function openModal() {
    setModalIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function changeColor(e) {
    e.target.style.color = "#fff";
  }

  function onLeave(e) {
    e.target.style.color = "#333";
  }

  return (
    <div>
      <footer>
        <button
          style={footerBtn}
          onClick={openModal}
          onMouseEnter={changeColor}
          onMouseLeave={onLeave}
        >
          <h1>Li Ming, &copy; 2020</h1>
        </button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
          <button
            onMouseEnter={changeColor}
            onMouseLeave={onLeave}
            onClick={closeModal}
            style={xBtn}
          >
            X
          </button>
          <div>I am a Li Ming</div>
          <form></form>
        </Modal>
      </footer>
    </div>
  );
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "100%",
    right: "auto",
    bottom: "20%",

    transform: "translate(-50%, -50%)",
  },
};

const footerBtn = {
  backgroundColor: "rgba(0, 0, 0, 0.1)",
  backgroundRepeat: "no-repeat",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  outline: "none",
  alignItems: "center",
  width: "100%",
};

const xBtn = {
  float: "right",
  backgroundColor: "Transparent",
  backgroundRepeat: "no-repeat",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",
  outline: "none",
};

export default Footer;
