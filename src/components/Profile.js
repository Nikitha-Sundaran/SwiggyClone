
import { signOut } from "firebase/auth";
import {auth} from '../utils/FireBase';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SwiggyOne from "./SwiggyOne";
const Profile = () =>{
    const navigate = useNavigate()
    const userData = useSelector(store=>store.user)
    console.log(userData);

    useEffect(()=>{
      if(!userData){
        navigate('/')
      }
    },[userData])
    
const handleClick =()=>{
    signOut(auth).then(() => {
        dispatch(removeUser());
        navigate('/');
      }).catch((error) => {
        
      });

  const userData = useSelector((store) => store.user)
      
}
    return(
      <div className="w-screen h-screen fixed bg-customBlue">
        <div className="flex justify-between" >
          <div className="text-white m-10 ">
             <div className="text-2xl font-bold">{userData?.name}</div>
             <div>{userData?.email}</div>
          </div>

          <div>
           <button
            onClick={handleClick}
            className="m-10 margin-left border p-2 border-white rounded-md font-bold text-md text-white">
              LOGOUT
           </button>
          </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="m-10 h-1/2 w-3/4 bg-white">
          <SwiggyOne />
        </div>
      </div>

      

      </div>
    )
}
export default Profile;
