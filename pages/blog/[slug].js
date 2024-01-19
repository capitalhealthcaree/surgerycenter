import Layout from "@/components/layout/Layout";
import ProcedureDetailPage from "@/components/procedure-detail-page";
import api from "../../util/api";

export default function BlogDetails({ items }) {
  return (
    <>
      <Layout breadcrumbTitle="Blog Details">
        {items && (
          <>
            <section className="blog-details-area pt-120 pb-120">
              <div className="container">
                <div className="blog-details-wrap">
                  <div className="row justify-content-center">
                    <div className="col-71">
                      <div className="blog-details-thumb">
                        <img src={items.image} className="w-100" alt="" />
                      </div>
                      <div className="blog-details-content">
                        <div
                          dangerouslySetInnerHTML={{ __html: items?.title }}
                        ></div>
                      </div>
                    </div>
                    <div className="col-29">
                      <ProcedureDetailPage />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </Layout>
    </>
  );
}

export const getServerSideProps = async ({ query: { slug } }) => {
  const singleBlog = await api.get("blog/" + slug);
  const data = await singleBlog.data.data;
  return {
    props: {
      items: data,
    },
  };
};
