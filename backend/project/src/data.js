import { useEffect, useState } from 'react';
function App() {
  const [form, setform] = useState([]);
  const [users, setUsers] = useState([]);

  const handleform = (e)=>{
    setform({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:5000/',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json' 
      }
    } );
  const data= await response.json();
    console.log(data);
  }
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
    <span>username</span>
    <input type="text" name="username" onChange={handleform}></input>
    <span>password</span>
    <input type="text" name="password"onChange={handleform}></input>
    <input type="submit" ></input>

</form>
<div>
        <ul>
          {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
        </ul>
      </div>
</div>
);
}
export default App;