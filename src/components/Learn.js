import React from 'react'
import "./Learn.css";
import learn1 from "./learn1.png"

export const Learn = () => {
  return (
        <div class="wrapper">
        <div class="background-color">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
        </div>
        <div class="about-container">
            <div class="image-container">
                <img src={learn1} alt="" />
            </div>
            <div class="text-container">
                <u><h1>LEARN TO SELL</h1></u>
                <p1>Here's what you need to know to start selling.</p1>
                <br/>
                <div class="row">
                    <div class="course-col">
                        <h3>List your item</h3>
                        <p>You can list new or used item.</p>
                    </div>
                    <div class="course-col">
                        <h3>Good-quality photos</h3>
                        <p>Snap your item from multiple angles in a well-lit place.</p>
                    </div>
                    <div class="course-col">
                        <h3>Provide bill</h3>
                        <p>Bidder must provide bill to the auctioneer to prevent scams.</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
