import React, { useState, useEffect } from "react";

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Show popup automatically after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your enquiry has been submitted.");
    setShow(false);
  };

  const popupStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      animation: "fadeIn 0.5s ease",
    },
    container: {
      background: "#fff",
      padding: "25px 30px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      width: "90%",
      maxWidth: "400px",
      position: "relative",
      animation: "slideUp 0.5s ease",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      background: "#007bff",
      color: "#fff",
      border: "none",
      padding: "12px",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "0.3s",
    },
    closeBtn: {
      position: "absolute",
      top: "8px",
      right: "12px",
      background: "none",
      border: "none",
      fontSize: "20px",
      cursor: "pointer",
      color: "#555",
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeIn { from {opacity: 0;} to {opacity: 1;} }
        @keyframes slideUp { from {transform: translateY(40px); opacity: 0;} to {transform: translateY(0); opacity: 1;} }
        button:hover { background: #0056b3 !important; }
      `}</style>

      {show && (
        <div style={popupStyles.overlay}>
          <div style={popupStyles.container}>
            <button style={popupStyles.closeBtn} onClick={() => setShow(false)}>×</button>
            <h2 style={{ textAlign: "center", marginBottom: "15px" }}>Get a Free Quote</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                style={popupStyles.input}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                style={popupStyles.input}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                style={popupStyles.input}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                style={{ ...popupStyles.input, height: "80px", resize: "none" }}
              />
              <button type="submit" style={popupStyles.button}>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
