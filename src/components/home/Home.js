import React from 'react';
import Section from '../section/Section';
import {wrapper,title,text,main} from './Home.module.css';

const Home = () => {
    return(
        <main className={main}>
            <Section>
                <div className={wrapper}>
                    <h1 className={title}>
                        Welcome to PhoneBook APP
                    </h1>
                    <p className={text}>You can keep/save/update your current contact list!</p>
                    <p className={text}>To use the application,please register first with our menu</p>
                </div>
            </Section>
        </main>
    )
};

export default Home;

