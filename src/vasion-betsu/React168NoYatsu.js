import React, { Component, memo, useCallback, useRef } from 'react'

class Oya extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: 0
        }
        this.onClickUpCount = this.onClickUpCount.bind(this)
    }
    onClickUpCount() {
        this.setState(() => ({ clickCount: this.state.clickCount + 1 }))
    }
    render() {
        return (
            <div>
                私が親ですよ
                <button onClick={this.onClickUpCount}>up click count {this.state.clickCount}</button>
                <PerfoDekiru clickCount={this.state.clickCount} />
            </div>
        )
    }
}

const MemoizedPrintButton = memo(({ onClick }) => (
    <button onClick={onClick}>ホゲー</button>
))

const array1000 = Array.from({ length: 1000 }, (a, b) => a + b)
const PerfoDekiru = ({ clickCount }) => {
    const memoizedOnClickAre = useCallback(() => { console.log('print') }, [])
    return (
        <div>
            {array1000.map((el, i) => (
                <MemoizedPrintButton
                    // onClick={() => { console.log('print') }}
                    onClick={memoizedOnClickAre}
                    key={i}
                />
            ))}
            {clickCount}
        </div>
    )
}

const UseRefNoYatsu = () => {
    const ocnuRef = useRef(null)
    const onClickButton = () => {
        console.log('click', ocnuRef.current)
    }
    return (
        <div>
            <div ref={ocnuRef}>ocnu</div>
            <button onClick={onClickButton}>ref no button</button>
        </div>
    )
}

const React168NoYatsu = () => (
    <div style={{ paddingBottom: 200 }}>
        <h1>React16.8</h1>
        <h2>useCallback</h2>
        <Oya />
        <h2>useRef</h2>
        <UseRefNoYatsu />
    </div>
)

export default React168NoYatsu
