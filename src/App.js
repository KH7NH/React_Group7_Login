import LoginPage from "./Pages/LoginPage/loginPage";
import LogupPage from "./Pages/LogupPage/logupPage";
import HomePage from "./Pages/Homepage/homePage";
import { Route, Routes } from 'react-router-dom';

import './App.scss'
import ForgotPasswordPage from "./Pages/ForgotPasswordPage/forgotPasswordPage";
const App = (props) => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logup" element={<LogupPage/>} />
        <Route path='/forgotpassword' element={<ForgotPasswordPage/>}/>
      </Routes>
    </>

  );
}

export default App;
