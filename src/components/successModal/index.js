import React, { memo } from "react";
import Modal from "react-modal";
import { FaHome } from "react-icons/fa";
import "./styles.scss";
import { Link } from "react-router-dom";

const SuccessModal = ({ openModal, setOpenModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#B8D7ED",
      borderRadius: "12px",
    },
  };
  console.log(openModal);
  return (
    <div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        onRequestClose={() => setOpenModal(false)}
      >
        <div className="inner-modal">
          <label>Expense Added Successfully</label>
          <img
            src={require("../../assets/images/added-image.png")}
            alt="Expense Added"
            className="added-image"
          />
          <Link style={{ textDecoration: "none" }} to="/">
            <div className="home-button">
              <FaHome /> <span className="button-text">Home</span>
            </div>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default memo(SuccessModal);
