import React, { useEffect, useState } from 'react'
import Banner from '../component/Banner'
import Card from '../component/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';

const Home = () => {
    const [selectedCategory,setSelectedCategory] =useState(null);
    const [jobs,setJobs] = useState([]);

    useEffect(()=>{
        fetch("jobs.json").then(res => res.json()).then(data=>{
            // console.log(data);
            setJobs(data);
        })
    },[])
    // console.log(jobs);
    const [query,setQuery] = useState("");
    const handleInputChange = (event) =>{
        setQuery(event.target.value)
    }

    //filter job by titles
    const filteredItems = jobs.filter((jobs)=>jobs.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !==-1)
    
    //--------------Radio based filtering----------
    const handleChange = (event) =>{
        setSelectedCategory(event.target.value)
    }
    //-----------button based filtering ----------
    const handleClick = (event) =>{
        selectedCategory(event.target.value)
    }
    //main function
    const filteredData = (jobs,selected,query) => {
        let filteredJobs = jobs;
        //filtering Input Items
        if(query){
            filteredJobs = filteredItems;
        }
        //category filtering
        if(selected) {
            filteredJobs =  filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate}) => (
                jobLocation.toLowerCase() === selected.toLowerCase() ||
                parseInt(maxPrice) <= parseInt(selected) ||
                salaryType.toLowerCase() === selected.toLowerCase() ||
                employmentType.toLowerCase() === selected.toLowerCase()



            ));
            console.log(filteredJobs)
        }

        return filteredJobs.map((data,i)=> <Card key={i} data={data}/>)
    }

    const result = filteredData(jobs,selectedCategory,query);
    return (
        <div>
            <Banner query={query} handleInputChange={handleInputChange}/>
            {/* main content */}

            <div className='bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
                {/*Left Side */}

                <div className='bg-white p-4 rounded'>
                    <Sidebar handleChange={handleChange} handleClick={handleClick}/>
                </div>

                {/*Job Cards */}
                <div className='col-span-2 bg-white p-4 rounded'><Jobs result={result}/></div>

                {/* Right Side */}
                <div className='bg-white p-4 rounded'>Right</div>
            </div>
        </div>
    )
}

export default Home