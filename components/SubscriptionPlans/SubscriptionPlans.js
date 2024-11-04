import React from 'react';
import classes from '../../styles/Home.module.css';
import Link from 'next/link';

const SubscriptionPlans = () => {
    return (
        <div className={`${classes['subscription-plans-sec-wrap']}`}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='common-heading'>
                            <h5>Choose the right plan for your medical needs</h5>
                            <h2>Flexible Subscription Plans</h2>
                            <p>Choose a plan that suits your healthcare needs. With daily, weekly, and monthly options, DocTel offers flexibility and affordability to ensure you <br></br> always have access to medical care when you need it.</p>
                        </div>
                    </div>
                    <div className={`${classes['subscription-plans-wrap']}`}>
                        <ul className='clearfix reset-list'>
                            <li>
                                <div className={`${classes['subscription-plans-grid']}`}>
                                    <span>Daily Plan</span>
                                    <strong>৳15 <sub>day</sub></strong>
                                    <ul className='clearfix reset-list'>
                                        <li>1 Video / Audio call</li>
                                        <li>Unlimited Chat for 24  hours</li>
                                        <li>E-Prescription Download</li>
                                    </ul>
                                    <Link href='#'>Get Started</Link>
                                </div>
                            </li>
                            <li>
                                <div className={`${classes['subscription-plans-grid']}`}>
                                    <span>Daily Plan</span>
                                    <strong>৳15 <sub>day</sub></strong>
                                    <ul className='clearfix reset-list'>
                                        <li>1 Video / Audio call</li>
                                        <li>Unlimited Chat for 24  hours</li>
                                        <li>E-Prescription Download</li>
                                    </ul>
                                    <Link href='#'><span>Get Started</span></Link>
                                </div>
                            </li>
                            <li>
                                <div className={`${classes['subscription-plans-grid']}`}>
                                    <span>Daily Plan</span>
                                    <strong>৳15 <sub>day</sub></strong>
                                    <ul className='clearfix reset-list'>
                                        <li>1 Video / Audio call</li>
                                        <li>Unlimited Chat for 24  hours</li>
                                        <li>E-Prescription Download</li>
                                    </ul>
                                    <Link href='#'>Get Started</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscriptionPlans;