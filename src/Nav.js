import React from 'react'
import "./Nav.css";
 
const Nav = () => {
// const[show,setShow]=useState(false);
// useEffect(()=>{
//     window.addEventListener("scroll",()=>{
//         if(window.scrollY>100){
//             handleShow(true);
//         }
//         else handleShow(false);
//         });
//         return()=>{
//             window.removeEventListener("scroll");
//         };
//     },[]);


    return (
    <div className="nav">
     
        <img
        className='nav__logo'
        src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
        alt='Netflix Logo'
        />
           <div class="search center">
            <form action="">
                <input type="text" placeholder="Search by raushan"/>
                <button> <i class="material-icons">search</i></button>
            </form>
            <i class="material-icons mic">mic</i>

        </div>

        <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Avatar'
        />
 


    </div>
  )
}

export default Nav;