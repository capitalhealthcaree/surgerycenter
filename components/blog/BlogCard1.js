import Image from "next/image";
import Link from "next/link";

export default function BlogCard1({ item }) {
  return (
    <>
      <div className="col-md-4">
        <div className="blog-post-item-two">
          <div className="blog-post-thumb-two">
            <Link href={`/blog/${item.slug}`}>
              {" "}
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                src={item.image}
                alt={item.seoTitle}
              />
            </Link>
          </div>
          <div className="blog-post-content-two">
            <h2 className="title">
              <Link href={`/blog/${item.slug}`}>
                {item.seoTitle.split(" ").slice(0, 6).join(" ") +
                  (item.seoTitle.split(" ").length > 7 ? "..." : "")}
              </Link>
            </h2>
            <Link href={`/blog/${item.slug}`} className="link-btn">
              Read More <i className="flaticon-right-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
