import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";


const Faq = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const faq = [
        {
            "question": "What is crowdfunding?",
            "answer": "Crowdfunding is a method of raising funds for projects, ventures, or causes by collecting small amounts of money from a large number of people, typically via an online platform."
        },
        {
            "question": "How does crowdfunding work?",
            "answer": "Individuals or organizations create campaigns on our platform, detailing their project, its goals, and how much funding they need. People who support the project, known as backers, can contribute financially in exchange for rewards or simply to support the cause."
        },
        {
            "question": "How do I start a campaign?",
            "answer": "To start a campaign, simply sign up on our platform and follow the steps to create a project. You'll need to provide details about your project, funding goals, timeline, and any rewards you'll offer to backers."
        },
        {
            "question": "Is there a fee to use the platform?",
            "answer": "Yes, there is typically a fee associated with using our platform to host your campaign. This fee helps cover the costs of running the website, payment processing, and providing support to campaign creators."
        },
        {
            "question": "How do I know if a campaign is legitimate?",
            "answer": "While we strive to vet campaigns to the best of our ability, it's essential for backers to exercise caution and do their own research before supporting a project. Look for campaigns with clear goals, detailed plans, and transparent communication from the project creator."
        }
    ]

    return (
        <div className='px-4 py-20 mx-auto max-w-5xl'>
            <h1 className='relative px-4 text-3xl'>Frequently Asked Questions <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <p className='py-4'>Have another question? Email us at <a className='underline' href="mailto:bansujan@gmail.com">bansujan@gmail.com</a> </p>
            <div className=' ma-w-5xl mx-auto'>
                
                
                {
                    faq && faq.map((item, index) =>
                        <div className='p-4 border-b border-b-green-800'>
                            <div 
                            onClick={handleOpen}
                            key={index} 
                            className='p-4 flex justify-between items-center'>
                                <h1 className='text-2xl '>{item.question}</h1><IoIosArrowDown size={25} />
                            </div>
                            {
                                open && <p className='p-4 text-slate-600'>{item.answer}</p>
                            }
                            {/* <p className='p-4 text-slate-600'>{item.answer}</p> */}
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Faq