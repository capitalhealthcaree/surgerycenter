import { useEffect } from "react";

const CustomAlert = ({ type, title, text, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(
      () => {
        onClose();
      },
      type === "success" ? 2000 : 2000,
    );

    return () => clearTimeout(timer);
  }, [type, onClose]);

  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert-box">
        <div className={`alert-icon ${type}`}>
          {type === "success" ? (
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="35"
                fill="none"
                stroke="#a5dc86"
                strokeWidth="3"
              />
              <polyline
                points="25,40 35,50 55,30"
                fill="none"
                stroke="#a5dc86"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="80" height="80" viewBox="0 0 80 80">
              <circle
                cx="40"
                cy="40"
                r="35"
                fill="none"
                stroke="#f27474"
                strokeWidth="3"
              />
              <line
                x1="30"
                y1="30"
                x2="50"
                y2="50"
                stroke="#f27474"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="50"
                y1="30"
                x2="30"
                y2="50"
                stroke="#f27474"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        <h2 className="alert-title">{title}</h2>

        {text && <p className="alert-text">{text}</p>}

        <div className="alert-progress-bar">
          <div
            className={`progress-fill ${type}`}
            style={{
              animation: `progress ${type === "success" ? "2s" : "5s"} linear forwards`,
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .custom-alert-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-in;
        }

        .custom-alert-box {
          background: white;
          padding: 40px 30px 20px;
          border-radius: 10px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
          text-align: center;
          min-width: 300px;
          max-width: 500px;
          animation: slideDown 0.3s ease-out;
        }

        .alert-icon {
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
        }

        .alert-title {
          font-size: 28px;
          font-weight: 600;
          color: #595959;
          margin: 0 0 10px 0;
        }

        .alert-text {
          font-size: 16px;
          color: #666;
          margin: 0 0 20px 0;
        }

        .alert-progress-bar {
          width: 100%;
          height: 4px;
          background: #e0e0e0;
          border-radius: 2px;
          overflow: hidden;
          margin-top: 20px;
        }

        .progress-fill {
          height: 100%;
          width: 0;
        }

        .progress-fill.success {
          background: #a5dc86;
        }

        .progress-fill.error {
          background: #f27474;
        }

        @keyframes progress {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default CustomAlert;
