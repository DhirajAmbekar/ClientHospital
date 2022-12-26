import React , {useContext} from 'react'
import { Context } from '../context/Context'
function Physics() {
  const {state} = useContext(Context)
  return (
    <>
    <div className={state.count ===8? 'sup2': 'sup1'}>
    <div className='physics'>
    <h6>
    Here’s a little about us
    </h6>
    <p>
    For far too long, women have been an afterthought, lacking accessible, affordable, and accurate information.
    </p>
    <p>
    We are on this journey to transform healthcare – from reactive to proactive, to a future that provides optionality and ownership and helps people with ovaries make informed choices for their bodies. Arva Health is built to make it easy for you to understand all aspects of your hormone health, and we're just getting started.
    </p>
    <p>
    Thank you for joining us as we co-create a new kind of health company for our friends, sisters, and future daughters. Think of us as your health companions, bringing you content, community, and ongoing education to give you the support you deserve.
    </p>
    <p>
    Welcome to the family!
    </p>
    <p>
    physician_sign
    </p>
    <div className='lowerphys'>
    Taking care of yourself is personal
    </div>
    </div>
    </div>

    </>
  )
}

export default Physics