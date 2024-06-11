import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExp from './WorkExp'
import EmployementType from './EmployementType'

const Sidebar = ({handLeChange,handLeClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handLeChange={handLeChange}/>

        <Salary handLeChange={handLeChange} handLeClick={handLeClick}/>

        <JobPostingData handLeChange={handLeChange}/>

        <WorkExp handLeChange={handLeChange}/>

        <EmployementType handLeChange={handLeChange}/>
    </div>
  )
}

export default Sidebar