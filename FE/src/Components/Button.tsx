import React from 'react'

type buttonProps = {
     type: "button" | "submit",
     value: string,
     className: string
}

const Button = ({type,value,className}: buttonProps) => {
  return (
    <div>
        <input type={type} value={value} className={className}/>
    </div>
  )
}

export default Button