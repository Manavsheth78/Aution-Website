import React from 'react'
import about from "./about.jpg"
import "./About.css";

export const About = () => {
  return (
    <div class="wrapper">
        <div class="background-color">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
        </div>
        <div class="about-container">
            <div class="image-container">
                <img src={about} alt="" />
            </div>
            <div class="text-container">
                <u><h1>ABOUT US</h1></u>
                <p> The global reach of online auction market places allows for the buyers and sellers to overcome geographical 
                    constraints and purchase products anytime from anywhere over the internet.</p>
                <p> Auctioneer provides the consumers with great advantages of low prices, 
                    greater product selection and greater efficiency compared 
                    to the usual traditional offline markets.</p>
                <p>Anyone here at Auctioneer can register and participate in any of the auctioning process.</p>

            </div>
        </div>

    </div>
  )
}
