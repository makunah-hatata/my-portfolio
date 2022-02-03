import "./works.scss"
import { useState } from "react";

export default function Works() {
    // Hook to animate sliders moving back and forth.
    const [currentSlide, setCurrentSlide] = useState(0); 

    const data = [
        {
            id: "1",
            icon: "./assets/coding.png",
            title: "Programming",
            desc: "Knowledge in HTML, Javascript, CSS and frameworks and libraries such as React and Redux.",
            img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/170627419/original/9962050ad1cdba04cbbb57867f317d035f404e7d/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.png",
        },
        {
            id: "2",
            icon: "./assets/ux.png",
            title: "Web Design",
            desc: "Knowledge in Photoshop, Illustrator, Sony Vegas, Dreamweaver and Wordpress.",
            img: "https://cdn-bdgff.nitrocdn.com/FReypkFMKBYYBufGtybsRmKYYEygvDKJ/assets/static/optimized/rev-272a8b2/wp-content/uploads/2020/03/Trendy-Design-for-your-Website-min.png",
        },
        {
            id: "3",
            icon: "./assets/copywriting.png",
            title: "Copywriting",
            desc: "Long experience with creative writing, web and UX copy, narratives, technical writing, SEO and translation.",
            img: "https://www.ebuzzsolution.com/wp-content/uploads/2019/04/copy-writing.jpg",
        },
    ];

    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

 
    return (

        <div className="works" id="works">
            <div 
                className="slider"
                style={{ transform: `translateX(-${currentSlide *100}vw)` }}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img
                src="assets/right-arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/right-arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    );

}