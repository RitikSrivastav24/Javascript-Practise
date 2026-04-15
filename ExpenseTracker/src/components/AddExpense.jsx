import React, { useState } from 'react'

function AddExpense({addTransaction}) {
    const [text,setText]= useState("");
    const [amount,setAmount]= useState("");
    const [type,setType]= useState("expense");
    const handleClick=(e)=>{
        e.preventDefault()
        const newData={
            text,
            amount:Number(amount),
            type
        }
        addTransaction(newData)
    }
    return (
        <>
            <form className='min-h-screen px-4 mx-auto max-w-md mt-10'
            onSubmit={handleClick}>
                {/* Expense Name */}
                <div className='mb-5'>
                    <input type="text" placeholder="Expense Name" className='w-full border-b-2 p-2 outline-none' required
                    onChange={(e)=>setText(e.target.value)}/>
                </div>

                {/* Amount */}
                <div className='mb-5'>
                    <input type="number" placeholder="Amount" className='w-full border-b-2 p-2 outline-none' required
                    onChange={(e)=>setAmount(e.target.value)}/>
                </div>

                {/* Type */}
                <div className='mb-5'>
                    <select className='w-full border-b-2 p-2 outline-none '
                    onChange={(e)=>setType(e.target.value)}>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                {/* Date */}
                <div className='mb-5'>
                    <input type="date" className='w-full border-b-2 p-2 outline-none' required/>
                </div>

                {/* Button */}
                <button className='w-full bg-blue-500 text-white p-2 rounded'
                type='submit'>
                    Add Transaction
                </button>
            </form>

        </>
    )
}

export default AddExpense