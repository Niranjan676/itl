import React, { useState } from 'react'

function CreateInvoice() {
    const [items, setItems] = useState([{itemname: "", itemcode: "", partno: "", hsncode: "", Qty: 1, unitrate: 0}])

    const addItem = () =>{
        setItems([...items, {itemname: "", itemcode: "", partno: "", hsncode: "", Qty: 1, unitrate: 0}])
    }

    const deleteItem = (index) =>{
        const update = items.filter((_, i)=> i !== index)
        setItems(update)
    }

  return (
    <div className='bg-slate-200 w-full min-h-screen p-4'>
        <div className='text-center mb-3'>
            <h1 className='text-xl font-bold'>Invoice</h1>
        </div>
        {/* Invoice Info */}
        <div className='grid grid-cols-4 gap-3'>
            <input type='text' placeholder='Invoice No' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
            <input type='date' placeholder='Invoice Date' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
            <input type='text' placeholder='Purchase Order No' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
            <input type='date' placeholder='Purchase Order Date' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
            <input type='text' placeholder='Transportation Mode' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
            <input type='text' placeholder='Vehicle No' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
            <input type='text' placeholder='Place of Supply' className='text-l p-2 font-bold rounded-m border border-gray-300 hover:border-blue-600 outline-none'></input>
        </div>
        <div className='bg-white w-full mt-5'>
            <table className='w-full table-fixed'>
                <thead>
                    <tr>
                        <th className="border">S. No</th>
                        <th className="border">Description of Goods</th>
                        <th className="border">Item Code</th>
                        <th className="border">Part No</th>
                        <th className="border">HSN Code</th>
                        <th className="border">Qty</th>
                        <th className="border">Unit Rate</th>
                        <th className="border">Total Amount</th>
                        <th className="border"></th>
                        <th className="border"></th>
                    </tr>
                </thead>
                <tbody>
                        {items.map((item, idx)=>(
                        <tr key={idx}>
                            <td className="border text-center">{idx + 1}</td>
                            <td className="border px-2 py-1"><input type='text' className='outline-none w-20' /></td>
                            <td className="border px-2 py-1"><input type='text' className='outline-none w-20' /></td>
                            <td className="border px-2 py-1"><input type='text' className='outline-none w-20' /></td>
                            <td className="border px-2 py-1"><input type='text' className='outline-none w-20' /></td>
                            <td className="border px-2 py-1"><input type='text' className='outline-none w-20' /></td>
                            <td className="border px-2 py-1"><input type='text' className='outline-none w-20' /></td>
                            <td className="border px-2 py-1"><input className='outline-none w-20' value={(item.qty * item.unitrate) || ""} /></td>
                            <td className="border px-2 py-1 text-center"><button className='bg-cyan-400 px-2 py-1 rounded-lg text-white' onClick={addItem}>Add Item</button></td>
                            <td className="border px-2 py-1 text-center"><button className='bg-cyan-400 px-2 py-1 rounded-lg text-white' onClick={()=>deleteItem(idx)}>Delete Item</button></td>
                        </tr>
                        ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default CreateInvoice