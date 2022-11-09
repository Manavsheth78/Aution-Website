import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Query.css";

function Query() {

    const[name,setName] = useState("");
    const[college,setCollege] = useState("");
    const[phone,setPhone] = useState("");
    const[query,setQuery] = useState("");


    const hName = (event) => {setName(event.target.value);}
    const hCollege = (event) => {setCollege(event.target.value);}
    const hPhone = (event) => {setPhone(event.target.value);}
    const hQuery = (event) => {setQuery(event.target.value);}

    const save = (event) => {
        event.preventDefault();
        let msg = name + " " + college + " " + phone + " " + query;
        let data = {"from_name":name,"from_college":college,"from_phone":phone,"message":query};
        emailjs.send("service_20jeti3","template_tzqia1j",data,"nYUlYat3fkzReLrKU")
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        alert(msg);
        setName("");
        setCollege("");
        setPhone("");
        setQuery("");
    }

    return(
        <div class="wrapper">
        <div class="background-color">
            <div class="bg-1"></div>
            <div class="bg-2"></div>
        </div>
        <div class="about-container">
            <form onSubmit={save} className="form-custom">
                <h3 >FILL THE FORM</h3>
                <input type="text" id="name" placeholder="Enter Name" required onChange={hName} className="input-style"/>
                <input type="text" id="pname" placeholder="Enter Product Name" required onChange={hCollege} className="input-style"/>
                <input type="text" id="phone" placeholder="Enter Phone Number" required onChange={hPhone} className="input-style"/>
                <textarea id="message" rows="4" placeholder="Enter query" onChange={hQuery} className="input-style"/>
                <button type="submit" className="button-style">Submit</button>
            </form>
        </div>

    </div>
    );
}

export default Query;

// style={{textAlign:"left"}}