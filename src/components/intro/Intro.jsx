import "./intro.scss";
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
      init(textRef.current, {
          showCursor: true,
          backDelay: 1500,
          backSpeed: 60,

          strings: [" HTML", "‏‏‎ ‎Javascript", "‏‏‎ ‎CSS"]
      });
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/2.png" alt="Yours truly."/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello. I am</h2>
                    <h1>Sebastian Prochéus</h1>
                    <h3>Programmer |
                        <span ref={textRef}>‏‏‎</span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/arrow-down.png" alt=""/>
                </a>

            </div>
        </div>
    )
}
