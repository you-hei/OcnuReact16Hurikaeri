import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const FragmentsDekinai = () => [
    <div key="boe1">こ１</div>,
    <div key="boe2">こ２</div>,
    <div key="boe3">こ３</div>,
]

const portalsRoot = document.getElementById('portals-root')

class PortalsDekinai extends Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount() {
        portalsRoot.appendChild(this.el)
    }
    componentWillUnmount() {
        portalsRoot.removeChild(this.el)
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

// class ErrorBoundariesDekinai extends Component {
//     render() {
//         return <div/>
//     }
// }

const React15NoYatsu = () => (
    <div>
        <h1>React15</h1>
        <h2>Fragments使えないのだった</h2>
        <FragmentsDekinai />
        <h2>Portalsを使えないのだった</h2>
        <PortalsDekinai>ジョンダリ</PortalsDekinai>
        <h2>Error Boundariesできないのだった</h2>
    </div>
)

export default React15NoYatsu
