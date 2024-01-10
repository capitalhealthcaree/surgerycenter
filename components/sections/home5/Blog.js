import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "../../../util/api";

export default function Blog() {
  const [list, setList] = useState([]);

  async function fetchData() {
    const res = await api.get("/getLastThreeBlogs");
    if (res.status === 200) {
      if (res && res.data && res.data.data) {
        setList(res.data.data);
      }
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log("list----------", list);
  return (
    <>
      <section className="blog-post-area">
        <div className="blog-bg" data-background="/assets/img/bg/blog_bg.jpg" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="section-title text-center mb-60 tg-heading-subheading animation-style2">
                <span className="sub-title tg-element-title">Blogs</span>
                <h2 className="title tg-element-title">
                  Read Our Latest Updates
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {list.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
                <div className="blog-post-item">
                  <div className="blog-post-thumb">
                    <Link href="/blog-details">
                      <img src={item?.image} alt={item?.seoTitle} />
                    </Link>
                  </div>
                  <div className="blog-post-content">
                    <h2 className="title">
                      <Link href="/blog-details">{item?.seoTitle}</Link>
                    </h2>
                    <p>{item?.metaDes}</p>
                    <Link href="/blog-details" className="link-btn">
                      Read More <i className="flaticon-right-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center">
            <div className="request-btn">
              <Link href="/blogs/" className="btn">
                View All Blogs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
