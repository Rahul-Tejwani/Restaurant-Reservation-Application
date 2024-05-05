import React from 'react';
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we're serious about is food.</p>
                </div>
                <p className="mid">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat voluptate adipisci quaerat, vel voluptatum quisquam veritatis quam soluta, amet natus esse at eligendi libero eaque porro illum officia expedita asperiores maxime accusantium, aliquam quasi corporis aliquid. Voluptates beatae quo dolorum eius commodi quidem reiciendis delectus doloremque culpa, iste, officia debitis?
                </p>
                <Link to={"/"}>Explore Menu<span>
                    <HiOutlineArrowNarrowRight />
                </span>
            </Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About