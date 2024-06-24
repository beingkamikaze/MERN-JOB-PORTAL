import { useState } from "react";
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable';

const CreateJob = () => {
const [selectedOption,setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.skills = selectedOption;
    console.log(data)
  }
  const options = [
    {value: "JavaScript",label: "JavaScript"},
    {value: "C++",label: "C++"},
    {value: "HTML",label: "HTML"},
    {value: "CSS",label: "CSS"},
    {value: "React",label: "React"},
    {value: "Node",label: "Node"},
    {value: "MongoDB",label: "MongoDB"},
    {value: "Redux",label: "Redux"},
    
  ]
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      {/*Form*/}
      <div className='bg-[#FAFAFA] py-10px-4 lg:px-16'>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-9">
        {/*First ROW */}
      <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Job Title</label>
          <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className="create-job-input"/>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Company Name</label>
          <input type="text" placeholder="Ex: Microsoft" {...register("companyName")} className="create-job-input"/>
        </div>
      </div>
      {/*Second Row */}
      <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Minimum Salary</label>
          <input type="text" placeholder="$20k" {...register("minPrice")} className="create-job-input"/>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Maximum Salary</label>
          <input type="text" placeholder="$100k" {...register("maxPrice")} className="create-job-input"/>
        </div>
      </div>

      {/*Third row */}
      <div className="create-job-flex">
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Salary Type</label>
          <select {...register("salaryType")} className="create-job-input">
        <option value="">Choose your salaryType</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Job Location</label>
          <input type="text" placeholder="Ex: New York" {...register("jobLocation")} className="create-job-input"/>
        </div>
      </div>

      {/*Fourth Row*/}
      <div className="create-job-flex">
      <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Job Posting Date</label>
          <input type="date" placeholder="Ex: mm/dd/yyyy" {...register("postingDate")} className="create-job-input"/>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Experience Level</label>
          <select {...register("experienceLevel")} className="create-job-input">
        <option value="">Select Your Experience Level</option>
        <option value="Internship">Internship</option>
        <option value="Any experience">Any experience</option>
        <option value="Work remotely">Work remotely</option>
      </select>
        </div>
      </div>

      {/*Fifth row */}
      <div>
      <label className="block mb-2 text-lg">Required Skill Sets:</label>
      <CreatableSelect className="create-job-input py-4" defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti/>
      </div>

      {/*Sixth Row */}
      <div className="create-job-flex">
      <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Company Logo</label>
          <input type="url" placeholder="Paste your Comapny logo URL: https://comapnylogo.com/" {...register("companyLogo")} className="create-job-input"/>
        </div>
        <div className="lg:w-1/2 w-full">
          <label className="block mb-2 text-lg">Employement Type</label>
          <select {...register("employmentType")} className="create-job-input">
        <option value="">Select Your Employement Type</option>
        <option value="Full-time">Full-time</option>
        <option value="Temporary">Temporary</option>
        <option value="Part-time">Part-time</option>
      </select>
        </div>
      </div>

      {/*Seventh Row */}
      <div className="w-full">
      <label className="block mb-2 text-lg">Job Description</label>
      <textarea className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-500" rows={6} placeholder="Job Description" defaultValue={"We are looking for a passionate and driven Junior Software Developer to join our dynamic tech team. You will work closely with senior developers to design, develop, and maintain software applications, contributing to various projects that drive our business forward."}{...register("description")} />

      </div>

      {/*Last row */}
      <div className="w-full">
      <label className="block mb-2 text-lg">Job Posted by</label>
      <input type="email" placeholder="your Email" {...register("postedBy")} className="create-job-input"/>
      </div>


      <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm" />
    </form>

      </div>
    </div>
  )
}

export default CreateJob