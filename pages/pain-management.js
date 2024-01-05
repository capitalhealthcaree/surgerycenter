import Accordion from "@/components/elements/Accordion";
import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";

export default function PainManagement() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={3} breadcrumbTitle="Pain Management">
        <div>
          <section className="services-details-area pt-120 pb-120">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-71 order-0 order-lg-2">
                  <div className="services-details-wrap">
                    <div className="services-details-content">
                      <h2 className="title">Marketing Strategy</h2>
                      <p>
                        when an unknown printer took ar galley offer type year
                        anddey scrambled make type aewer specimen book bethas
                        survived not only five when annery unknown printer.eed a
                        little help from our friends from time to time. Although
                        we offer the one-stop convenience.
                      </p>
                      <div className="services-details-thumb-two">
                        <img
                          src="/assets/img/services/services_details05.jpg"
                          alt=""
                        />
                      </div>
                      <p>
                        eed a little help from our friends from time to time.
                        Although we offer the one-stop convenience of annery
                        integrated range of legal, financial services under one
                        roof, there are occasions when our clients areaneed
                        specia- list advice beyond the scope of our own
                        expertise. That’s why we’ve developed close working
                        relationships with a number of strategic partner.
                      </p>
                      <div className="speed-optimized-wrap">
                        <h4 className="title-two">Speed Optimized</h4>
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen bookhas a not
                          only five centuries, but also the leap into electronic
                          typesetting, remaining essentially unchan galley of
                          type and scrambled it to make a type specimen book.
                        </p>
                      </div>
                      <div className="sd-inner-wrap-five">
                        <div className="row">
                          <div className="col-50">
                            <div className="left-side-content">
                              <h4 className="title-two">Our Business Goal</h4>
                              <p>
                                when an unknown printer took are galley type and
                                scrambled itter to make a type specimen bookhas
                                a not only five centurie when an unknown printer
                                took a galley.
                              </p>
                            </div>
                          </div>
                          <div className="col-50">
                            <div className="right-side-content">
                              <h4 className="title-two">The Challange</h4>
                              <p>when an unknown printer took a galley type</p>
                              <ul className="list-wrap">
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Commercial Property Insurance
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Budget Friendly Theme
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icons/check_icon.svg"
                                    alt=""
                                  />
                                  Happy Customers
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="company-benefit-wrap">
                        <h4 className="title-two">Any questions find here</h4>
                        <p>
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen bookhas a not
                          only five centuries, but also the leap into electronic
                          typesetting.
                        </p>
                        <div className="accordion-wrap-three">
                          <Accordion />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-29">
                  <ProcedureDetailPage />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
