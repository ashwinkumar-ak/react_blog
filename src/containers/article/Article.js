import React from "react";
import ArticleNavBar from "../../components/article/ArticleNavBar";
import ArticleCard from "../../components/other/ArticleCard";
import ProfilePic from "../../assets/profile.png"
import ReactImage from "../../assets/react.png"
import ReactCode from "../../assets/reactCode.jpg"
import OtherArticles from "../../components/article/OtherArticles";

export default function Article() {
    return (
        <div>
            <ArticleNavBar />
            <ArticleCard
                profilePic={ProfilePic}
                thumbnail={ReactImage}
                image={ReactCode}
                title={"5 Ways to animate a React app."}
                text={"Animation in ReactJs app is a popular topic and there are many ways to create different types of animations. Many developers create animation exclusively using css and adding classes to HTML tags. This is a great way and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React. Let’s talk about them."}
                clapCount={"9.3K"}
                author={"Dmitry Nozhenko"}
                date={"Jan 28, 2019"}
                readingTime={"10 min"}
                tags={["React", "Javascript", "Animation"]}
            />
            <OtherArticles />
        </div>
    )
}