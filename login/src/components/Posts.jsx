import React from 'react'

export const Posts = () => {

  const [value, setvalue] = useState(second)
  return (
    <div>

      <input type ="text" placeholder='Post something' value ={value} 
      onChange={(e)=>setvalue(e.currentTarget.value)
      
      }/>
    </div>
  )
}
