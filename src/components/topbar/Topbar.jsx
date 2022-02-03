import './topbar.scss'
import { Person, Mail, Facebook, Instagram, LinkedIn } from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        // Changes CSS reference depending on whether the menu is active or not.
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">my|portfolio</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+44 924 28 33</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>sebastian.procheus@student.kyh.se</span>
                    </div>
                    <div className="itemContainer">
                        <h2>|</h2>
                        <span>My social media: </span>
                        <a href="http://facebook.com" target="_blank" rel="noreferrer">
                            <Facebook className="icon2"/>
                        </a>
                        <a href="http://instagram.com" target="_blank" rel="noreferrer">
                            <Instagram className="icon2"/>
                        </a>
                        <a href="http://linkedin.com" target="_blank" rel="noreferrer">
                            <LinkedIn className="icon2"/>
                        </a> 
                    </div>
                </div>
                <div className="right">
                    {/* An onClick function setting setMenuOpen to the opposite of menuOpen, whatever that is in the current state. */}
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
