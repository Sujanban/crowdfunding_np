import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get('/user').then((res) => {
        setUser(res.data);
      })
    }
  }, []);



// useEffect(() => {
//   const fetchUser = async () => {
//     try{
//       const res = await axios.get('/dashboard');
//       setUser(res.data)
//       if(response.data.error){
//         navigate('/login');
//         console.log(response.data.error)
//       }

//     }catch(error) {
//       console.log(error)
//     }
//   }
//   fetchUser()
// }, [])





  const handleLogout = async () => {
    const response = await axios.get('/logout')
    if(response.data.error) {
      toast.error(response.data.error)
      return
    }
    toast.success(response.data.message)
    navigate('/')
  }
  return (
    <div>
      <h1 className='p-4'>
        <Link to='/'>Home</Link>
      </h1>
      <div className='p-8 text-center'>
        {
        user && 
        <div>
          <h1>Hi {user.firstName} {user.lastName}</h1>
          <p>Your Email is {user.email}</p>
          <p>Your Password {user.password}</p>
        </div> 
        }

      </div>
      <button className='m-16' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Dashboard