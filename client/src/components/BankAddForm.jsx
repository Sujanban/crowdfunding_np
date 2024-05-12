import React from 'react'

const BankAddForm = ({ toggleAccountAdd, setToggleAccountAdd, handleBankAdd, setStripeAccount }) => {
    return (
            <div className='absolute popup top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 ring ring-blue-400 max-w-xl rounded-xl'>
                <div className=''>
                    <h1 className='pb-4 font-bold'>Payout Account</h1>
                    <div className='flex items-center space-x-4'>
                        <img className='h-20' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="" />
                        <div className=' p-4 pb-0 grid '>
                            <h1 className='pb-2'>Stripe account ID</h1>
                            <form className='grid' onSubmit={handleBankAdd}>
                                <input className='px-4 w-72 py-2 border rounded text-sm' type="text" onChange={(e) => setStripeAccount(e.target.value)} placeholder='acc_e6wb38n28byugy' />
                                <input className='my-2 shadow px-4 py-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 cursor-pointer rounded-xl text-sm' type="submit" value={'Add'} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default BankAddForm