import Link from "next/link";

export default function Footer3() {
  return (
    <footer>
      <div className="footer-area-three">
        <div className="footer-top-three">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-7">
                <div className="footer-widget">
                  <div className="fw-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/w_logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p style={{ color: "white" }}>
                      AdvancedCare Surgery Center offers a broad range of
                      outpatient surgical procedures performed by board
                      certified specialists, ensuring cutting-edge techniques
                      and compassionate care for every patient.
                    </p>
                  </div>
                  <div className="header-action">
                    <ul className="list-wrap" style={{ marginLeft: "0px" }}>
                      <li className="header-btn">
                        <Link href="/appointment/" className="btn btn-two">
                          Get a Appointment
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Conditions</h4>
                  <div className="footer-link">
                    <ul className="list-wrap text-white">
                      <li>Herniated Disc</li>
                      <li>Kyphosis</li>
                      <li>Spinal Stenosis</li>
                      <li>Sciatica</li>
                      <li>Cervical Radiculopathy</li>
                      <li>Spondylolisthesis</li>
                      <a
                        style={{ color: "#ff0805" }}
                        href="/conditions-we-treat"
                      >
                        View All
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Procedures</h4>
                  <div className="footer-link">
                    <ul className="list-wrap text-white">
                      <li>Minimally Invasive Surgery</li>
                      <li>Spinal Fusion</li>
                      <li>Laminectomy</li>
                      <li>Discectomy</li>
                      <li>Disc Replacement</li>
                      <li>Kyphoplasty</li>
                      <a
                        style={{ color: "#ff0805" }}
                        href="/surgical-procedures"
                      >
                        View All
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-7">
                <div className="footer-widget">
                  <h4 className="fw-title">Contact</h4>
                  <div className="footer-info" style={{ marginBottom: "25px" }}>
                    <ul className="list-wrap">
                      <li>
                        <div className="icon">
                          <i className="flaticon-mail" />
                        </div>
                        <div className="content">
                          <Link
                            href="mailto:admin@advancedcaresurgerycenter.com"
                            className="text-white"
                          >
                            admin@advancedcaresurgerycenter.com
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-pin" />
                        </div>
                        <div className="content">
                          <a
                            href="https://maps.app.goo.gl/cSS2PJeDEEvMGoh16"
                            target="_blank"
                          >
                            <p className="text-white">
                              2200 Physicians Blvd, Ennis, TX 75119
                            </p>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="flaticon-phone-call" />
                        </div>
                        <div className="content">
                          <Link href="tel:972-782-9090" className="text-white">
                            972-782-9090
                          </Link>
                        </div>
                      </li>
                      <li>
                        <div className="icon">
                          <i className="fas fa-fax"></i>
                        </div>
                        <div className="content">
                          <Link href="tel:972-764-8909" className="text-white">
                            972-764-8909
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-three">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-text-two text-center">
                  <p>
                    Copyright © AdvancedCareSurgeryCenter | All Right Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
