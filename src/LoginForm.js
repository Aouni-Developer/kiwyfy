import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './kiwify.png';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (!e.target.value.includes('@')) {
      setEmailError('O e-mail deve ser válido');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('mật khẩu phải có độ dài ít nhất 6 ký tự');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailError || passwordError) {
      alert('Vui lòng sửa lỗi trước khi gửi');
    } else {
     
    }
  };

  return (
    <>
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
    <div className='sm:mx-auto sm:w-full sm:max-w-md'> 
  <img src={logo} alt="kiwify" className='mx-auto h-12 w-auto'/>
  <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Entrar na sua conta</h2>
  <p className='mt-2 text-center text-base leading-5 text-gray-600'>Ou <Link to="/SignupForm" className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>fazer cadastro</Link></p>
</div>
<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
<form onSubmit={handleSubmit} className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      
      <div>
        <label htmlFor="email" className='block text-sm font-medium leading-5 mb-1 text-gray-700'>E-mail</label>
        <input className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <div className="text-xs text-red-500">{emailError}</div>}
      </div>
      <div className='mt-6'>
        <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Senha</label>
        <input
        className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <div className="text-xs text-red-500">{passwordError}</div>}
      </div>
     <div className='mt-2 flex items-center justify-end'>
     <div className='text-sm leading-5'>
        <a href="/forgot-password" className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'> Esqueceu a senha?</a>
      </div>
     </div>
    <div className='mt-6'>
<span className='class="block w-full rounded-md shadow-sm'></span>
    <button type="submit" className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'>Entrar</button>
    </div>
     
    </form>
    


</div>


    </div>

    </>
  
  );
};

export default LoginForm;
