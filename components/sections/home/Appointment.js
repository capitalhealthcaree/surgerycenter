"use client";
import { useState } from "react";
import CustomAlert from "@/components/layout/CustomAlert";
import api from "@/util/api";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  phone: "",
  patientType: "",
  insurance: "",
  message: "",
};

const ICON_COLOR = "#ff0805";

const EmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1A16 16 0 0 0 13 15l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
  </svg>
);

const PatientIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const InsuranceIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const MessageIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke={ICON_COLOR}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneWhiteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.08 3.4 2 2 0 0 1 3.06 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.1A16 16 0 0 0 13 15l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
  </svg>
);

const MailWhiteIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const contactItems = [
  {
    icon: <MapPinIcon />,
    label: "Address",
    link: "https://maps.app.goo.gl/yLinzmgPJpi4mBDY8",
    value: "2200 Physicians Blvd Suite A, Ennis, TX 75119",
  },
  {
    icon: <PhoneWhiteIcon />,
    label: "Call Us",
    link: "tel:972-782-9090",
    value: "972-782-9090",
  },
  {
    icon: <MailWhiteIcon />,
    label: "Send us a Mail",
    link: "mailto:admin@advancedcaresurgerycenter.com",
    value: "admin@advancedcaresurgerycenter.com",
  },
  {
    icon: <ClockIcon />,
    label: "Opening Time",
    value: "Mon – Fri  9:00 – 17:00",
  },
];

const styles = {
  formCard: {
    background: "white",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    overflow: "hidden",
    width: "100%",
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1.2fr",
  },
  contactPanel: {
    background: "#070606",
    padding: "40px 30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  },
  contactHeading: {
    color: "white",
    fontSize: "1.6rem",
    fontWeight: 700,
    lineHeight: 1.3,
    marginBottom: "8px",
  },
  contactSubtext: {
    color: "white",
    fontSize: "16px",
    lineHeight: 1.6,
    marginBottom: "18px",
  },
  contactCard: {
    background: "#1a1a1a",
    borderRadius: "14px",
    padding: "14px 16px",
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
  },
  contactIconCircle: {
    width: "42px",
    height: "42px",
    minWidth: "42px",
    background: "#ff0805",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contactLabel: {
    color: "#ff0805",
    fontWeight: 600,
    fontSize: "0.9rem",
    marginBottom: "2px",
  },
  contactValue: {
    color: "white",
    fontSize: "0.85rem",
    lineHeight: 1.4,
    wordBreak: "break-word",
  },
  formSection: {
    padding: "30px",
    background: "white",
  },
  formHeaderTitle: {
    color: "#070606",
    fontSize: "1.8rem",
    fontWeight: 700,
    marginBottom: "6px",
  },
  formHeaderSub: {
    color: "black",
    fontSize: "1rem",
    marginBottom: "25px",
  },
  formGroup: {
    marginBottom: "18px",
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    right: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textareaIcon: {
    position: "absolute",
    right: "14px",
    top: "14px",
    pointerEvents: "none",
  },
  formControl: {
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    padding: "12px 48px 12px 16px",
    fontSize: "1rem",
    width: "100%",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box",
    background: "white",
    borderColor: "#ff0805",
  },
  rowCustom: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  submitBtn: {
    background: "#ff0805",
    color: "white",
    border: "none",
    borderRadius: "12px",
    padding: "14px 40px",
    fontSize: "1.05rem",
    fontWeight: 600,
    cursor: "pointer",
    width: "100%",
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "all 0.3s ease",
  },
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (type, title, text = "") => {
    setAlert({ type, title, text });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("createAppointmentForm", formData);
      if (response.status === 200) {
        showAlert("success", "Success!", "Appointment booked successfully!");
        setFormData(INITIAL_FORM_DATA);
      } else {
        showAlert(
          "error",
          "Error",
          response.data?.message || "Failed to book appointment.",
        );
      }
    } catch (error) {
      showAlert(
        "error",
        "Error",
        error.response?.data?.message || "An error occurred.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container my-4">
        <div style={styles.formCard}>
          <div style={styles.formGrid} className="appointment-grid">
            {/* Left: Contact Info Panel */}
            <div style={styles.contactPanel}>
              <h2 style={styles.contactHeading}>
                Connect With Us For Your Healthcare Needs
              </h2>
              <p style={styles.contactSubtext}>
                Reach out for support, feedback, or to schedule an appointment.
                Fill out the form, and we&apos;ll promptly assist you and
                confirm.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {contactItems.map((item) => (
                  <div key={item.label} style={styles.contactCard}>
                    <div style={styles.contactIconCircle}>{item.icon}</div>
                    <div>
                      <div style={styles.contactLabel}>{item.label}</div>
                      <div style={styles.contactValue}>
                        <a
                          className="text-white"
                          target="_blank"
                          href={item.link}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form Panel */}
            <div style={styles.formSection}>
              <h3 style={styles.formHeaderTitle}>Book Appointment</h3>
              <p style={styles.formHeaderSub}>
                Fill in your details and we&apos;ll get back to you shortly
              </p>

              <form onSubmit={handleSubmit}>
                {/* Row 1: Name + Email */}
                <div style={styles.rowCustom} className="row-responsive">
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <input
                        type="text"
                        style={styles.formControl}
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Full Name*"
                        required
                      />
                      <span style={styles.inputIcon}>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={ICON_COLOR}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <input
                        type="email"
                        style={styles.formControl}
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email*"
                        required
                      />
                      <span style={styles.inputIcon}>
                        <EmailIcon />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Row 2: Phone + Patient Type */}
                <div style={styles.rowCustom} className="row-responsive">
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <input
                        type="tel"
                        style={styles.formControl}
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your Number*"
                        required
                      />
                      <span style={styles.inputIcon}>
                        <PhoneIcon />
                      </span>
                    </div>
                  </div>
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <select
                        style={styles.formControl}
                        name="patientType"
                        value={formData.patientType}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Patient Type *</option>
                        <option value="New Patient">New Patient</option>
                        <option value="Existing Patient">
                          Existing Patient
                        </option>
                      </select>
                      <span style={styles.inputIcon}>
                        <PatientIcon />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Insurance */}
                <div style={styles.formGroup}>
                  <div style={styles.inputWrapper}>
                    <input
                      type="text"
                      style={styles.formControl}
                      name="insurance"
                      value={formData.insurance}
                      onChange={handleChange}
                      placeholder="Your Insurance*"
                      required
                    />
                    <span style={styles.inputIcon}>
                      <InsuranceIcon />
                    </span>
                  </div>
                </div>

                {/* Message */}
                <div style={styles.formGroup}>
                  <div style={styles.inputWrapper}>
                    <textarea
                      style={{
                        ...styles.formControl,
                        minHeight: "100px",
                        resize: "vertical",
                      }}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message*"
                      rows={3}
                      required
                    />
                    <span style={styles.textareaIcon}>
                      <MessageIcon />
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  style={styles.submitBtn}
                  disabled={loading}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#cc0604";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#ff0805";
                  }}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                      />
                      Submitting...
                    </>
                  ) : (
                    <>Book Appointment &rarr;</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .appointment-grid { grid-template-columns: 1fr 1.2fr; }
        @media (max-width: 992px) {
          .appointment-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .row-responsive { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
      `}</style>

      {alert && (
        <CustomAlert
          type={alert.type}
          title={alert.title}
          text={alert.text}
          onClose={() => setAlert(null)}
        />
      )}
    </>
  );
}
