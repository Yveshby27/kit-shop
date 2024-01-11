import React, { useState } from "react";
import { contactUsActions } from "../slices/contactUsSlice";
import { useSelector, useDispatch } from "react-redux";

const ContactUsForm = () => {
  const contactUs = useSelector((state) => state.contactUs);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    if (e.target.id === "name") setName(e.target.value);
    else if (e.target.id === "email") setEmail(e.target.value);
    else if (e.target.id === "subject") setSubject(e.target.value);
    else setMessage(e.target.message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactUsActions.switchIsSubmitted());
    dispatch(contactUsActions.saveName(name));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Subject:
        <input
          type="text"
          name="subject"
          id="subject"
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          rows="5"
          id="message"
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsForm;
