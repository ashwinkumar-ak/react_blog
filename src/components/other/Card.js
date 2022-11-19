import React from "react"

export default function Card(props) {
    return (
        <div id="card" 
            className={`${props.row ? "row-view" : "col-view"} ${props.big ? "big-card" : "small-card"}`}
        >
            <div id="card--image" 
                style={{ backgroundImage: `url(${props.image})`, display: props.image === undefined ? "none" : "block"}}
            ></div>
            <div id="card--content">
                <h1 id="card--title">{props.title}</h1>
                <p id="card--text">{props.text}</p>
                <p id="card--extra">{props.genre}  &nbsp;
                    <span style={{color: "#908d8d"}}>/ {props.date}</span>
                </p>
            </div>
        </div>
    )
}