import { useState } from "react";

export default function GoogleReviews() {
  const reviewsData = [
    {
      id: 1,
      name: "Candace Roberts",
      rating: 5,
      text: "Dr P is nice and listens to your concerns as well as answers any questions in plain spoken terms that are easy to understand.",
      initial: "CR",
      color: "#681da8",
    },
    {
      id: 2,
      name: "Przybo",
      rating: 5,
      text: "Very professional and very concise. Liked his bed side manner. Did not feel uncomfortable talking with him",
      initial: "P",
      color: "#0097A7",
    },
    {
      id: 3,
      name: "Kimmy D",
      rating: 5,
      text: "Excellent doctor and shows he and the staff care",
      initial: "KD",
      color: "#00897B",
    },
    {
      id: 4,
      name: "Robbin Bow",
      rating: 5,
      text: "Excellent service and provides me with great care",
      initial: "RB",
      color: "#5C5C5C",
    },
  ];

  const [expandedReviews, setExpandedReviews] = useState(new Set());

  const toggleReadMore = (id) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const renderStars = (rating) => (
    <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? "#FBBC04" : "#E0E0E0",
            fontSize: "18px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );

  const truncateText = (text, maxLength) =>
    text.length <= maxLength ? text : text.substring(0, maxLength) + "...";

  return (
    <div className="container mb-4">
      {/* Header */}
      <div
        className="p-3"
        style={{
          border: "2px solid #ff0805",
          marginBottom: "30px",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <svg width="100" height="32" viewBox="0 0 100 32" fill="none">
            <text x="0" y="24" style={{ fontSize: "26px", fontWeight: "bold" }}>
              <tspan fill="#4285F4">G</tspan>
              <tspan fill="#EA4335">o</tspan>
              <tspan fill="#FBBC04">o</tspan>
              <tspan fill="#4285F4">g</tspan>
              <tspan fill="#34A853">l</tspan>
              <tspan fill="#EA4335">e</tspan>
            </text>
          </svg>

          <span
            style={{
              fontSize: "22px",
              fontWeight: "700",
              color: "#ff0805",
            }}
          >
            Patient Reviews & Testimonials
          </span>
        </div>
      </div>

      {/* Reviews Grid */}

      <div>
        <div className="reviews-grid">
          {reviewsData.map((review) => {
            const isExpanded = expandedReviews.has(review.id);
            const shouldTruncate = review.text.length > 120;

            const displayText =
              isExpanded || !shouldTruncate
                ? review.text
                : truncateText(review.text, 120);

            return (
              <div
                key={review.id}
                className="review-card"
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  border: "1px solid #e0e0e0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 16px black";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.borderColor = "#ff0805";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "#e0e0e0";
                }}
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    {/* Avatar */}
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        backgroundColor: review.color || "#ff0805",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "500",
                        flexShrink: 0,
                        border: "2px solid #ff0805",
                      }}
                    >
                      {review.initial}
                    </div>

                    {/* Name */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          margin: "0 0 4px 0",
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#ff0805",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {review.name}
                      </h3>
                    </div>
                  </div>

                  {/* Google Icon */}
                  <div style={{ flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                {renderStars(review.rating)}

                {/* Review Text */}
                <p style={{ margin: 0, fontSize: "16px", color: "black" }}>
                  {displayText}
                </p>

                {/* Read More */}
                {shouldTruncate && (
                  <button
                    onClick={() => toggleReadMore(review.id)}
                    style={{
                      marginTop: "8px",
                      background: "none",
                      border: "none",
                      color: "rgb(255, 8, 5)",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      padding: 0,
                    }}
                  >
                    {isExpanded ? "Show less" : "Read more"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }

        @media (max-width: 768px) {
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .review-card {
            padding: 12px !important;
          }
        }
      `}</style>
    </div>
  );
}
