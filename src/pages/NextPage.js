import React, { useContext } from 'react'
import Footer from '../component/Footer'
import Slider from './Sliders';
import { Context } from '../context/Context';
function NextPage() {
    const { state } = useContext(Context)
    return (
        <>
            <div className={state.count === 6 ? 'sup2' : 'sup1'}>
                <div className='main-nextstep'>
                    <h3>Next steps</h3>
                    <div className='inner-nextstep'>
                        <button>Follow-up</button>
                        <h6>Talk to an OB-GYN about signs of PCOS</h6>
                        <div className='iner-pcos'>
                            Are you experiencing irregular periods, weight fluctuations, oily skin or acne, and hair growth typically in places like the face, chest, and back? A PCOS diagnosis is two fold: (1) getting your hormones checked (2) an ultrasound.
                        </div>
                        <div className='d-flex my-4'>
                            <div className='img-handlerinnext'>
                                <img src="./asstes/Image2.png" className='next-img'></img>
                            </div>
                            <div className=" taker-inner">
                                Take our
                                <span>
                                    Reproductive Hormone Test
                                </span>
                                to get a holistic picture of PCOS. We look at androgens like Free Testosterone, your sensitivity to Insulin, egg and follicle growth with the FSH:LH ratio, and how your thyroid is functioning.
                            </div>
                        </div>
                    </div>
                    <div className="stayprotect">
                        <button>Stay proactive</button>
                        <h6>Get tested every 6-12 months</h6>
                        <div className='iner-pcos'>
                            You just found your AMH baseline. As you get older, your AMH and egg count decline. Testing your AMH at least once every 12 months helps you see how your levels are trending over time and gives you more data as you map out your timeline if you’re thinking about having kids in the future or freezing your eggs.
                        </div>
                    </div>
                    <div className="stayprotect">
                        <button style={{ backgroundColor: "#daefd6" }}>Build rituals</button>
                        <h6>Create a routine to take care of your body</h6>
                        <div className='iner-pcos'>
                            Imbalances in our hormones can be managed by ‘lifestyle management’ which is nourishing the key pillars of health: sleep, nutrition, movement, and mindfulness. Easy to say, hard to implement. Build rituals to take care of your body, and your hormones will follow. “Tiny changes. Remarkable results.”
                        </div>
                    </div>
                </div>
                <Footer />

            </div>


        </>
    )
}

export default NextPage