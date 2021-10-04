import React, { useState,useEffect } from "react"
import { Button } from "reactstrap";
import Course from "./Course"
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";
const AllCourses=()=>{

    useEffect(()=>{
        document.title="All Courses"
    },[]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c)=>c.id !=id ))
    }
    //function to call Server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("course has been loaded",{
                    position:"bottom-center"
                });
                setCourses(response.data);
            },
            (error)=>{
                    //for error
                    console.log(error);
                    toast.error("server Down");
            }
        );
    };

    //Calling loading coarse function
    useEffect(()=>{
        getAllCoursesFromServer();
    },[]);
    const[courses,setCourses]=useState([
        // {title:"Java Course",Description:"this is Demo Course"},
        // {title:"Django Course",Description:"this is Demo Course"},
        // {title:"React JS Course",Description:"this is Demo Course"},
        // {title:"Angular Course",Description:"this is Demo Course"}
    ]);

    return(
        <div>
            
        <h1>All Courses</h1>
        <p>List of Courses are as follows</p>
        {
            courses.length>0 ? courses.map((item)=> <Course key={item.id} course={item} update={updateCourses}/>) : "No Courses"
        }
        </div>
    );
}

export default AllCourses;