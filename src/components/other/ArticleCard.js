import React from "react";
import Clap from "../../assets/clap.png"
import Share from "../../assets/share.png"
import Instagram from "../../assets/instagram.png"
import Facebook from "../../assets/facebook.png"
import Twitter from "../../assets/twitter.png"

export default function ArticleCard(props) {
    return (
        <div id="articleCard">
            <div id="articleCard--content">
                <h1 id="articleCard--title">{props.title}</h1>
                <div id="articleCard--socials">
                    <div id="socials-left">
                        <img src={props.profilePic} id="profile-pic"></img>
                        <div id="profile-details">
                            <h1>{props.author}</h1>
                            <p>{props.date} · {props.readingTime} read</p>
                        </div>
                    </div>
                    <div id="socials-right">
                        <img src={Instagram}></img>
                        <img src={Facebook}></img>
                        <img src={Twitter}></img>
                    </div>
                </div>
                <div id="articleCard--thumbnail" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
                <p id="articleCard--text">
                    {props.text}
                </p>
                <p style={{ fontSize: "16px" }}>Lets talk about them</p>
                <div id="articleCard--image" style={{ backgroundImage: `url(${props.image})` }}></div>
                <div id="articleCard--tags">
                    {props.tags.map(e => (
                        <div id="tag">{e}</div>
                    ))}
                </div>
                <div id="articleCard--claps">
                    <img src={Clap}></img>
                    <p>{props.clapCount} Claps</p>
                </div>
                <div id="author">
                    <img src={props.profilePic} id="profile-pic"></img>
                    <div id="profile-details">
                        <p>WRITTEN BY</p>
                        <h1>{props.author}</h1>
                        <p>{props.date} · {props.readingTime} read</p>
                    </div>
                </div>
                <div id="articleCard--side-container">
                    <div id="articleCard--side">
                        <div id="articleCard--claps">
                            <img src={Clap}></img>
                            <p>{props.clapCount} Claps</p>
                        </div>
                        <div id="articleCard--share">
                            <img src={Share}></img>
                            <p>Share this article</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}