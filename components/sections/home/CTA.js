export default function CTA() {
  return (
    <>
      <div className="container my-4">
        <div
          style={{
            backgroundColor: "rgba(255, 8, 5)",
            boxShadow: "0 4px 30px rgba(255, 8, 5, 0.5)",
            padding: "20px",
            fontFamily: "Georgia",
          }}
        >
          <div className="cta-body">
            <h2 className="cta-heading">
              Schedule Your Consultation with AdvancedCare Surgery Center Today
            </h2>

            <p
              className="cta-sub"
              style={{ maxWidth: "800px", margin: "0 auto 20px" }}
            >
              Book your consultation today to receive expert evaluation,
              personalized treatment planning, and advanced surgical care
              focused on reducing pain, improving mobility, and supporting a
              faster, smoother recovery journey.
            </p>

            {/* Bottom: buttons + trust */}
            <div className="cta-bottom">
              <a href="/appointment" className="cta-btn-main">
                Book An Appointment
              </a>
              <a href="tel:9727829090" className="cta-btn-outline">
                Call Our Team
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Main content block — centered */
        .cta-body {
          text-align: center;
        }

        /* Main heading */
        .cta-heading {
          font-size: clamp(1.5rem, 3vw, 1.7rem);
          font-weight: 550;
          color: white;
          margin-bottom: "10px";
        }

        /* Sub text */
        .cta-sub {
          font-size: 16px;
          color: white;
        }

        /* Buttons */
        .cta-bottom {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
        }

        .cta-btn-main {
          display: inline-block;
          padding: 15px 40px;
          background: #ffffff;
          color: black;
          border: 2px solid #ffffff;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 700;
          font-family: Georgia;
          text-decoration: none;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }

        .cta-btn-main:hover {
          background: transparent;
          color: #ffffff;
        }

        .cta-btn-outline {
          display: inline-block;
          padding: 15px 40px;
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.45);
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          font-family: Georgia;
          text-decoration: none;
          transition: all 0.25s ease;
          letter-spacing: 0.3px;
        }

        .cta-btn-outline:hover {
          border-color: #ffffff;
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        @media (max-width: 576px) {
          .cta-btn-main,
          .cta-btn-outline {
            flex: 1 1 100%;
            text-align: center;
            padding: 14px 20px;
          }
        }
      `}</style>
    </>
  );
}
