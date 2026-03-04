import React from 'react'

function InvoiceHeader() {
  return (
    <div className='bg-slate-50 w-full max-h-screen rounded-l'>

      {/* Company Info */}
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Industrial Trades & Lubes</h1>
        <p>No: 45/9th St, Katpadi, Vellore - 632007</p>
        <p>GSTIN: 33HEAPS1665L1Z5</p>
      </div>
    </div>  
  )
}

export default InvoiceHeader