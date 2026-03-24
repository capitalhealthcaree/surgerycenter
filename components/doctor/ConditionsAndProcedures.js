export default function ConditionsAndProcedure({ data }) {
  return (
    <>
      <div className="container my-4" style={{ fontFamily: "Georgia" }}>
        <div className="row g-4">
          {data?.map((section, i) => (
            <div key={i} className="col-12 col-lg-6">
              <div className="prp-card">
                <div className="prp-top-bar" />

                <div className="prp-body">
                  <h2
                    className="prp-title"
                    dangerouslySetInnerHTML={{ __html: section.title }}
                  />

                  <div className="prp-divider" />

                  <ul className="prp-list mb-0">
                    {section.points.map((point, j) => (
                      <li key={j} className="prp-list-item">
                        <span className="prp-check">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .prp-card {
          height: 100%;
          overflow: hidden;
          box-shadow: 0 4px 30px rgb(255, 8, 5, 0.5);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }
        .prp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 36px rgba(255, 8, 5, 0.14);
        }

        .prp-body {
          padding: 20px;
        }
        .prp-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: rgb(255, 8, 5);
        }
        .prp-divider {
          height: 1px;
          background: rgba(36, 19, 95, 0.08);
          margin-bottom: 16px;
        }
        .prp-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .prp-list-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 16px;
          color: black;
          padding: 9px 0;
          border-bottom: 1px solid rgba(36, 19, 95, 0.06);
          line-height: 1.5;
        }
        .prp-list-item:last-child {
          border-bottom: none;
        }
        .prp-check {
          width: 20px;
          height: 20px;
          background: rgb(255, 8, 5);
          color: #fff;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
      `}</style>
    </>
  );
}
