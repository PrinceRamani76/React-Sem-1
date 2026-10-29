import React from "react"

class Life extends React.Component{
    constructor(props){
        super(props)
        this.state = {count : 0}
        console.log("1. constructor")
    }

   static getDerivedStateFromProps(props, state){
        console.log("2. getDerivedStateFrom")
        return null
    }

    render(){
        console.log("3. render")
        return <h1>Count : {this.state.count}</h1>
    }

    componentDidMount(){
        this.setState({count : 1})
        console.log("4. componentDidMount")
        return null
    }

    shouldComponentUpdate(){
        console.log("5. shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("6. getSnapshotBeforeUpdate")
        console.log(prevProps, prevState)
        return null
    }
    componentDidUpdate(){
        console.log("7. componentDidMount")
        return null
    }
    


    componentWillUnmount(){
        console.log("8. componentWillUnmount")
        return null
    }


}

export default Life