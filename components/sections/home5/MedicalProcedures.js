import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'

export default function Service2() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
                <div>
                    <section className="services-area-six">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="section-title-two mb-60">
                                        <span className="sub-title">What We Do For You</span>
                                        <h2 className="title">We can inspire and Offer Different Services</h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="section-top-content mb-30">
                                        <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor amet, consectetuolor sit amet, consectetur adipiscing elita florai psum sit amet consecteturere.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(1)} onMouseLeave={() => handleToggle(1)}>
                                        <div className="services-thumb-two">
                                            <img src="/assets/img/procedures/1.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <h2 className="title"><Link href="/services-details">Anesthesiology</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(2)} onMouseLeave={() => handleToggle(2)}>
                                        <div className="services-thumb-two">
                                        <img src="/assets/img/procedures/2.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <h2 className="title"><Link href="/services-details">General Surgery</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(3)} onMouseLeave={() => handleToggle(3)}>
                                        <div className="services-thumb-two">
                                        <img src="/assets/img/procedures/3.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <h2 className="title"><Link href="/services-details">Orthopedic Surgery</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(4)} onMouseLeave={() => handleToggle(4)}>
                                        <div className="services-thumb-two">
                                        <img src="/assets/img/procedures/4.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <h2 className="title"><Link href="/services-details">Otorhinolaryngology</Link></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                    <div className="services-item-two" onMouseEnter={() => handleToggle(5)} onMouseLeave={() => handleToggle(5)}>
                                        <div className="services-thumb-two">
                                        <img src="/assets/img/procedures/5.jpg" alt="" />
                                            <div className="item-shape">
                                                <img src="/assets/img/services/services_item_shape.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="services-content-two">
                                            <h2 className="title"><Link href="/services-details">Pain Management</Link></h2>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </section>
                </div>
        </>
    )
}