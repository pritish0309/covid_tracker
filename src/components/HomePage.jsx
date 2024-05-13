import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState('')
    const uid = process.env.REACT_APP_UID;

    const OnFormSubmit = (e) =>{
      e.preventDefault();
      if (inputText === uid) {
        navigate('/covid');
      }else{
        alert("UID Mismatch");
        setInputText('');
      }
    }

  return (
    <div>
        <h1>HomePage</h1>
        <form onSubmit={OnFormSubmit}>
          <input type="text" placeholder='Enter the uid' value={inputText} onChange={(e)=> setInputText(e.target.value)}/>
          <button>Submit</button>
        </form>
       
    </div>
  )
}

export default HomePage