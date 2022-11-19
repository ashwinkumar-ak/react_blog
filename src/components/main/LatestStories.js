import React from "react"
import Heading from "../other/Heading"
import Card from "../other/Card"

export default function LatestStories() {
    return (
        <div id="latestStories" className="pad">
            <Heading value="Latest Stories" />
            <div className="card-container">
                <Card
                    title="Catch waves with an adventure guide"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                    row={false}
                    big={true}
                    genre="TECH"
                    date="TODAY AT 11:54"
                />
                <Card
                    title="Catch waves with an adventure guide"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                    row={false}
                    big={true}
                    genre="TECH"
                    date="TODAY AT 11:54"
                />
                <Card
                    title="Catch waves with an adventure guide"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                    row={false}
                    big={true}
                    genre="TECH"
                    date="TODAY AT 11:54"
                />
            </div>
        </div>
    )
}