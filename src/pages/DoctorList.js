import React, { useState, useEffect, useContext } from 'react'
import { DrList } from '../Data/Api';
import { Context } from '../context/Context';

function DoctorList() {

    const [data, setdata] = useState([])
    const { state } = useContext(Context)

    useEffect(() => {
        setdata(DrList)
    }, [])


    return (
        <>
            <div className={state.count === 7 ? 'sup2' : 'sup1'}>
                <div className='senior-dev'>
                    <div className='main-develop'>

                        <div className="inner-develop1 row">
                            <h5>Developed with the best doctors.</h5>
                            {
                                data.map((e, i) => {
                                    return (
                                        <div className='col-6 single-inner-developer' key={i}>
                                            <div className='row'>
                                                <div className='col-3 dev'>
                                                    <img src={e.url} className="dev-img"></img>
                                                </div>
                                                <div className='col-9  dev'>
                                                    <b>{e.name}</b>
                                                    <div>{e.rol}</div>
                                                </div>
                                            </div>
                                            <div className='col-12 dev-2'>
                                                {e.detail}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='inner-dev2 '>
                            <div className='inner-developer2'>
                                <div className='col-2 '>
                                    <div className='in-inner-dev2'>
                                        <ion-icon name="chatbubble-outline" className="inner-icon"></ion-icon>
                                    </div>
                                </div>
                                <b className='inner-feed'>
                                    Give us feedback
                                </b>
                                <div className='pgl'>
                                    We’re all ears, and we want to hear your honest feedback. Tell us how we can improve.
                                </div>
                            </div>
                            <div className='inner-developer2'>
                                <div className='col-1'>
                                    <div className='in-inner-dev3'>
                                        <ion-icon name="heart-outline"></ion-icon>
                                    </div>
                                </div>
                                <b className='inner-friend'>
                                    Refer your friends
                                </b>
                                <div className='pgl'>
                                    As a pioneer, you have exclusive access to invite your friends, sisters, and daughters. If we don't take care of each other, who will?
                                </div>
                                <button className='btn-inner-dev3'>
                                    SUMER10
                                </button>
                            </div>

                        </div>

                    </div>
                    <div className='main-botm'>
                    <div className='botm'>
                        Your results were processed by 
                        '{'Company Name'}'
                    and were approved by an our physician. The tests do not predict fertility, or diagnose PCOS and Thyroid issues. They serve as an important data point in understanding fertility and overall health and are meant to facilitate a conversation with a healthcare provider.
                    </div>
                    <div style={{color: 'white', fontweight: 400}}>
                        company.in
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoctorList