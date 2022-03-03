import React from 'react'

export const Create = () => {
  return (
    <div>

        <form>
            
            <label>Your name</label><br/>
            <input type ="text" placeholder='enter your name' /><br/><br/>
            <label>Your Phone Number</label><br/>
            <input type ="text" placeholder='enter your mobile number' /><br/><br/>
            <label>Your age</label><br/>
            <input type ="number" placeholder='enter age' /><br/><br/>

            <button>Create Account</button>

        </form>
    </div>
  )
}
