import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div>
            <div className={"menu " + (menuOpen && "active")}>
                <ul>
                    {/* I "should have" created a new component for the closing of the menubar on clicking, but went with this since I have so few items. */}
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#intro">Home</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#works">Skills</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#testimonials">Testimonials</a>
                    </li>
                    <li onClick={() => setMenuOpen(false)}>
                        <a href="#contact">Contact</a>
                    </li>


                </ul>
            </div>
        </div>
    )
}
