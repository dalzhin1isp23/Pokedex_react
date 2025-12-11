import React from 'react';
import { useForm } from 'react-hook-form';
import Galka from '../img/gal.png';
import '../css/reg.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import { InputText } from '../../widgets/input/InputText';

const Author = () => {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const { login } = useContext(AuthContext); 
  const navigate  = useNavigate()

 
  const onSubmit = (data) => {
    console.log('Форма отправлена:', data);
    
    login(data.login);
    navigate("/")
  };

  return (
    <div className="content">
      <form onSubmit={handleSubmit(onSubmit)} className="reg_ball">
       
        <div
          className="gran_fut"
          style={{
            backgroundColor: '#3d3d3d',
            top: '230px',
            position: 'fixed',
            width: '100%',
            height: '5px',
          }}
        ></div>

       <InputText 
        register={control.register} 
        id={'login'} 
        errors={errors} 
        validation={{ required: 'Логин обязателен' }}
        placeholder="Логин" />
              
        <input
          {...control.register('password', {
            required: 'Пароль обязателен',
            minLength: { value: 6, message: 'Минимум 6 символов' },
          })}
          type="password"
          placeholder="Пароль"
          className="text_reg"
          style={{ top: '180px', position: 'relative' }}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}

       
        <div
          className="mini_round"
          onClick={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'white',
            cursor: 'pointer',
            top: '70px',
            position: 'relative',
          }}
        >
          <img
            src={Galka}
            alt="Галочка"
            style={{ width: '40px', height: '40px' }}
          />
        </div>
      </form>
    </div>
  );
};

export default Author;  