import React from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    
    const redirectToCovidPage=(e)=>{
        e.preventDefault();
        navigate('/');
    }
  return (
    <div>
        <h1>HomePage</h1>
        <button onClick={redirectToCovidPage}>Back</button>
    </div>
  )
}

export default HomePage