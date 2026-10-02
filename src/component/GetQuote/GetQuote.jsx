import React, { useState } from "react";

const GetQuote = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you! Your enquiry has been submitted successfully.");
    console.log("Form Data:", form);
    setForm({ name: "", email: "", phone: "", message: "" });
    setIsOpen(false);
  };

  return (
    <div style={styles.container}>
      {/* Main Button */}
      <button onClick={() => setIsOpen(true)} style={styles.openBtn}>
        Get a Quote
      </button>

      {/* Popup Overlay */}
      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            {/* Close Button */}
            <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
              &times;
            </button>

            <h2 style={styles.title}>Get a Free Quote</h2>
            <p style={styles.subtitle}>
              Fill out the form below, and we'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} style={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                style={styles.input}
              />

              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                required
                style={styles.textarea}
              ></textarea>

              <button type="submit" style={styles.submitBtn}>
                Submit Now
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// 🎨 Inline Styles (responsive + aesthetic)
const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
  },
  openBtn: {
    background: "linear-gradient(135deg, #4a6ee0, #7a4ae0)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    padding: "14px 36px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    transition: "all 0.3s ease",
  },
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
    padding: "15px",
    zIndex: 1000,
  },
  popup: {
    background: "#fff",
    borderRadius: "16px",
    width: "100%",
    maxWidth: "450px",
    padding: "30px 25px",
    position: "relative",
    boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
    animation: "fadeIn 0.3s ease",
  },
  closeBtn: {
    position: "absolute",
    top: "12px",
    right: "16px",
    fontSize: "28px",
    color: "#333",
    border: "none",
    background: "none",
    cursor: "pointer",
  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    color: "#4a6ee0",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "15px",
    color: "#777",
    marginBottom: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "border-color 0.2s ease",
  },
  textarea: {
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
    resize: "none",
    height: "90px",
    outline: "none",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #4a6ee0, #7a4ae0)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

// Optional hover styles (inline trick)
styles.submitBtn[":hover"] = {
  transform: "scale(1.03)",
  boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
};

export default GetQuote;
