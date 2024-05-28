import React from 'react'

const BankAddForm = ({ toggleAccountAdd, setToggleAccountAdd, handleBankAdd, setStripeAccount }) => {
    return (
        <div className='w-full transition-opacity  backdrop-blur-sm bg-black bg-opacity-80 h-full fixed top-0 left-0 z-50 flex justify-center items-center'>
            
            <div onClick={() => setToggleAccountAdd(false)} className='absolute top-4 right-4 p-2 cursor-pointer rounded-full bg-gray-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
            
            <div className='popup bg-white w-[600px] p-4 max-w-md text-center rounded-xl shadow-xl '>
                <h1 className='pt-4 font-bold'>Payout Account</h1>
                <div className='w-full md:flex items-center space-x-4'>
                    <img className='w-32' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="" />
                    <div className='flex-grow p-4 pb-0 grid'>
                        <h1 className='pb-2 text-left'>Stripe account ID</h1>
                        <form className='grid' onSubmit={handleBankAdd}>
                            <input className='px-4 w-60 py-2 border rounded text-sm' type="text" onChange={(e) => setStripeAccount(e.target.value)} placeholder='acc_e6wb38n28byugy' />
                            <input className='my-2 shadow px-4 py-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 cursor-pointer rounded-xl text-sm' type="submit" value={'Add'} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BankAddForm