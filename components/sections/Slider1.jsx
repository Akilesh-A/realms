import Link from "next/link"
import { Autoplay, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import VideoPopup from "../elements/VideoPopup"

const swiperOptions = {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
}

export default function Slider1() {
    return (
        <>
            <section className="slider-area">
                <Swiper {...swiperOptions} className="slider-active">
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="/assets/img/slider/slider_img01.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div className="slider-btn">
                                            <Link href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span /></Link>
                                            <VideoPopup text="See Live Demo "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="/assets/img/slider/slider_img01.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div className="slider-btn">
                                            <a href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span /></a>
                                            <VideoPopup text="See Live Demo "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="single-slider">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 order-0 order-lg-2">
                                    <div className="slider-img text-end" data-animation="fadeInRight" data-delay=".8s">
                                        <img src="/assets/img/slider/slider_img01.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="slider-content">
                                        <h2 className="title" data-animation="fadeInUp" data-delay=".2s">Digital Agency Business Make Big Deal.</h2>
                                        <p data-animation="fadeInUp" data-delay=".4s">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                        <div className="slider-btn">
                                            <a href="/contact" className="btn" data-animation="fadeInLeft" data-delay=".6s">Get Started <span /></a>
                                            <VideoPopup text="See Live Demo "/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="container text-start mt-50">
                    <div className="swiper-pagination"></div>
                </div>

                <div className="slider-shape-wrap">
                    <img src="/assets/img/slider/slider_shape01.png" alt="" />
                    <img src="/assets/img/slider/slider_shape02.png" alt="" />
                    <img src="/assets/img/slider/slider_shape03.png" alt="" />
                    <img src="/assets/img/slider/slider_shape04.png" alt="" />
                    <img src="/assets/img/slider/slider_shape05.png" alt="" />
                    <img src="/assets/img/slider/slider_shape06.png" alt="" />
                </div>
            </section>

        </>
    )
}
