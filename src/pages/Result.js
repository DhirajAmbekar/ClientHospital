import React, { useState, useEffect , useContext } from 'react';
import Footer from '../component/Footer';
import { api } from '../Data/Api';
import Slider from './Sliders';
import { Context } from '../context/Context'

function Result() {
    const [Data, setData] = useState([])
    const [Data2, setData2] = useState([])
    const [Data3, setData3] = useState([])
    const {state} = useContext(Context)
    useEffect(() => {
        setData(api.results.amh)
        setData2(api.results.e2)
        setData3(api.results.fsh)
    }, [])

    return (
        <>
        <div className={state.count ===2? 'sup2': 'sup1'}>
            <div className='client-result'>
                <div className='result-title'>
                    Results
                </div>
                {/* <table> */}
                {/* <thead>
                <tr>
                <th>
                    Mini Test
                </th>
                </tr>
            </thead>
            <tbody>
               {
                Data.map((e,i)=>{
                    return(
                    <tr key={i}>
                        <td>{e.test} {e.full_test_name}</td>
                        <td></td>
                        <td>{e.value}{e.vale_in} <span>{e.status}</span></td>
                    </tr>
                    )
                })
               }
            </tbody>
        </table> */}
                <div className='mini-main'>
                    <div className='mini-test1'>
                        Mini Test
                    </div>  
                    <div className='mini-test2'>
                        <div className='mini-title'>
                            AMH
                        </div>
                        <div className='mini-bod'>
                        Anit-mullerian hormone
                        </div>
                        <div className='mini-final'>
                        <td>{Data.value} ng/mL </td>
                        <div>
                        <td className={
                                Data.value > 0 && Data.value < 2 ? "Below" : Data.value >= 2 && Data.value <= 4 ? "optio" : Data.value > 4 ? 'above ' : ""
                            }>
                                {Data.value > 0 && Data.value < 2 ?
                                    "Below Average"
                                    : Data.value >= 2 && Data.value <= 4 ? "Optimal"
                                        : Data.value > 4 ? 'Above Average'
                                            : ""}
                            </td>
                        </div> 
                        </div>
                    </div>
                    <div className='mini-test2'>
                        <div className='mini-title'>
                            E2
                        </div>
                        <div className='mini-bod'>
                        Estradiol 
                        </div>
                        <div className='mini-final'>
                        <td>{Data2.value} pg/mL </td>
                        <div>
                        <td className={
                                Data2.value > 0 && Data2.value < 20 ? "Below" : Data2.value >= 20 && Data2.value <= 50 ? "optio" : Data2.value > 50 ? 'above ' : ""
                            }>
                                {Data2.value > 0 && Data2.value < 20 ? "Below Average" : Data2.value >= 20 && Data2.value <= 50 ? "Optimal" : Data2.value > 50 ? 'Above Average' : ""}
                            </td>
                        </div> 
                        </div>
                    </div>
                    <div className='mini-test2'>
                        <div className='mini-title'>
                        FSH
                        </div>
                        <div className='mini-bod'>
                        Folllice-stimulating hormone
                        </div>
                        <div className='mini-final'>
                        <td>{Data3.value} mlU/ml </td>
                        <div>
                        <td className={
                                Data3.value > 0 && Data3.value < 2.5 ? "Below" : Data3.value >= 2.5 && Data3.value <= 12 ? "optio" : Data3.value > 12 ? 'above ' : ""
                            }>
                                {Data3.value > 0 && Data3.value < 2.5 ? "Below Average" : Data3.value >= 2.5 && Data3.value <= 12 ? "Optimal" : Data3.value > 12 ? 'Above Average' : ""}
                            </td>
                        </div> 
                        </div>
                    </div>
                </div>
               
            </div>
            <Footer/>
            </div>
        </>
    )
}

export default Result