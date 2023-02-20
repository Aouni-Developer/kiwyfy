import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './kiwify.png';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'repeatEmail':
        setRepeatEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'isChecked':
        setIsChecked(!isChecked);
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;
    if (!email) {
      isValid = false;
      errors['email'] = ' enter your email.';
    }
    if (typeof email !== 'undefined') {
      let pattern = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (!pattern.test(email)) {
        isValid = false;
        errors['email'] = 'Esse campo é obrigatório';
      }
    }
    if (!repeatEmail) {
      isValid = false;
      errors['repeatEmail'] = ' repeat your email.';
    }
    if (typeof repeatEmail !== 'undefined') {
      if (email !== repeatEmail) {
        isValid = false;
        errors['repeatEmail'] = 'Os dois e-mails devem ser iguais.';
      }
    }
    if (!password) {
      isValid = false;
      errors['password'] = ' enter your password.';
    }
    if (typeof password !== 'undefined') {
      if (password.length < 4) {
        isValid = false;
        errors['password'] = 'Esse campo é obrigatório';
      }
    }
    if (!isChecked) {
      isValid = false;
      errors['isChecked'] = 'Please accept';
    }
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Signup form submitted');
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
 <div className='sm:mx-auto sm:w-full sm:max-w-md'> 
  <img src={logo} alt="kiwify" className='mx-auto h-12 w-auto'/>
  <h2 className='mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900'>Criar nova conta</h2>
  <p className='mt-2 text-center text-base leading-5 text-gray-600'>Ou <Link to="/LoginForm" className='font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150'>entrar na sua conta existente</Link></p>
</div>
<div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
<form onSubmit={handleSubmit} className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <div>
        <label htmlFor="email" className='block text-sm font-medium leading-5 mb-1 text-gray-700'>E-mail</label>
        <input
         className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {errors.email && <p className='text-xs text-red-500'>{errors.email}</p>}
      </div>
      <div className='mt-6'>
        <label htmlFor="repeatEmail" className='block text-sm font-medium leading-5 mb-1 text-gray-700'>Repetir e-mail</label>
        <input
        className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
          type="email"
          id="repeatEmail"
          name="repeatEmail"
          value={repeatEmail}
          onChange={handleInputChange}
        />
        {errors.repeatEmail && <p className='text-xs text-red-500'>{errors.repeatEmail}</p>}
      </div>
      <div className='mt-6'>
        <label htmlFor="password" className='block text-sm font-medium leading-5 text-gray-700'>Senha</label>
        <input
        className='form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full'
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {errors.password && <p className='text-xs text-red-500'>{errors.password}</p>}
      </div>
      <div className='mt-6'>
      <label  className='relative flex items-start mt-2' htmlFor="isChecked">
       <div className='flex items-center h-5'>
       <input
        className='form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer'
          type="checkbox"
          id="isChecked"
          name="isChecked"
          checked={isChecked}
          onChange={handleInputChange}
        />
   {/* {errors.isChecked && <p>{errors.isChecked}</p>} */}
       </div>
       <div className='ml-2 text-sm leading-5'>
<span className='font-medium text-gray-700'>
Eu li e aceito os <a href='#' className='underline'> termos de uso</a>,<a href='#' className='underline'>  termos de licença de uso de software</a>, <a href='#' className='underline'> política de conteúdo</a>da kiwify
</span>
       </div>

       
     
        </label>
</div>
<div className='mt-6'>
<span className='class="block w-full rounded-md shadow-sm'></span>
    <button type="submit" className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'> Criar conta  </button>
    </div>
</form>

</div>
 

    </div>
   
);
};

export default SignupForm;
