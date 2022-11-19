import React from "react"
import HamburgerIcon from "../../assets/hamburger.svg"

export default function NavBar() {
    React.useEffect(function () {

        window.addEventListener("resize", function () {
            if (this.window.innerWidth > 600) {
                document.getElementById("nav--links").classList.remove("nav--show-links");
            }
        })

        document.getElementById("nav--logo").addEventListener("click", function () {
            window.location = "/";
        })

        document.getElementById("nav--collapse").addEventListener("click", function () {
            const links = document.getElementById("nav--links");
            links.classList.toggle("nav--show-links");
        })
    }, [])

    return (
        <div id="nav" className="pad">
            <div id="nav--logo">
                <p>The</p>
                <h1>Siren</h1>
            </div>
            <img id="nav--collapse" src={HamburgerIcon} height="25px"></img>
            <div id="nav--links">
                <a href="#">Home</a>
                <a href="#">Bollywood</a>
                <a href="#">Technology</a>
                <a href="#">Hollywood</a>
                <a href="#">Fitness</a>
                <a href="#"> Food</a>
            </div>
        </div>
    )
}