import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="container my-4">
        <div className="pwf-wrap">
          <div className="row g-0 align-items-stretch">
            {/* Left — Image (desktop: left, mobile: right) */}
            <div className="col-12 col-lg-6 order-2 order-lg-1">
              <div className="pwf-img-wrap overflow-hidden h-100">
                <Image
                  src="/assets/img/aboutus/about.png"
                  alt="We Help You Pave a Path Worth Following"
                  fill
                  sizes="(max-width: 991px) 100vw, 45vw"
                  className="object-fit-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right — Content (desktop: right, mobile: left) */}
            <div className="col-12 col-lg-6 order-1 order-lg-2">
              <div className="pwf-content h-100 d-flex flex-column justify-content-center px-3 px-lg-4 py-3 py-lg-2">
                <h2 className="pwf-title">
                  Modern Surgical Care for Lasting Spine Relief
                </h2>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", color: "black" }}
                >
                  AdvancedCare Surgery Center is focused on delivering
                  high-quality surgical care for spine conditions with
                  precision, safety, and consistency. Our team follows a
                  structured approach that prioritizes accurate diagnosis,
                  advanced techniques, and patient-focused planning. Every
                  procedure is designed to support better outcomes, reduce
                  complications, and help individuals regain mobility through
                  trusted and efficient surgical solutions with measurable
                  progress.
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", color: "black" }}
                >
                  We combine modern surgical technology with experienced
                  clinical expertise so every patient receives dependable care
                  at every stage. From evaluation to recovery, attention is
                  given to detail, comfort, and long-term results. The goal is
                  to restore function, reduce discomfort, and help patients
                  return to daily activities with confidence through safe,
                  controlled, and outcome-driven surgical care.
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", color: "black" }}
                >
                  Book Your Surgical Consultation Today.
                </p>
                <span>
                  <Link href="/appointment" className="btn btn-three">
                    Schedule Appointment
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pwf-wrap {
          font-family: Georgia;
        }

        .pwf-img-wrap {
          position: relative;
          min-height: 420px;
        }

        .pwf-title {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          color: rgb(255, 8, 5);

          margin-bottom: 10px;
        }

        .pwf-content {
          border-left: 5px solid rgb(255, 8, 5);
        }

        @media (max-width: 991px) {
          .pwf-img-wrap {
            min-height: unset;
            aspect-ratio: 16 / 9;
          }
          .pwf-content {
            border-left: none;
            border-top: 5px solid rgb(255, 8, 5);
          }
        }

        @media (max-width: 576px) {
          .pwf-img-wrap {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </>
  );
}
