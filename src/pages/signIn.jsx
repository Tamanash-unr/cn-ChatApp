import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";

import CustomButton from "../Components/CustomButton"
import FormInput from '../Components/FormInput';

function SignIn() {
  const [form, setForm] = useState({
    email: '',
    password: ''    
  })

  const navigate = useNavigate();

  const doOnClick = () =>{
    console.log("On Clicked")
  }

  return (
    <div className="flex bg-default h-screen w-screen text-white items-center">
        <div
         className="flex flex-col bg-black-200 flex w-[320px] h-[480px] md:w-[500px] md:h-[480px] items-center m-auto rounded-xl border-solid border-2 border-[#bcbcbc] p-2"
        >
          <div className="flex items-center w-full">
            <img src='/assets/AppLogo.png' className="w-[80px] mt-8 md:w-[100px] mx-2"/>
            <p className="text-3xl poppins-bold mt-4 md:text-4xl">
              Sign In
            </p>
          </div>
          <div className='flex flex-col w-full items-center my-4'>
            <FormInput 
              type="email" 
              placeholder="Your Email" 
              value={form.email} 
              title="Email"
              handleChangeText={ (evt) => { setForm({...form, email: evt.target.value}) }}
            />
            <FormInput 
              type="password" 
              placeholder="Your Password" 
              isPassword={true} 
              value={form.password} 
              title="Password"
              handleChangeText={ (evt) => { setForm({...form, password: evt.target.value}) }}
            />
          </div>
          <CustomButton 
            text="Sign In"
            onClick={doOnClick}
          />
          <p className='mt-2'>
            Don't have an account? <Link to="/sign-up" className='text-sky-400 hover:text-green-200'>Sign Up</Link>
          </p>
        </div>
    </div>
  )
}

export default SignIn