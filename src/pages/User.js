import React, { useEffect, useState } from "react";
import {UserInfo} from './auth/API'


const UserName = () => {
    const [info, setInfo] = useState("")
  
    const user = async () => {
        const info = await UserInfo()
        setInfo(info.data)
    }
  
    useEffect(() => {
        user()
    }, [])
    return (
        <>
          <h1 className="name">{info.firstname}'s orders</h1>
        </>
      );
    };
    
    export default UserName;
    