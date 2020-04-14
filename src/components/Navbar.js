import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import '../components-styling/Navbar.scss'
import logo from '../assets/img/logo.png'
import Button from "./Button";
import AuthContext from "../context/AuthContext";

export const Navbar = () => {
    const authUser = useContext(AuthContext)
    return (
        <>
         <nav>
             <ul>
                 <li>
                     <Link to="/">
                         <img className="logo" src={logo} alt="companylogo"/>
                     </Link>
                 </li>
                 <li>
                     <Link to="/"> Meine Produkte </Link>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M5.39856 8.99509C5.39856 8.84509 5.45856 8.68509 5.57856 8.57509C5.80856 8.34509 6.18856 8.34509 6.42856 8.57509L11.9986 14.1451L17.5786 8.57509C17.8086 8.34509 18.1886 8.34509 18.4286 8.57509C18.6586 8.80509 18.6586 9.18509 18.4286 9.42509L12.4286 15.4251C12.1986 15.6551 11.8186 15.6551 11.5786 15.4251L5.57856 9.42509C5.45856 9.30509 5.39856 9.14509 5.39856 8.99509Z" fill="#02b3e4"></path></svg>
                 </li>
                 <li>
                     <Link to="/"> Über GEDANKENtanken </Link>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M5.39856 8.99509C5.39856 8.84509 5.45856 8.68509 5.57856 8.57509C5.80856 8.34509 6.18856 8.34509 6.42856 8.57509L11.9986 14.1451L17.5786 8.57509C17.8086 8.34509 18.1886 8.34509 18.4286 8.57509C18.6586 8.80509 18.6586 9.18509 18.4286 9.42509L12.4286 15.4251C12.1986 15.6551 11.8186 15.6551 11.5786 15.4251L5.57856 9.42509C5.45856 9.30509 5.39856 9.14509 5.39856 8.99509Z" fill="#02b3e4"></path></svg>
                 </li>
                 <li>
                     <Link to="/">Blog</Link>
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" fill="none" rx="0" ry="0"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M5.39856 8.99509C5.39856 8.84509 5.45856 8.68509 5.57856 8.57509C5.80856 8.34509 6.18856 8.34509 6.42856 8.57509L11.9986 14.1451L17.5786 8.57509C17.8086 8.34509 18.1886 8.34509 18.4286 8.57509C18.6586 8.80509 18.6586 9.18509 18.4286 9.42509L12.4286 15.4251C12.1986 15.6551 11.8186 15.6551 11.5786 15.4251L5.57856 9.42509C5.45856 9.30509 5.39856 9.14509 5.39856 8.99509Z" fill="#02b3e4"></path></svg>
                 </li>
                 <li>
                     <Button className="btn-primary"
                             handleClick={authUser.logout}
                     >
                        Log Out
                     </Button>
                 </li>
             </ul>
         </nav>
        </>
    )
}
