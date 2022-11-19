import React from "react"

export default function PlainCard(props) {
    
    React.useEffect(function() {
        document.getElementById("plainCard").addEventListener("click", function() {
            if(props.href){
                window.location = props.href;
            }
        })
    }, [])

    return (
        <div id="plainCard" 
                style={{ backgroundImage: `url(${props.image})` }}
                className={props.big ? "big-card" : "small-card"}
        >
            <h1>{props.title}</h1>
            <p>{props.genre} / {props.date}</p>
        </div>
    )
}