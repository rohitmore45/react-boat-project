import Modal from "react-bootstrap/Modal";
import styles from "./LoginModal.module.css";

export default function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {/* <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body>
        <div className="text-center">
          <h4>Get Started</h4>
          <p className={`${styles.modalPara1}`}>
            please enter your mobile number to continue
          </p>
          <div className={`${styles.secondDiv}`}>
            <label htmlFor="mobNum" className="form-label ms-0">
              Enter Mobile Number
            </label>
            <div>
              <input
                type="text"
                id="mobNum"
                className="form-control w-50 m-auto"
                placeholder="+91 Enter here..."
              />
            </div>
            <button className={`${styles.modalBtn}`}>SEND OTP</button>
            <p className={`${styles.modalPara2}`}>
              By confirming, you are agree to BoAt's Terms and Conditions and
              Privacy Policy
            </p>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
