import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './Redox/slice/createSlice'


function Counter() {


  const count = useSelector((state)=>state.counterReducer.count)
  const dispatch = useDispatch()
  const[amount,setAmount] = useState("")
  console.log(amount);

  const handleIncrement =() =>{
    if(amount == ""){
      alert('provide an input')
    }else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }
  
  return (
    <>
      <div>
        <h1 className='text-center mt-5 text-primary'>Counter-application</h1>
        <div className="container border border-dark mt-2 p-5 rounded w-50">

          <h1 className='text-center'>{count}</h1>
          <div className='d-flex justify-content-around mt-3'>

            <Button variant="success" onClick={()=>dispatch(increment())}>increment</Button>
            <Button variant="danger" onClick={()=>dispatch(decrement())}>decrement</Button>
            <Button variant="warning" onClick={()=>dispatch(reset())}>reset</Button>


          </div>

          <div className='d-flex mt-5 p-3'>

        <input type="text" className='form-control' placeholder='enter amount' value={amount || ""} onChange={e=>setAmount(e.target.value)}/>
        <Button className='btn btn-primary m-2' onClick={handleIncrement}>Increment By Amount</Button>

          </div>



        </div>





      </div>

    </>
  )
}

export default Counter
