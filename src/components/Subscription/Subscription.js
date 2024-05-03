import React from 'react';
import "./Subscription.css"

const Subscription = () => {
  return (
    <div className='subscr text-center p-5 text-black'>
      <h1 className=''>Deliciousness<br/> to your Inbox</h1>
      <p className=''>Enjoy weekly hand picked recipes and recommendations</p>
      
      <form action="" className='sub-form m-3 border w-25 mx-auto p-1'>
        <input type="email" name="email" className="email" placeholder='example@gmail.com' />
        <input type="submit" value="JOIN" className='text-white p-1 px-3' />
        </form>
        <small className='sub-text'>By joining our newsletter you agree to our <span className='text-decoration-underline'>Term And Conditions.</span></small>
    </div>
  )
}

export default Subscription
