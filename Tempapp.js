import react, { useEffect, useState } from 'react'
import './css/Style.css';

const Tempapp=()=>{

    const[city,setcity]=useState();
    const[search,setsearch]=useState("mumbai");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=adcdcdfc243051ffa6592343045197fb`;
            const response=await fetch(url);
            const resJson=await response.json();
            setcity(resJson.main);
        }

        fetchApi();
    },[search])

    return (
        <>
            <div className='box'>
                <div className='inputData'>
                     <input type='search'
                      className='inputFeild'
                      onChange={(event)=>{
                            setsearch(event.target.value)
                      }}
                     />
                </div>
            
        {!city?(<p>no data found</p>):(
            <div>
            <div className='info'>
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
                </h2>
                <h1 className='temp'>
                   {city.temp}
                </h1>
                <h3 className='tempmin_max'>Min : {city.temp_min} cel | Max : {city.temp_max} cel</h3>
             </div>

             <div className='wave-one'></div>
             <div className='wave-two'></div>
             <div className='wave-three'></div>
             </div>
             )}
             
             </div>
        </>
    )
}
export default Tempapp;