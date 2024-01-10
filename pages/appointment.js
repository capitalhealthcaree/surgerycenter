import Layout from "@/components/layout/Layout";
import Contact from "@/components/sections/home5/Contact";

export default function Appointment() {
  return (
    <>
      <Layout breadcrumbTitle="Appointment">
        <div>
          <Contact />
          <section className="pb-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="inner-contact-img">
                    <img src="/assets/img/appointment.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-contact-info">
                    <h2 className="title">Our Office Address</h2>
                    <div className="contact-info-item">
                      <ul className="list-wrap">
                        <li>
                          <img
                            src="/assets/img/icons/check_icon.svg"
                            alt=""
                            className="pe-2"
                          />
                          <a href="mailto:admin@advancedcaresurgerycenter.com">
                            admin@advancedcaresurgerycenter.com
                          </a>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icons/check_icon.svg"
                            alt=""
                            className="pe-2"
                          />
                          <a href="tel:9729455800">972-945-5800</a>
                        </li>
                        <li>
                          <img
                            src="/assets/img/icons/check_icon.svg"
                            alt=""
                            className="pe-2"
                          />
                          <a
                            href="https://maps.app.goo.gl/cSS2PJeDEEvMGoh16"
                            target="_blank"
                          >
                            2200 Physicians Blvd, Ennis, TX 75119
                          </a>
                        </li>
                        <li style={{ color: "var(--tg-primary-color)" }}>
                          <img
                            src="/assets/img/icons/check_icon.svg"
                            alt=""
                            className="pe-2"
                          />
                          Mon – Fri: 9 am – 5 pm
                        </li>
                        <li style={{ color: "red" }}>
                          <img
                            src="/assets/img/icons/check_icon.svg"
                            alt=""
                            className="pe-2"
                          />
                          Sat, Sunday: <span>CLOSED</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.2857723108177!2d-96.64098992384959!3d32.30417540799941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864edbbcf119b843%3A0x9f598be011ab21b!2s2200%20Physicians%20Blvd%2C%20Ennis%2C%20TX%2075119!5e0!3m2!1sen!2sus!4v1704813458897!5m2!1sen!2sus"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </Layout>
    </>
  );
}
