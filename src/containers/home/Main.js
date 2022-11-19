import React from "react"
import Latest from "../../components/main/Latest"
import LatestStories from "../../components/main/LatestStories"
import LatestArticles from "../../components/main/LatestArticles"

export default function Main() {
    return (
        <div id="main">
            <Latest />
            <LatestArticles />
            <LatestStories />
        </div>
    )
}