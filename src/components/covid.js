import React, { useEffect, useState } from "react";
import './covid.css';

const Covid = () => {

    const [ data , setData] = useState([]);

    const getCovidData = async() => {
        try{
            const res = await fetch ('https://data.covid19india.org/data.json');
            const record = await res.json();
            setData(record.statewise[0]);        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getCovidData();
    },[])

    return (
        <>
          <h1>Live Data</h1>
          <h2>Covid Live Case Tracker</h2>  

          <ul>
              <li className='cards'>
                  <div className='card_main '>
                    <div className='card_inner'>
                        <p className='card_name'><span>Our</span> Country</p>
                        <p className='card_total'>INDIA</p>
                        <p></p>
                    </div>
                  </div>
              </li>
              <li className='cards'>
                  <div className='card_main one'>
                    <div className='card_inner'>
                        <p className='card_name'><span>Total</span> Active</p>
                        <p className='card_total'>{data.active}</p>
                        <p></p>
                    </div>
                  </div>
              </li>
              <li className='cards'>
                  <div className='card_main two'>
                    <div className='card_inner'>
                        <p className='card_name'><span>Total</span> Recovered</p>
                        <p className='card_total'>{data.recovered}</p>
                        <p></p>
                    </div>
                  </div>
              </li>
              <li className='cards'>
                  <div className='card_main three'>
                    <div className='card_inner'>
                        <p className='card_name'><span>Total</span> Confirmed</p>
                        <p className='card_total'>{data.confirmed}</p>
                        <p></p>
                    </div>
                  </div>
              </li>
              <li className='cards'>
                  <div className='card_main four'>
                    <div className='card_inner'>
                        <p className='card_name'><span>Total</span> Death</p>
                        <p className='card_total'>{data.deaths}</p>
                        <p></p>
                    </div>
                  </div>
              </li>
              <li className='cards'>
                  <div className='card_main five'>
                    <div className='card_inner'>
                        <p className='card_name'><span>Last</span> Updated</p>
                        <p className='card_total'>{data.lastupdatedtime}</p>
                        <p></p>
                    </div>
                  </div>
              </li>
          </ul>
        </>
    )
} 

export default Covid