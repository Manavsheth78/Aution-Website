import React from 'react'
import "./About.css";
import create from "./create.jpg"

export const Create = () => {
  return (
    <div class="wrapper">
        <div class="background-color">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
        </div>
        <div class="about-container">
            <div class="image-container">
                <img src={create} alt="" />
            </div>
            <div class="text-container">
                <u><h1>Your Auctioneer account</h1></u>               
             <p> It takes just a few minutes to create an Auctioneer account. Once your account is set up, you can buy and sell, 
                end messages to other Auctioneer members, and leave feedback for buyers and sellers.</p>
        

            </div>
        </div>

    </div>
  )
}
