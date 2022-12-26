import React, { useState, useEffect , useContext } from 'react'
import { api } from '../Data/Api'
import { Context } from '../context/Context'
import Slider from './Sliders'
function User() {
    const [Data, setData] = useState([])
    const [Data2, setData2] = useState([])
    const {state} = useContext(Context)
    console.log(state)
    useEffect(() => {
        setData(api.user_data)
        setData2(api.cover)
    }, [])
    console.log(Data)

    return (
        <>
            {/* <div className='main-user'>
            <div className='user-logo'>
                <div>Logo</div>
            </div>
            <div className='user_data'>
                 <div className="client-name">
                    Hey, {Data.name}.
                </div>
                <div className='client-test'>
                    You took the <span>{Data2.full_test_name}</span> on {Data.date}.
                </div> 
                <div>Here are your results.</div>
            </div>
            <div className='img-handler'>
                <img src='./asstes/Image1.png' className='img-test1' />
            </div>
        </div> */}
            <div className={state.count ===1? 'sup2': 'sup1'}>
                <div className='sup-user'>
                    <div className='container main-user'>
                        <div className='row-cols-12 '>
                            <div className='col user-logo'>
                                Logo
                            </div>
                        </div>

                        <div className='col client-name'>
                            Hey, {Data.name}.
                        </div>
                        <div className='col client-test'>
                            You took the <span>{Data2.full_test_name}</span> on {Data.date}. <br />
                            Here are your results.
                        </div>

                    </div>
                    <div className='row-cols-12'>
                        <div className='col img-handler'>
                            <img src="./asstes/Image1.png" className='img-test1' ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User