export default function DoctorEducation({ educationData }) {
  return (
    <>
      <div className="container">
        <div className="edu-section">
          <h2 className="edu-heading">{educationData.title}</h2>
          <p className="edu-note">{educationData.paragraph1}</p>
          <p className="edu-note">{educationData.paragraph2}</p>
        </div>
      </div>

      <style jsx>{`
        .edu-section {
          box-shadow: 0 4px 30px rgb(255, 8, 5, 0.5);
          padding: 20px;
        }
        .edu-heading {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: rgb(255, 8, 5);
          line-height: 1.2;
        }
        .edu-note {
          font-size: 16px;
          color: black;
          margin-bottom: 10px;
        }
        @media (max-width: 768px) {
          .edu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
