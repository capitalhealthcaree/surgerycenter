import Image from "next/image";

export default function WhyChoose({ whyChoose }) {
  return (
    <>
      <div className="container my-4">
        <div
          style={{
            boxShadow: "0 4px 30px rgb(255, 8, 5, 0.5)",
            padding: "20px",
          }}
        >
          <div className="row">
            {/* Left Column */}
            <div className="col-12 col-lg-8">
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                  color: "rgb(255, 8, 5)",
                  fontWeight: 700,
                }}
              >
                {whyChoose.heading}
              </h2>

              {/* Use dangerouslySetInnerHTML here */}
              <p
                style={{
                  fontSize: "16px",
                  color: "black",
                }}
              >
                {whyChoose.desc}
              </p>

              <ul
                style={{
                  listStyle: "disc",
                  paddingLeft: "25px",
                  margin: "0",
                }}
              >
                {whyChoose.points.map((sign, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "16px",
                      color: "black",
                    }}
                    dangerouslySetInnerHTML={{ __html: sign }}
                  />
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-12 col-lg-4">
              <div
                style={{
                  // height: "340px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  objectFit: "cover",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Image
                  src={whyChoose.image}
                  alt={whyChoose.imgAlt}
                  width={1200}
                  height={800}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
