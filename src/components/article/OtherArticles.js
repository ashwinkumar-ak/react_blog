import React from "react"
import Heading from "../other/Heading"
import Card from "../other/Card"
import Image from "../../assets/adventure.jpg"

export default function OtherArticles() {
    return (
        <div id="otherArticles" className="pad">
            <Heading value="More from The Siren" />
            <div className="card-container">
                <Card
                    image={Image}
                    title="Joshua Tree Overnight Adventure"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
                <Card
                    image={Image}
                    title="Joshua Tree Overnight Adventure"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
                <Card
                    image={Image}
                    title="Joshua Tree Overnight Adventure"
                    text="Gujarat is vastly underrated and it’s a mystery to us why the region isn’t more well-known as a tourist destination. It has a plethora of temples and palaces"
                    genre="Travel"
                    date="August 20 2022"
                    row={false}
                    big={true}
                />
            </div>
        </div>
    )
}