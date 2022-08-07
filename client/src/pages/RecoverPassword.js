import React, { useState } from 'react'
import { EmailStep, CheckEmail, ResetPassword,SuccessReset } from '../component/index'

function RecoverPassword() {
    const [step, setStep] = useState(0);
    const [digits, setDigits] = useState(0);
    const [email, setEmail] = useState('');
    const setCount = (value) => {
        setStep(value);
    }

    const setMail = (value) => {
        setEmail(value);
    }

    const setDigit = (value) => {
        setDigits(value);
    }
    console.log(step);
    return (
        <>
            {
                step === 0 ? <EmailStep setCount={setCount} 
                                        setDigit={setDigit} 
                                        setMail={setMail} /> : 
                step === 1 ? <CheckEmail    setCount={setCount} 
                                            digits={digits} 
                                            email={email}/> : 
                step === 2 ? <ResetPassword email={email} 
                                            setCount={setCount}/> :
                <SuccessReset/>
            }
        </>

    )
}

export default RecoverPassword