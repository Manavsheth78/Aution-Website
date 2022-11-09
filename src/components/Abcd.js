import React from 'react'
import "./moneyBack.css";
import abcd from "./abcd.jpg"

export const Abcd = () => {
  return (
        <div class="wrapper">
        <div class="background-color">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
        </div>
        <div class="about-container">
            <div class="image-container">
                <img src={abcd} alt="" />
            </div>
            <div class="text-container">
                <u><h1>Money Back Guarantee</h1></u>
                <p1>Here's what you need to know </p1>
                <br/>
                <div class="row">
                    <div class="course-col">
                        <h3>Contact Your Seller</h3>
                        <p>If an item hasn’t arrived or isn’t as
                            described 
                            reach out to your seller.
                        </p>
                    </div>
                    <div class="course-col">
                        <h3>Not resolved? Let us know</h3>
                        <p>If you’ve talked to your seller and the
                            issue still isn’t resolved after three
                            business days, fill the Query form.</p>
                    </div>
                    <div class="course-col">
                        <h3>We’ll get your money back. Fast.</h3>
                        <p>You can count on hearing from us within
                           48 hours.</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
