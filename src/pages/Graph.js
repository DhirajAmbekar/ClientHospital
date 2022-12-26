import React, { useState,useContext, useEffect } from 'react'
import { api } from '../Data/Api'
import { Context } from '../context/Context'
function Graph() {
    const {state} = useContext(Context)
    const [final, Setfinal] = useState('')
    const [final3, Setfinal3] = useState('')
    const [final2, Setfinal2] = useState('')
    useEffect(() => {
        Setfinal(api.results.amh.value)
        Setfinal3(api.user_data.age)

    }, [])

    useEffect(() => {
        data()
    }, [final3])

    function data() {
        if (final3 === 25) {
            Setfinal2(50)
        }
        if (final3 === 26) {
            Setfinal2(100)
        }
        if (final3 === 27) {
            Setfinal2(150)
        }
        if (final3 === 28) {
            Setfinal2(200)
        }
        if (final3 === 29) {
            Setfinal2(250)
        }
        if (final3 === 30) {
            Setfinal2(300)
        }
        if (final3 === 31) {
            Setfinal2(350)
        }
        if (final3 === 32) {
            Setfinal2(400)
        }
        if (final3 > 32) {
            Setfinal2(400)
        }

    }
    console.log(final2)
    return (
        <>
         <div className={state.count ===4? 'sup2': 'sup1'}>
        <div className='s-graph'> 
        <div className='s2-graph'>
        <div className='main-graph1'>
                <h5>
                    {" Your AMH is "}
                    <span className={
                        final > 0 && final < 2 ? "Below" : final >= 2 && final <= 4 ? "optio" : final > 4 ? 'above ' : ""
                    }>
                        {final > 0 && final < 2 ?
                            "Below Average"
                            : final >= 2 && final <= 4 ? "Optimal"
                                : final > 4 ? 'Above Average'
                                    : ""}

                    </span>
                </h5>
                <div>
                This means: your AMH levels indicate that you have the average number of eggs for your age. Yay!
                </div>
            </div>
            <div>
                <h6>WHAT IS AMH?</h6>
                <div>
                AMH is produced by the granulosa cells in your ovarian follicles,
     meaning the tiny sacs in your ovaries that house and release eggs. The
    level of AMH our follicles create reflects the number of eggs you have
    “waiting in the wings.”
                </div>
            </div>
        </div>       
            
            <div className='main-chart'>
                <div className='top-high'>
                </div>
                <div className='high'>
                    Signs of PCOS
                </div>
                <div className='s-high'>
                    Slight High
                </div>
                <div className='optiomal'>
                    Optimal
                </div>
                <div className='s-low'>
                    Slight Low
                </div>
                <div className='low'>
                    Low
                </div>
                <div className='y-axios'>
                    <div className='ngml'>
                        ng/mL
                    </div>
                    <div className='y axios8'>
                        8
                    </div>
                    <div className='y axios7'>
                        7
                    </div>
                    <div className='y axios6'>
                        6
                    </div>
                    <div className='y axios5'>
                        5
                    </div>
                    <div className='y axios4'>
                        4
                    </div>
                    <div className='y axios3'>
                        3
                    </div>
                    <div className='y axios2'>
                        2
                    </div>
                    <div className='y axios1'>
                        1
                    </div>
                    <div className='y axios0'>
                        0
                    </div>
                </div>
                <div className='x-axios'>
                    <div>
                        25
                    </div>
                    <div>
                        26
                    </div>
                    <div>
                        27
                    </div>
                    <div>
                        28
                    </div>
                    <div>
                        29
                    </div>
                    <div>
                        30
                    </div>
                    <div>
                        31
                    </div>
                    <div>
                        32
                    </div>
                    <div>
                        Age
                    </div>
                </div>
                <div className='pointer-plot' style={{ bottom: `${final * 2}rem`, left: `${final2}px` }}>
                    <span>
                        {`${final}ng/mL`}
                    </span>
                </div>
                <div className='dotted-line' style={{ bottom: `${final * 2}rem` }}>
                </div>

            </div>
            <div>
                <h6>
                HEADS UP
                </h6>
                <div>
                Your AMH level will not tell you whether or not you’re fertile but can give you a better understanding of your reproductive health and help you plan for your future.
                </div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Graph