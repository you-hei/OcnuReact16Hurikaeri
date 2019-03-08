import React, { Component, PureComponent } from 'react'

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
                    <PrintButton
                        onClick={() => { console.log('print') }}
                        // onClick={this.onClickAre}
                        key={i}
                    />
                ))}
                {this.props.clickCount}
            </div>
        )
    }
}

const React165NoYatsu = () => (
    <div>
        <h1>React16.5</h1>
        <h2>Profilerが見れるよ</h2>
        <Oya />
    </div>
)

export default React165NoYatsu
