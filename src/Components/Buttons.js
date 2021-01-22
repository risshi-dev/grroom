import React,{useEffect, useState} from 'react'
import Display from './Display'

function Buttons() {
    const [checked,setCheck]=useState(false)
    const [type,setType]=useState({'value':'','name':''})
    const [search, setSearch]=useState('')
    const [data, setData]=useState([])
    const [query,setQuery]=useState('')
    
    useEffect(()=>{
        checked===true?setQuery('?fullText=true'):setQuery('')
    },[checked])
    

    const fetching =()=>{
        fetch(`https://restcountries.eu/rest/v2/${type.value}/${search}${query}`)
        .then(res=> res.json())
        .then(res=>setData(res))
        .then(setSearch(''))

    }
     const param=[{'param':'Name','value':'name','extra':true,'extras':'Full Name'},
     {'param':'Code','value':'code','extra':true,'extras':'codes'},
     {'param':'Currency','value':'currency','extra':false},
     {'param':'Language','value':'lang','extra':false},
     {'param':'Capital City','value':'capital','extra':false},
     {'param':'Calling Code','value':'callingcode','extra':false},
     {'param':'Region','value':'region','extra':false},
     {'param':'Regional Bloc','value':'regionalbloc','extra':false}]

     const buttons= param.map((item,i) => <div>
         <button className='buttons' id={i} value={item.value} onClick={e => {setType({'value':e.target.value,'name':item.param})}}>{item.param}</button>
         
         </div>)
    return (
        <div>
           <div style={{display:'flex',justifyContent:'space-evenly'}}>{buttons}</div> 
           <div>Sort using {type.name}</div>
           <div>{type.name==='Name'?<div>Full Name<input type='checkbox' checked={checked} onChange={e=> setCheck(e.target.checked)}/></div>:''}</div>
           <div>
               <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={`Enter ${type.name} Details`}>
                
               </input>
            </div> 
            <div><button onClick={fetching}>Search</button></div>

            <Display data={data}/>
        </div>
    )
}

export default Buttons
