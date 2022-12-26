import React, { useState, useEffect , useContext } from 'react'
import { api } from '../Data/Api';
import { Context } from '../context/Context';
function LinearGraph() {
    const [num, setnum] = useState('')
    const [Num2, Setnum2] = useState('')
    const {state} = useContext(Context)
    useEffect(() => {
        setnum(api.results.fsh.value)
        Setnum2(api.results.e2.value)
        // setnum(data)
    }, [])

    return (
        <>
        <div className={state.count ===5? 'sup2': 'sup1'}>
            <div className='main-abbe'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='fsh-aboveaverage'>
                            <h5 className='fsh-inner'>Your FSH Is <span className={

                                num > 0 && num < 2.5 ? "Below" : num >= 2.5 && num <= 12 ? "optio" : num > 12 ? 'above ' : ""

                            }>
                                {num > 0 && num < 2.5 ? "Below Average" : num >= 2.5 && num <= 12 ? "Optimal" : num > 12 ? 'Above Average' : ""}

                            </span></h5>
                            <div className='fsh-inner2'>
                                A high FSH in isolation is not very concerning if your AMH level is "normal." We recommend getting tested again in 3 months.
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-w-is-fsh'>
                            <div className='w-is-fsh'>
                                WHAT IS FSH?
                            </div>
                            <div>
                                FSH is responsible for growing follicles and starting ovulation. It is an indirect measurement of your ovarian reserve. If your FSH is persistently high, then that may indicate ovarian aging.
                            </div>
                        </div>
                    </div>

                    

                </div>
                <div className='main-linear'>
                        <div className='inner-linear'>
                            <span className='linear-zero'>0</span>
                            <div className='inner-linear-normal'>
                                <span className='linear-two'>2.5</span>
                                <span className='linear-normal'>Normal</span>
                                <span className='linear-twelve'>12</span>
                            </div>
                        </div>
                        <div className='main-ploter' style={{ left: `${num * 4.3}%` }}>
                            <div className='inner-ploter'>

                            </div>
                            <span className='pgml'>{num}mlu/mL</span>
                        </div>
                        <span className='linear-tt'>22</span>
                    </div>
            </div>
            <div className=' main-abbe1'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='fsh-aboveaverage'>
                            <h5 className='fsh-inner'>Your E2 is  <span className={

                               Num2 > 0 && Num2 < 20 ? "Below" : Num2 >= 20 && Num2 <= 50 ? "optio" : Num2 > 50 ? 'above ' : ""

                            }>
                                {Num2 > 0 && Num2 < 20 ? "Below Average" : Num2 >= 20 && Num2 <= 50 ? "Optimal" : Num2 > 50 ? 'Above Average' : ""}

                            </span></h5>
                            <div className='fsh-inner2'>
                            Lorem ipsum dolor
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-w-is-fsh'>
                            <div className='w-is-fsh'>
                            WHAT IS E2?
                            </div>
                            <div>
                            E2 is a sex hormone produced by the ovaries. Since high E2 can mask a high FSH, we test these hormones together.
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className='main-linear-e2'>
                        <div className='inner-linear-e2'>
                            <span className='linear-zero'>0</span>
                            <div className='inner-linear-normal-e2'>
                                <span className='linear-zero'>20</span>
                                <span className='linear-normal'>Normal</span>
                                <span className='linear-tt'>50</span>
                            </div>
                            <span className='linear-tt'>80</span>
                        </div>
                        <div className='main-ploter' style={{ left: `${Num2}%` }}>

                            <div className='inner-ploter'>

                            </div>
                            <span className='pgml'>{Num2}pg/mL</span>
                        </div>

                        <span className='linear-tt'>100</span>
                    </div>
            </div>
            </div>
        </>
    )
}

export default LinearGraph