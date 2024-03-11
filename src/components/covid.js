import React, { useEffect, useState } from "react";
import './covid.css';

const Covid = () => {

    const [ data , setData] = useState([]);
    const [ getState, setState ] = useState([]);
    const [ getSearch, setSearch ] = useState('');
    const getCovidData = async() => {
        try{
            const res = await fetch ('https://data.covid19india.org/data.json');
            const record = await res.json();
            setData(record.statewise[0]);   
            setState(record.statewise);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getCovidData();
    },[])

   
    if (getState) {
        var filteredState = getState.filter(item => item.state !== 'Total' );
    }
    const handleChange = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    console.log('All States'+ getState);
    console.log('Total'+ filteredState);
    return (
        <>
        <h1>Covid Case Tracker</h1>
              <div className='cards'>
                  <div className='card_main '>
                    <div className='card_inner'>
                        <div className="country_name">
                            <p></p>
                            <p>India</p>
                        </div>
                        <div className="active_cases">
                            <p>Active Cases</p>
                            <p>{data.active}</p>
                        </div>
                        <div className="cases_recovered">
                            <p>Recovered Cases</p>
                            <p>{data.recovered}</p>
                        </div>
                        <div className="total_confirmed">
                            <p>Confirmed Cases</p>
                            <p>{data.confirmed}</p>
                        </div>
                        <div className="deaths">
                            <p>Deaths</p>
                            <p>{data.deaths}</p>
                        </div>
                        <div className="last_updated">
                            <p>Last Updated Time</p>
                            <p>{data.lastupdatedtime}</p>
                        </div>
                    </div>
                  </div>
              </div>
        <h2>States Wise Covid Cases</h2>
        <div className="search_bar">
            <input type="search" placeholder="Search State Here..." onChange={handleChange} value={getSearch}/>
        </div> 
            <div className='card_row'>
            {
              filteredState !== '' ? 
                filteredState.filter(post => {
                    if (getSearch === '') {
                        return post;
                    }else if (post.state.toLowerCase().includes(getSearch.toLowerCase())) {
                        return post;
                    }
                }).map((items,index )=>
                    <div className="card-box" key={index}>
                        <div className="card_title">{items.state}</div>    
                        <div className="card_description">
                            <p>Active Cases: {items.active}</p>
                            <p>Cases Recovered: {items.recovered}</p>
                            <p>Cases Confirmed: {items.confirmed}</p>
                            <p>Deaths: {items.deaths}</p>
                            <p>Last updated: {items.lastupdatedtime}</p>
                        </div>
                    </div>
                )
            
            : 'Loading'
        }
              </div>
            
        </>
    )
} 

export default Covid