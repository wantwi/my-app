import React from 'react'
import './SearchBox.css'

function SearchBox({placeholder, handleChange}) {
    return (
        <div>
             <input className="search" type="text" onChange ={(e)=>handleChange(e.target.value)} placeholder={placeholder} />
        </div>
    )
}

export default SearchBox
