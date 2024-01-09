import Image from "next/image";
import Link from "next/link";

export default function BlogCard1({ item }) {
  return (
    <>
      <div className="col-md-4">
        <div className="blog-post-item-two">
          <div className="blog-post-thumb-two">
            <Link href={`/blog/${item.id}`}>
              {" "}
              <Image
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "auto", height: "auto" }}
                src={`/assets/img/blog/${item.img}`}
                alt=""
              />
            </Link>
          </div>
          <div className="blog-post-content-two">
            <h2 className="title">
              <Link href={`/blog/${item.id}`}>
                {item.title.split(" ").slice(0, 7).join(" ") +
                  (item.title.split(" ").length > 7 ? "..." : "")}
              </Link>
            </h2>
            <p>
              Everything you need to start building area atching presence for
              your business.
            </p>
            <Link href="/blog-details" className="link-btn">
              Read More <i className="flaticon-right-arrow" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
