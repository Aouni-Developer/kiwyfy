import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';

function App() {
  return (
   <>
<BrowserRouter>
    
       <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/SignupForm' element={<SignupForm />} />
       </Routes>
       <Routes>
       <Route path='/' element={<SignupForm />} />
        <Route path='/LoginForm' element={<LoginForm />} />
      
       </Routes>
      
    </BrowserRouter>
   </>
  );
}

export default App;
