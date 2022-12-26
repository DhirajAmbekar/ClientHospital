import React, { useState, useContext } from 'react'
import Result from './Result'
import { Context } from '../context/Context'
function Sliders() {

    const { state, dispatch } = useContext(Context)

    function next() {
        if (state.count === 8) {
            dispatch(
                {
                    type: 'SHOWONE',
                    payload: 7,
                }
            )
        }
        else {

            dispatch(
                {
                    type: 'INCREMENT',
                    payload: 1,
                }
            )
        }

    }
    function prev() {
        if (state.count === 1) {
            dispatch(
                {
                    type: 'REVERCEORDER',
                    payload: 7,
                }
            )
        }
        else {
            dispatch(
                {
                    type: 'DECREMENT',
                    payload: 1,
                }
            )

        }


    }
    return (
        <>
            <div className='sup-user '>
                <div className='slider-main'>
                    <button onClick={prev} className="buton"><ion-icon name="chevron-back-outline"></ion-icon></button>
                    <div className='slider-num'>{state.count} / 8</div>
                    <button onClick={next} className="buton"><ion-icon name="chevron-forward-outline"></ion-icon></button>
                </div>
            </div>
        </>
    )
}


export default Sliders