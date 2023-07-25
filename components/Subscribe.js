'use client'

import Image from 'next/image';
import { Form } from 'react-bootstrap';
import subsciption from '../public/images/subsciption-bg.svg';
import subsciptionImg from '../public/images/subscribe-1.png';
import classes from '../styles/subscribe.module.scss';

const Subscribe = () => {
  return (
        <div id="subscribe" class={`${classes.subscribe}`}>
        <div class="subscribe-area">
            <div class="container">
                <div class={`${classes.subscibeAreaBox}`}>
                    <Image class={`${classes.subscribeBg}`} src={subsciption} alt="subscribe-bg"/>
                    <Image class={`${classes.subscribeCat}`} src={subsciptionImg} alt="subscribe-cat"/>
                    <div class={`${classes.subscribeBox}`}>
                        <div class={`${classes.subscribeContent}`}>
                            <h2>Subscribe to our Newsletter!</h2>
                            <div class={`${classes.subscribeFormBox}`}>
                                <Form.Control type="email" placeholder="Your Mail Here" />
                                <button class={`btn btn-dark d-none d-md-block`}>Subscribe</button>
                                <button class={`btn btn-dark d-md-none`}><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Subscribe