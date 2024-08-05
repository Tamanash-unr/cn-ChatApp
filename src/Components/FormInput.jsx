import { useState } from 'react'

function FormInput({ title, isPassword, value, placeholder, type, handleChangeText }) {
    const [showPassword, setShowPassword] = useState(false);

    const hideIcon = {
        show: '/assets/eye.png',
        hide: '/assets/eye-hide.png'
    }

  return (
    <div className='w-[85%] my-2 relative'>
        <p className='poppins-semibold'>
            {title}
        </p>
        <input 
            type={showPassword ? 'text' : type} 
            value={value} 
            placeholder={placeholder}
            className='w-full h-[50px] text-white bg-[#3e3e3e] rounded-lg p-4 my-2'
            onChange={handleChangeText} 
        />
        {
            isPassword && 
            <button onClick={() => setShowPassword(!showPassword)}>
                <img src={ showPassword ? hideIcon.show : hideIcon.hide } className='absolute top-[42%] right-3 w-[40px] h-[40px]'/>
            </button>
        }
    </div>
  )
}

export default FormInput