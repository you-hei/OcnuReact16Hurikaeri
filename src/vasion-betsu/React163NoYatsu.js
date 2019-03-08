import React, { Component } from 'react'

////////////  createRefAPI ///////////////////
class CreateRefDekiru extends Component {
    constructor(props) {
        super(props)
        this.buttonRef = React.createRef()
    }

    componentDidMount() {
        console.log(this.buttonRef.current)
        this.buttonRef.current.addEventListener('click', () => { console.log('ugogog') })
    }

    render() {
        return (
            <button ref={this.buttonRef}>createRefButton</button>
        )
    }
}

////////////  ContextAPI ///////////////////
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
const OcnuBody = () => (
    <OcnuContext.Consumer>
        {ctx => <span style={{ color: ctx.color }}>I am Ocnu! my color is {ctx.color}</span>}
    </OcnuContext.Consumer>
)

////////////  forwardRefAPI ///////////////////
const ForwardRefDekiruButton = React.forwardRef((props, ref) => (
    <button ref={ref}>Refできる</button>
))
const ForwardRefDekinaiButton = ({ ref }) => (
    <button ref={ref}>Refできなーい</button>
)
class ForwardRefTameshiTai extends Component {
    constructor(props) {
        super(props)
        this.dekiruRef = React.createRef()
        this.dekinaiRef = React.createRef()
    }
    componentDidMount() {
        console.log('できるはず', this.dekiruRef.current)
        console.log('できないはず', this.dekinaiRef.current)
    }
    render() {
        return(
            <div>
                <ForwardRefDekiruButton ref={this.dekiruRef} />
                <ForwardRefDekinaiButton ref={this.dekinaiRef} />
            </div>
        )
    }
}

////////////  ライフサイクル ///////////////////
class LifeCycleTamehsitai extends Component {
    constructor(props) {
        super(props)
        this.state = { ocnu_count: 12 }
        this.onClickButton = this.onClickButton.bind(this)
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }
    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps')
    }
    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log('UNSAFE_componentWillReceiveProps')
    }
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate')
    }
    UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('UNSAFE_componentWillUpdate')
    }
    // static getDerivedStateFromProps() {
    //     // これ読んだら古いやつは呼ばれなくなるぽい
    //     console.log('getDerivedStateFromProps')
    //     return null
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // これ読んだら古いやつは呼ばれなくなるぽい
    //     console.log('getSnapshotBeforeUpdate')
    //     return 'unchi'
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', snapshot)
    }

    onClickButton() {
        this.setState(() => ({ ocnu_count: this.state.ocnu_count + 1 }))
    }
    render() {
        return (
            <div>
                ライフサイクル知りたーい
                ocnu count: {this.state.ocnu_count}
                <button onClick={this.onClickButton}>up ocnu count</button>
            </div>
        )
    }
}


const React163NoYatsu = () => (
    <div>
        <h1>React16.3</h1>
        <h2>ContextAPI</h2>
        <Toire />
        <h2>createRefAPI</h2>
        <CreateRefDekiru />
        <h2>forwardRefAPI</h2>
        <ForwardRefTameshiTai />
        <h2>ライフサイクル</h2>
        <LifeCycleTamehsitai />
    </div>
)

export default React163NoYatsu
