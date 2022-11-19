import React from "react"
import PlainCard from "../other/PlainCard"
import Mountains from "../../assets/mountains.jpg"
import Forest from "../../assets/forest.jpg"
import River from "../../assets/river.jpg"

export default function Head() {
    return (
        <div id="head">
            <div id="head--left">
                <PlainCard
                    image={Forest}
                    title="Title of vertical gallery"
                    genre="Travel"
                    date="August 21 2017"
                    big={true}
                    href={"/article"}
                />
            </div>
            <div id="head--right">
                <PlainCard
                    image={Mountains}
                    title="Title of vertical gallery"
                    genre="Travel"
                    date="August 21 2017"
                    big={false}
                />
                <PlainCard
                    image={River}
                    title="Title of vertical gallery"
                    genre="Travel"
                    date="August 21 2017"
                    big={false}
                />
            </div>
        </div>
    )
}