import React, { Component } from 'react';

class SelectDataExampleApi extends Component {
    
    constructor(props){
        super(props)
        this.state={
            myData:[],
            apiSuccess:false
        }
        // this.onChangeInp=this.onChangeInp.bind(this)
    }

    componentDidMount(){
        console.log('dfjjjdn');
        fetch('https://justjay.000webhostapp.com/api/allusers')
        .then(res=>res.json())
        .then((kaipan)=>{
            if (kaipan.Code==1) {
                this.setState({apiSuccess:true})
                this.setState({myData:kaipan.Data})
                console.log(kaipan);
                console.log(kaipan.Data[0].mobile);
            } else {
                this.setState({apiSuccess:false})
            }
        })
    }

    render() {
        const UsersData =  this.state.myData.map((val,key)=>{
           return (<div key={key}>{key}Test</div>)
        })
        return (
            <div>
                 {/* { JSON.stringify(this.state.myData) } */}
                 {UsersData}
            </div>
        );
    }
}

export default SelectDataExampleApi;