import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Dashboared from './dashboard/Dashboard'
import Header from './components/Header/Header'
import SideMenu from './components/SideMenu/SideMenu'
import Login from './login/Login'
import Forgot from './forgotpassword/forgotpassword'


const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  const [currentForm, setCurrentForm] = useState('Login');
  
  const toggleForm = (formName: any) => {
    setCurrentForm(formName);
  };
  
  const renderForm = () => {
    switch (currentForm) {
      case 'Login':
        return <Login  onFormSwitch={toggleForm} />;
      case 'Forgot':
        return <Forgot  onFormSwitch={toggleForm} />;
      default:
        return null;
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header/>
      <SideMenu />
      {renderForm()}
      <Dashboared />
    </main>
  )
}


