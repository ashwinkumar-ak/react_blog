import React from "react"
import Card from "../other/Card"
import PlainCard from "../other/PlainCard"
import Heading from "../other/Heading"
import Image from "../../assets/travel.jpg"
import River from "../../assets/river.jpg"
import Mountains from "../../assets/mountains.jpg"
import Arrow from "../../assets/arrow.svg"

export default function LatestArticles() {
    return (
        <div id="articles" className="pad">
            <Heading value="Latest Articles" />
            <div id="articles--container">
                <div id="articles--left">
                    <div className="card-container" style={{ flexDirection: "column" }}>
                        <Card
                            image={Image}
                            title="Joshua Tree Overnight Adventure"
                            text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="hr"></p>
                        <Card
                            image={Image}
                            title="Joshua Tree Overnight Adventure"
                            text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="hr"></p>
                        <Card
                            image={Image}
                            title="Joshua Tree Overnight Adventure"
                            text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="hr"></p>
                        <Card
                            image={Image}
                            title="Joshua Tree Overnight Adventure"
                            text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                            genre="Travel"
                            date="August 20 2022"
                            row={true}
                            big={true}
                        />
                        <p id="loadMore-btn">
                            <img src={Arrow} alt="Not found"></img>
                            LEARN MORE
                        </p>
                    </div>
                    <PlainCard
                        image={River}
                        title="Title of vertical gallery"
                        genre="Travel"
                        date="August 21 2017"
                        big={true}
                    />
                </div>
                <div id="articles--right">
                    <div id="articles--advertisement">
                        <h1>Advertisement</h1>
                    </div>
                    <div id="topPosts">
                        <Heading value="Top Posts" />
                        <div className="card-container" style={{ flexDirection: "column" }}>
                            <Card
                                image={Mountains}
                                title="Catch waves with an adventure guide"
                                genre="Travel"
                                date="August 20 2022"
                                row={false}
                                big={true}
                            />
                            <p id="hr"></p>
                            <Card
                                image={Image}
                                title="Catch waves with an adventure guide"
                                genre="Travel"
                                date="August 20 2022"
                                row={true}
                                big={false}
                            />
                            <p id="hr"></p>
                            <Card
                                image={Image}
                                title="Catch waves with an adventure guide"
                                genre="Travel"
                                date="August 20 2022"
                                row={true}
                                big={false}
                            />
                            <p id="hr"></p>
                            <Card
                                image={Image}
                                title="Catch waves with an adventure guide"
                                genre="Travel"
                                date="August 20 2022"
                                row={true}
                                big={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}