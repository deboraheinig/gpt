import React from 'react'
import { Footer, Blog, Possibilities, Features, WhatGPT, Header} from './containers';
import { Cta, Brand, Navbar } from './components';
import './App.css'

export default function App() {
    return (
        <div className='App'>
            <div className='gradient_bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT/>
            <Features/>
            <Possibilities/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    )
}