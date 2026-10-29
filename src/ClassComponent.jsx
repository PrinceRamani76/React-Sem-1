import {Component} from 'react'

export default class  ClassComponent extends Component {
    constructor({name, ...rest}) {
        super({name, ...rest})
    }
    render(){
        console.log(this)
        return <h1>{this.props.name} {this.props.surname} {this.props.grade}</h1>
    }
}