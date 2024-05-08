import React from 'react';
import "./Subscription.css"
import { useTheme } from '../../contexts/Theme'

const Subscription = () => {
  const { isDarkMode} = useTheme();
  return (
    <div className={isDarkMode? "subscr-dark text-center p-5 text-black" : 'subscr text-center p-5 text-black'}>
      <h1 className=''>Deliciousness<br/> to your Inbox</h1>
      <p className=''>Enjoy weekly hand picked recipes and recommendations</p>
      
      <form action="" className={isDarkMode? 'sub-form my-3 border mx-auto  p-1 subscr-dark': "sub-form m-3 border w-50 mx-auto p-1"}>
        <input type="email" name="email" className={isDarkMode? "email bg-transparent placeholder-dark":"email bg-transparent"} placeholder='example@gmail.com' />
        <input type="submit" value="JOIN" className='text-white p-1 px-3' />
        </form>
        <small className='sub-text'>By joining our newsletter you agree to our <span className='text-decoration-underline'>Term And Conditions.</span></small>
    </div>
  )
}

export default Subscription
