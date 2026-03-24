export default function DoctorIntro({ profileData }) {
  return (
    <>
      <div className="container my-4">
        <div className="intro-card">
          {/* Image side */}
          <div className="intro-img-side">
            <div className="intro-img-wrap">
              <img
                src={profileData.img}
                alt="Dr. Mayur Patel"
                className="intro-img"
              />
              <div className="intro-img-badge">MD</div>
            </div>
            {/* Meet label below image */}
            <div className="intro-meet">
              <span className="intro-meet-line" />
              <span className="intro-meet-text">Meet Our Doctor</span>
              <span className="intro-meet-line" />
            </div>
          </div>

          {/* Content side */}
          <div className="intro-content">
            {/* Label */}

            <div className="intro-header">
              <div>
                <h2 className="intro-name">{profileData.name}</h2>
                <p className="intro-title">{profileData.certified}</p>
              </div>
              <div className="intro-stats">
                <div className="istat">
                  <span className="istat-num">5k+</span>
                  <span className="istat-lbl">Patients Treated</span>
                </div>
                <div className="istat-divider" />
                <div className="istat">
                  <span className="istat-num">10+</span>
                  <span className="istat-lbl">Years Experience</span>
                </div>
                <div className="istat-divider" />
                <div className="istat">
                  <span className="istat-num">100%</span>
                  <span className="istat-lbl">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="intro-divider" />

            <p className="intro-bio">{profileData.paragraph}</p>

            <a href="/appointment/" className="intro-btn">
              Book Appointment &nbsp;→
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .intro-card {
          box-shadow: 0 4px 30px rgb(255, 8, 5, 0.5);
          padding: 20px;
          display: flex;
          gap: 40px;
          align-items: flex-start;
        }

        /* Image side */
        .intro-img-side {
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .intro-img-wrap {
          position: relative;
        }
        .intro-img {
          width: 230px;
          height: 300px;
          object-fit: cover;
          border-radius: 12px;
          display: block;
        }
        .intro-img-badge {
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 40px;
          height: 40px;
          background: rgb(255, 8, 5);
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          border: 3px solid #fff;
        }

        /* Meet label */
        .intro-meet {
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          margin-top: 6px;
        }
        .intro-meet-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 8, 5, 0.2);
        }
        .intro-meet-text {
          font-size: 0.65rem;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255, 8, 5, 0.7);
          font-weight: 700;
          white-space: nowrap;
        }

        /* Content side */
        .intro-content {
          flex: 1;
          min-width: 0;
        }
        .intro-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 5px;
        }
        .intro-name {
          font-size: 1.6rem;
          font-weight: 700;
          color: rgb(255, 8, 5);
          margin-bottom: 4px;
        }
        .intro-title {
          font-size: 0.85rem;
          color: rgb(255, 8, 5);
          font-style: italic;
          margin: 0;
        }
        .intro-stats {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .istat {
          text-align: center;
        }
        .istat-num {
          display: block;
          font-size: 1.4rem;
          font-weight: 700;
          color: rgb(255, 8, 5);
          line-height: 1;
        }
        .istat-lbl {
          font-size: 0.68rem;
          color: black;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .istat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255, 8, 5, 0.12);
          flex-shrink: 0;
        }
        .intro-divider {
          height: 1px;
          background: rgba(255, 8, 5, 0.08);
          margin-bottom: 16px;
        }
        .intro-bio {
          font-size: 16px;
          color: black;
        }

        .intro-btn {
          display: inline-block;
          padding: 12px 28px;
          background: rgb(255, 8, 5);
          color: #fff;
          border: 2px solid rgb(255, 8, 5);
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 700;
          font-family: Georgia, serif;
          text-decoration: none;
          transition: all 0.25s;
        }
        .intro-btn:hover {
          background: transparent;
          color: rgb(255, 8, 5);
        }

        @media (max-width: 768px) {
          .intro-card {
            flex-direction: column;
            padding: 24px;
            gap: 24px;
          }
          .intro-img-side {
            width: 100%;
          }
          .intro-img {
            width: 100%;
            height: 320px;
          }
          .intro-header {
            flex-direction: column;
          }
          .intro-stats {
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}
