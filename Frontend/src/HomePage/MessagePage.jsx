import axios from "axios";
import React, { useContext, useState } from "react";
import { ContextCreateApi } from "../Context/ContextApi";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { SendMessage } = useContext(ContextCreateApi)

  const handleMessage = async (e) => {
    e.preventDefault();
    SendMessage(firstName, lastName, email, phone, message)
    setTimeout(() => {
      setFirstName("")
      setLastName("")
      setEmail("")
      setPhone("")
      setMessage("")
    }, 1500)


  };

  return (
    <>
      <ToastContainer />
      <div className="container form-component message-form">
        <h2 className="text-center text-4xl text-bold font-bold">Send Us A Message</h2>
        <form onSubmit={handleMessage}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <textarea
            rows={7}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
};
export default MessageForm;


