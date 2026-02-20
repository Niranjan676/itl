import React from 'react'

function Invoice() {
  return (
    <div>   
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>INVOICE</h1>
        </div>
        <div className='bg-white m-2 max-w-full p-3 flex gap-4'>
            <div>
                <label className='mr-2 text-xl'>Invoice No</label>
                <input type='text' className='border border-gray-400 px-2 py-1 rounded-sm'></input>
            </div>
            <div>
                <label className='mr-2 text-xl'>Dated</label>
                <input type='date' className='border border-gray-400 px-2 py-1 rounded-sm'></input>
            </div>
            <div>
                <label className='mr-2 text-xl'>Purchase Order No</label>
                <input type='text' className='border border-gray-400 px-2 py-1 rounded-sm'></input>
            </div>
            <div>
                <label className='mr-2 text-xl'>Purchased Date</label>
                <input type='date' className='border border-gray-400 px-2 py-1 rounded-sm'></input>
            </div>
        </div>
    </div>
  )
}

export default Invoice
