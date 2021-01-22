import React from 'react'

function Display({data}) {
    var country = data.map(item=> <div className="cont">
        <div className="name">{item.name}</div>
        <img className="flag" src={item.flag}/>
    </div>)
    return (
        <div>
            {country}
        </div>
    )
}

export default Display
