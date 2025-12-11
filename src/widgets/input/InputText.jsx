import React from 'react'

export const InputText = (props)=>{
const {register, type = 'text', placeholder, validation,errors, id, style={}} =props

    return <div>
         <input
          {...register(id, validation)}
          type={type}
          placeholder={placeholder}
          className="text_reg"
          style={{ top: '60px', position: 'relative' , ...style}}
        />
        {errors[id] && <p style={{ color: 'red' }}>{errors[id].message}</p>}

    </div>
}