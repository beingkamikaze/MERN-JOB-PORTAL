import { useForm } from "react-hook-form"

const CreateJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
  }
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
      </div>


      <input type="submit" className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm" />
    </form>

      </div>
    </div>
  )
}

export default CreateJob