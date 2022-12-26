import React, {useContext} from 'react'
import { Context } from '../context/Context'

function Ovarian() {
    const {state} = useContext(Context)
    return (
        <>
        <div className={state.count ===3? 'sup2': 'sup1'}>
            <div className='main_ovarian'>
                <div className='ovarian'>
                    <h4>Ovarian Reserve</h4>
                    <p>Think of your ovarian reserve as a basket of eggs. We’re typically born with a basket full of eggs, and every month, one mature egg is formed and released. By the time we reach the end of our reproductive window, also known as menopause, the basket is nearly empty.</p>
                    <p>
                        Ovarian reserve testing, like this one, gives you an indication of the quantity (how many eggs you have left), not the quality. Cool, right?
                    </p>
                    <p>
                        When tracked over time, this testing helps us understand our fertility timelines which are as unique as our metabolisms.
                    </p>
                </div>
                <div className='understand'>
                    <h6>
                        Understanding your results
                    </h6>
                    <div>
                        For a holistic view of ovarian reserve, physicians recommend measuring all of the fertility hormones — AMH, FSH, and E2 — on day three of your cycle. AMH is the most crucial hormone for measuring Ovarian Reserve over time, but we also look at FSH and E2 for clues on how ovarian reserve changes.
                    </div>
                </div>
                <div>
                    <div className='reserve'>
                        <div className='inner-res'>
                        <div className='res1'>OVARIAN RESERVE</div>
                        <div className='re2'>Your Overian Reserve hormones, AMH, FSH, and E2 indicates you may have the
                        <span> average number of eggs for your age</span>
                         </div>
                       
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Ovarian