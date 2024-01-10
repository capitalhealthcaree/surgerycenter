import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";

export default function Blog() {
  return (
    <>
      <Layout breadcrumbTitle="Latest Blog">
        <section className="blog-area pt-120 pb-120">
          <div className="container">
            <div className="inner-blog-wrap">
              <div className="row justify-content-center">
                <div className="col-100">
                  <div className="blog-post-wrap">
                    <div className="row">
                      <BlogPost />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
