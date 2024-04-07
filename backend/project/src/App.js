// import "./App.css";
import { useEffect, useState } from 'react';
 import { useNavigate} from 'react-router-dom';
function App() {
  const [form, setform] = useState([]);
  const [users, setUsers] = useState([]);
  
 
  const handleform = (e)=>{
    setform({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    });

      const data = await response.json();
     console.log(data);
      useNavigate("/login")



  const getUsers = async ()=>{
    const response = await fetch('http://localhost:5000/',{
      method:'GET',
    })
   const data = await response.json();
   setUsers(data);
  }
  


  useEffect(()=>{
    getUsers();
  },[])

  
    return(
        <div>
        
          <form onSubmit={handlesubmit}>
    <span>name</span>
    <input type="text" name="name" onChange={handleform}></input>
    <span>aadharno</span>
    <input type="text" name="aadharno"onChange={handleform}></input>
    <span>country</span>
    <input type="text" name="country" onChange={handleform}></input>
    <span>address</span>
    <input type="text" name="address"onChange={handleform}></input>
    
    <span>city</span>
    <input type="text" name="city" onChange={handleform}></input>
    <span>pincode</span>
    <input type="text" name="pincode"onChange={handleform}></input>
    <span>phoneno</span>
    <input type="text" name="phoneno" onChange={handleform}></input>
    <span>password</span>
    <input type="text" name="password"onChange={handleform}></input>
    {/* <span>policeid</span>
    <input type="text" name="policeid" onChange={handleform}></input> */}
    <input type="submit" ></input>

</form>
<div>
        <ul>
          {users.map(user=><li key={user._id}>{user.name},{user.aadharno},{user.country},{user.address},{user.city},{user.pincode},{user.phoneno},{user.password}</li>)}
        </ul>
      </div>
</div>
);
}
}
export default App;

