import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Auth from "../context/Auth";
import AuthAdmin from "../context/AuthAdmin";
import "../style/styleLogin.css";

const Log = () => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showAuthAdminModal, setShowAuthAdminModal] = useState(false);

  const handleShowAuthModal = () => setShowAuthModal(true);
  const handleCloseAuthModal = () => setShowAuthModal(false);
  const handleShowAuthAdminModal = () => setShowAuthAdminModal(true);
  const handleCloseAuthAdminModal = () => setShowAuthAdminModal(false);

  return (
    <div className="container">
      <button className="button" onClick={handleShowAuthModal}>Employé</button>
      <button className="button" onClick={handleShowAuthAdminModal}>Admin</button>

      <Modal show={showAuthModal} onHide={handleCloseAuthModal}>
        <Modal.Body>
          <Auth />
        </Modal.Body>
      </Modal>

      <Modal show={showAuthAdminModal} onHide={handleCloseAuthAdminModal}>
        <Modal.Body>
          <AuthAdmin />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Log;