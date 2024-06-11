import React from 'react'
import InputField from '../component/InputField'

const EmployementType = ({handLeChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name='test' id='test' value="" onChange={handLeChange} />
                <span className='checkmark'></span> Any
            </label>

            <InputField handLeChange={handLeChange} value="Full-time" title="Full-time" name="test"/>
            <InputField handLeChange={handLeChange} value="Temporary" title="Temporary" name="test"/>
            <InputField handLeChange={handLeChange} value="Part-time" title="Part-time" name="test"/>
        </div>
    </div>
  )
}

export default EmployementType