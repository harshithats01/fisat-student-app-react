import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent=()=> {
    const [data,setData]=useState(
        {
            "firstname":" ",
            "lastname":" ",
            "college":" ",
            "dob":" ",
            "course":" ",
            "mobile":" ",
            "email":" ",
            "address":" "

        }
    )
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
        
        console.log(response.data)  
            if(response.data.status=="success")
                {
                    alert("Successfully Added")
                }
            else
                {
                    alert("failed")
                }
     } ).catch()

        
        
    }
    return (
        <div>
            <Navbar />
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://fisat.ac.in/wp-content/uploads/2023/06/Website-Banner-Adm-scaled.jpg" height="400px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://fisat.ac.in/wp-content/uploads/2022/05/cover-foto-scaled-e1658141054290.jpg" height="400px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://fisat.ac.in/wp-content/uploads/2022/05/eee-1.jpg" height="400px" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <br />
            <marquee><b>  * &nbsp;&nbsp;&nbsp;   Admissios Open &nbsp;&nbsp;&nbsp; * &nbsp;&nbsp;&nbsp;Master Of Computer Applications&nbsp;&nbsp;&nbsp; *&nbsp;&nbsp;&nbsp;Master of Business Administration *&nbsp;&nbsp;&nbsp;B.Tech&nbsp;&nbsp;&nbsp;*  Apply Now &nbsp;&nbsp;&nbsp; *</b></marquee>
            <br />
            <center><h1>REGISTRATION</h1></center>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">First Name:</label>
                            <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Last Name:</label>
                            <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">College:</label>
                            <textarea name="college" id="" className="form-control" value={data.college} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">DoB:</label>
                            <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Course:</label>

                            <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                                <option value="MCA">MCA</option>
                                <option value="MBA">MBA</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                            </select>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Mobile no:</label>
                            <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email.id:</label>
                            <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Address:</label>
                            <textarea name="address" id="" className="form-control" value={data.address} onChange={inputHandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <button className="btn btn-success" onClick={readValue}>SUBMIT</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent