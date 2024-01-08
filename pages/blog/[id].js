import VideoPopup from "@/components/elements/PopupVideo"
import Layout from "@/components/layout/Layout"
import ProcedureDetailPage from "@/components/procedure-detail-page";

import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import data from "../../util/blog.json"

export default function BlogDetails() {
    let Router = useRouter()
    const [blogPost, setBlogPost] = useState(null)
    const { id } = Router.query

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])

    return (
        <>
            <Layout headerStyle={6} breadcrumbTitle="Blog Details">
                {blogPost && (
                    <>
                        <section className="blog-details-area pt-120 pb-120">
                            <div className="container">
                                <div className="blog-details-wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-71">
                                            <div className="blog-details-thumb">
                                                <img src={`/assets/img/blog/${blogPost.img}`} className="w-100" alt="" />
                                            </div>
                                            <div className="blog-details-content">
                                                <h2 className="title">{blogPost.title}</h2>
                                                <div className="blog-meta-three">
                                                    <ul className="list-wrap">
                                                        <li><i className="far fa-calendar" />22 Jan, 2023</li>
                                                        <li><img src="/assets/img/blog/blog_avatar01.png" alt="" /> by <Link href="/blog-details">Kat Doven</Link></li>
                                                        <li><i className="fas fa-tags" /> <Link href="/blog">Finance,</Link><Link href="/blog">Business</Link></li>
                                                        <li><i className="flaticon-speech-bubble" /><Link href="/blog-details">05 Comments</Link></li>
                                                    </ul>
                                                </div>
                                                <p>when an unknown printer took ar galley offer type year anddey scrambled  make type aewer specimen book bethas survived not only five when annery unknown printer.eed a little help from our friends from time to time. Although we offer the one-stop convenience.</p>
                                                <p>eed a little help from our friends from time to time. Although we offer the one-stop convenience of annery integrated range of legal, financial services under one roof, there are occasions when our clients areaneed specia- list advice beyond the scope of our own expertise.</p>
                                                <blockquote>
                                                    <p>“ urabitur varius eros rutrum consequat Mauris aewa sollicitudin enim condimentum luctus enim justo non molestie nisl ”</p>
                                                </blockquote>
                                                <h4 className="title-two">Speed Optimized</h4>
                                                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas a not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                                                <div className="bd-inner-wrap">
                                                    <div className="row align-items-center">
                                                        <div className="col-46">
                                                            <div className="thumb">
                                                                <img src="/assets/img/blog/blog-details02.jpg" alt="" />
                                                                <VideoPopup style={3} />
                                                            </div>
                                                        </div>
                                                        <div className="col-54">
                                                            <div className="content">
                                                                <h3 className="title-two">Conduct replied off whether arrived adapted</h3>
                                                                <p>when an unknown printer took a galley type remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                                                                <ul className="list-wrap">
                                                                    <li><img src="/assets/img/icons/check_icon.svg" alt="" />Commercial Property Insurance</li>
                                                                    <li><img src="/assets/img/icons/check_icon.svg" alt="" />Budget Friendly Theme</li>
                                                                    <li><img src="/assets/img/icons/check_icon.svg" alt="" />Happy Customers</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>when an unknown printer took a galley of type and scrambled it to make a type specimen bookhas a not only five centuries, but also the leap into electronic typesetting, remaining essentially unchan galley of type and scrambled it to make a type specimen book.</p>
                                                
                                            </div>
                                        </div>
                                        <div className="col-29">
                                            <ProcedureDetailPage/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </Layout>
        </>
    )
}