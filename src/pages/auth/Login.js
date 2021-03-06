import React from 'react';
import { useForm } from "react-hook-form";
import { LoginAPI,getToken} from './API';
import { useNavigate } from "react-router-dom";

export default function Login() {

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    function refreshPage() {
        window.location.reload(false);
      }
      const isAuth = getToken();



      if(isAuth !== undefined && isAuth !==null){
        navigate('/')
        return(<p>You are logged In</p>)
    } 
    else{
    return (
        <div className='container'>
        <form onSubmit={handleSubmit(async (form) => {
            try {
                let response = await LoginAPI(form)
                localStorage.setItem('token', response.data.token)
                navigate('/login')                
            } catch(err) {
                console.log(err);
                navigate('/login')
            }
        })}>
            <p className='announcement'>Compte prédéfini avec des commandes deja faites </p>
            <label className='label' htmlFor="email"><h2>Email</h2></label>
            <br/>
            <input 
                 className='form'
                type="email" id='email'
                defaultValue="tahajotey@gmail.com" 
                {...register("email", { 
                    required: true,  
                    pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format"
                    }
                })} 

            /> 
            {errors.email && <span>This field is required</span>} <br />
            <label className='label' htmlFor="password"><h2>Password</h2></label>
            <br/>
            <input className='form' type="password"defaultValue="TikkaMassala" 
 id='password' {...register("password", { required: true })} /> <br />
            {errors.password && <span>This field is required</span>} <br />

            <input  className='submit' type="submit" /> <br />

        </form>
        </div> 
    )

}}