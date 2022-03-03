import React from 'react'

export const Login = () => {
  return (
    <div>
        <form>
            <label>Enter email</label><br/>
            <input type ="text" placeholder='enter email' /><br/><br/>
            <label>password</label><br/>
            <input type="password" placeholder='enter password' /><br/><br/>

            <button>Submit</button>

        </form>
    </div>
  )
}
