import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../appwrite/auth'
import {logout} from "../../store/authSlice"

const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler = () =>{
        authservice.logout().then(()=>{
            dispatch(logout())
            window.location.reload()
        })
    }
  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200  bg-green-800 text-white hover:bg-green-900 cursor-pointer rounded-md'>Logout</button>
  )
}

export default LogoutBtn