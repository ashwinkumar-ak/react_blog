import React from "react";

export default function ArticleNavBar() {
    React.useEffect(function() {
        document.getElementById("article--logo").addEventListener("click", function() {
            window.location = "/";
        })
    }, [])


    return (
        <div id="article--navbar">
            <div id="article--logo">
                <p>The</p>
                <h1>Siren</h1>
            </div>
            <button>Get Started</button>
        </div>
    )
}