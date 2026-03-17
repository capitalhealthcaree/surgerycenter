export default function DoctorLeadership() {
  return (
    <>
      <div className="container my-4">
        <div className="lead-section">
          <div className="lead-inner">
            <div className="lead-left">
              <h2 className="lead-heading">
                Leadership & Professional Achievements
              </h2>
            </div>

            <div className="lead-right">
              <p className="lead-text">
                Dr. Ali has presented over 20 national and international posters
                and publications, organized CME programs, and trained physicians
                in advanced interventional techniques worldwide.
              </p>
              <p className="lead-text">
                He served as President of the Richland County Medical Society
                and remains an active member of ASIPP, NANS, and the Texas Pain
                Society. In addition to his clinical expertise, he is a
                community advocate, passionate about patient education, medical
                innovation, and improving quality of life for those in chronic
                pain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lead-section {
          box-shadow: 0 4px 30px rgba(255, 8, 5, 0.5);
          padding: 20px;
        }
        .lead-inner {
          display: grid;
          grid-template-columns: 280px 1fr;
          align-items: center;
        }

        .lead-heading {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: rgb(255, 8, 5);
          line-height: 1.2;
        }

        .lead-text {
          font-size: 16px;
          color: black;
          margin-bottom: 10px;
        }
        @media (max-width: 768px) {
          .lead-inner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
