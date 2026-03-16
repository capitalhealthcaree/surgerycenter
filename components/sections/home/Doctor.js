export default function AdvancedTreatment() {
  return (
    <>
      <div className="container my-4">
        <div className="row align-items-stretch">
          {/* Left — Image */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="ts-img-wrap">
              <img
                src="/assets/img/rao-k-ali-md.png"
                alt="Treatment Services"
                className="ts-img"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className="py-3">
              <h2 className="ts-title">
                Trust our expert surgeons to deliver exceptional results
              </h2>
              <p className="ts-text">
                Rao Kamran Ali, MD is a double board-certified physician in Pain
                Management and Physical Medicine &amp; Rehabilitation
                (PM&amp;R). He is the CEO of Premier Pain Centers and Advanced
                Care Center, providing advanced, patient-focused care for
                individuals searching for a trusted pain management doctor in
                Dallas, TX and surrounding communities.
              </p>
              <p className="ts-text">
                Patients across Dallas, Richardson, North Richland Hills (NRH),
                Fort Worth, Lancaster, and Hillsboro visit Dr. Rao K. Ali for a
                thorough evaluation and personalized treatment plans focused on
                long-term relief and improved function. As an experienced
                interventional pain specialist in Dallas, Dr. Rao Ali treats
                chronic and acute pain conditions using minimally invasive,
                evidence-based approaches designed to help patients return to
                daily activities with more comfort and confidence.
              </p>
              <p className="ts-text">
                Dr. Rao K. Ali expertise includes a wide range of interventional
                procedures such as epidural steroid injections, joint
                injections, sympathetic blocks, radiofrequency ablation (RFA),
                spinal cord stimulation (trial and implantation), peripheral
                neurostimulators, diagnostic discograms, vertebroplasty and
                kyphoplasty, percutaneous discectomy, intrathecal pain pumps,
                lysis of spinal adhesions, and minimally invasive lumbar
                decompression (MILD). These advanced treatments support patients
                looking for back pain treatment in Dallas, neck pain relief, and
                non-surgical options for persistent spine and joint pain.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .ts-title {
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 16px;
          color: #070606;
          text-transform: none !important;
        }
        .ts-text {
          font-size: 16px;
          color: #070606;
          text-transform: none !important;
        }

        /* Image wrapper — stretches full height of row */
        .ts-img-wrap {
          width: 100%;
          height: 100%;
          min-height: 320px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }

        /* Image fills wrapper completely */
        .ts-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        @media (max-width: 991px) {
          .ts-img-wrap {
            height: auto;
            min-height: unset;
            aspect-ratio: 4/3;
          }
        }

        @media (max-width: 576px) {
          .ts-img-wrap {
            aspect-ratio: 3/2;
          }
        }
      `}</style>
    </>
  );
}
