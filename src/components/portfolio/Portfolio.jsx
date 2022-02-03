import "./portfolio.scss"
import PortfolioList from "../portfoliolist/PortfolioList"
import { useState, useEffect } from 'react';
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from "../../data.js"

export default function Portfolio() {

    // Hook to see which Title in the array below is selected, for CSS purposes.
    const [selected, setSelected] = useState("featured");

    // Hook to select portfolio dummy data.
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "branding",
            title: "Branding",
        },
    ]

    useEffect(() => {

        switch(selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {/* mapping across the list of items on the portfolio page to access them as a prop */}
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        <img 
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>

            
            

        </div>
    )
}
 

