export default function Contact() {
  return (
    <>
      <section
        className="contact-area contact-bg"
        data-background="/assets/img/bg/contact_bg.jpg"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="contact-content">
                <div className="section-title mb-30 tg-heading-subheading animation-style2">
                  <span className="sub-title tg-element-title">
                    RESERVE YOUR SLOT
                  </span>
                  <h2 className="title tg-element-title">
                    Secure Your Consultation
                  </h2>
                </div>
                <p>
                  Arrange a meeting with our Surgical Specialists at{" "}
                  <b>Advanced Care Surgery Center</b> for expert care.
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="contact-form">
                <form action="#">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="Name *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="email" placeholder="E-mail *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="number" placeholder="Phone *" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <input type="text" placeholder="BOB *" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-grp">
                        <textarea placeholder="Message *" />
                      </div>
                    </div>
                  </div>
                  <button type="submit">Submit Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-shape">
          <img src="/assets/img/images/contact_shape.png" alt="" />
        </div>
      </section>
    </>
  );
}
