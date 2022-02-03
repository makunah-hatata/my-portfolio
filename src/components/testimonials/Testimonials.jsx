import "./testimonials.scss"

export default function Testimonials() {

    const data = [
        {
            id: 1,
            name: "Morgan Freeman",
            title: "Goat of Cinema",
            img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSoKvv4TLPiFZ6W4D4qniKG0C1o6wzNmQ3VuhvanJiX6cy79_7C",
            icon: "assets/movie.png",
            icon2: "assets/thumb.png",
            desc: "I have known Sebastian my entire life, and his skill in all coding languages never ceases to amaze me. Hire him and I'll send you my autograph.",
        },
        {
            id: 2,
            name: "God",
            title: "N/A",
            featured: true,
            img: "https://www.catholicweekly.com.au/wp-content/uploads/2018/10/benediction-of-god-the-father-900.jpg",
            icon: "assets/church.png",
            icon2: "assets/church.png",
            desc: "With my Divine Word, I hereby testifyeth to Sebastian's Holy Knowledge of Programming. Procure for thine Enterprise his immeasurable expertise, or be stricken from this Earth.",
        },
        {
            id: 3,
            name: "Elon Musk",
            title: "Notorious Space Cadet",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg",
            icon: "assets/thumb.png",
            icon2: "assets/tesla.png",
            desc: "If Sebastian hadn't chosen a career in Programming, I would have already sent him to Mars to oversee the construction of our first Martian Tesla.",
        },
    ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <img src={d.icon2} alt="" className="left"/>
                            <img
                                src={d.img}
                                alt=""
                                className="user"
                            />
                            <img
                                src={d.icon}
                                alt=""
                                className="right"
                            />
                        </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
