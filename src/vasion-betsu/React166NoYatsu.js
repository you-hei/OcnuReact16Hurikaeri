import React, { Component, PureComponent, memo, lazy, Suspense } from 'react'

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

class PrintButton extends PureComponent {
    render() {
        const { onClick } = this.props
        return (
            <button onClick={onClick}>ホゲー</button>
        )
    }
}

const MemoizedPrintButton = memo(({ onClick }) => (
    <button onClick={onClick}>ホゲー</button>
))

class PerfoDekiru extends Component {
    constructor(props) {
        super(props)
        this.ar = Array.from({ length: 1000 }, (a, b) => a + b)
        this.onClickAre = this.onClickAre.bind(this)
    }
    onClickAre() {
        console.log('print')
    }
    render() {
        return (
            <div>
                {this.ar.map((el, i) => (
                    <MemoizedPrintButton
                        // onClick={() => { console.log('print') }}
                        onClick={this.onClickAre}
                        key={i}
                    />
                ))}
                {this.props.clickCount}
            </div>
        )
    }
}

/////////////////////// contextType ///////////////////////
const OcnuContext = React.createContext({ color: 'black' })
class Toire extends Component {
    constructor(props) {
        super(props)
        this.state = { color: 'brown' }
        this.onClickToggleOcnuColor = this.onClickToggleOcnuColor.bind(this)
    }
    onClickToggleOcnuColor() {
        this.setState(() => ({
            color: this.state.color === 'brown' ? 'green' : 'brown'
        }))
    }
    render() {
        return (
            <OcnuContext.Provider value={this.state}>
                <Benki />
                <button onClick={this.onClickToggleOcnuColor}>
                    toggle ocnu color
                </button>
            </OcnuContext.Provider>
        )
    }
}
const Benki = () => (
    <div>
        <OcnuBody />
    </div>
)
class OcnuBody extends Component {
    static contextType = OcnuContext
    render() {
        const ocnu = this.context
        return (
            <div>
                <span style={{ color: ocnu.color }}>
                    I am Ocnu! my color is {ocnu.color}
                </span>
            </div>
        )
    }
}

const React166NoYatsu = () => (
    <div style={{ paddingBottom: 200 }}>
        <h1>React16.6</h1>
        <h2>memo</h2>
        <Oya />
        <h2>contextType</h2>
        <Toire />
    </div>
)

export default React166NoYatsu
