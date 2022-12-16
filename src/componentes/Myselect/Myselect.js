import React from 'react'

export  function Myselect(props ,defaultValue ) {
  return (
     
    <select  className='form-control w-50'>
        <option disabled value="">{defaultValue}</option>
        {}
      <option value="val">sorted by title</option>
      <option value="val">sorted by job</option>

    </select>
     
    )
}
