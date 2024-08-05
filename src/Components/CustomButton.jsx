import React from 'react'

function CustomButton({ onClick, text, buttonStyle }) {

  return (
    <button 
        className={`p-2 rounded-lg w-[80%] h-[50px] text-xl poppins-semibold gradient-primary ${buttonStyle} active:opacity-70`}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default CustomButton