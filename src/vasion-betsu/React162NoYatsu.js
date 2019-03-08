import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const FragmentsDekiru = () => (
    <React.Fragment>
        <div>こ１</div>
        <div>こ２</div>
        <div>こ３</div>
    </React.Fragment>
)

const FragmentsDekiru2 = () => (
    <>
        <div>こ2222１</div>
        <div>こ2222２</div>
        <div>こ2222３</div>
    </>
)

const React162NoYatsu = () => (
    <div>
        <h1>React16.2</h1>
        <h2>Fragments</h2>
        <FragmentsDekiru />
        <FragmentsDekiru2 />
    </div>
)

export default React162NoYatsu
