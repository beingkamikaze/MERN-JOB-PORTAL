import React from 'react'
import Button from './Button'
import InputField from '../component/InputField'


const Salary = ({handLeChange,handLeClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            <Button onClickHandler={handLeClick} value="" title="Hourly"/>
            <Button onClickHandler={handLeClick} value="Monthly" title="Monthly"/>
            <Button onClickHandler={handLeClick} value="Yearly" title="Yearly"/>
        </div>

        <div>
        <label className='sidebar-label-container'>
                <input type="radio" name='test' id='test' value="" onChange={handLeChange} />
                <span className='checkmark'></span> All
            </label>

            <InputField handLeChange={handLeChange} value={30} title="< 30000k" name="test2"/>
            <InputField handLeChange={handLeChange} value={50} title="< 50000k" name="test2"/>
            <InputField handLeChange={handLeChange} value={80} title="< 80000k" name="test2"/>
            <InputField handLeChange={handLeChange} value={100} title="< 100000k" name="test2"/>
        </div>
    </div>
  )
}

export default Salary