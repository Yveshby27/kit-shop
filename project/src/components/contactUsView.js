import React from "react";
import "../styles/contactUsView.css";
import ContactUsForm from "./contactUsForm";
import { useDispatch, useSelector } from "react-redux";
import { contactUsActions } from "../slices/contactUsSlice";
const ContactUsView = () => {
  const contactUsSelector = useSelector((state) => state.contactUs);
  const isSubmitted = contactUsSelector.isSubmitted;
  const name = contactUsSelector.name;
  const dispatch = useDispatch();
  return (
    <div>
      {!isSubmitted && (
        <div className="contact-form-section">
          <h2>Contact Us</h2>
          <ContactUsForm></ContactUsForm>
        </div>
      )}
      {isSubmitted && (
        <div className="feedback-section">
          <h2>Thank You for your message,{name}!</h2>
          <h2>We will respond as soon as we can.</h2>
          <button
            onClick={() => dispatch(contactUsActions.switchIsSubmitted())}
          >
            Send another message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactUsView;
