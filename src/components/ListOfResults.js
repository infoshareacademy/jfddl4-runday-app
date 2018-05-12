import React from 'react'

// const ListOfResults = () => <div></div>


const runPattern = {
    creator:'',
    start:'',
    date:'',
    distance:'',
    status:'',
    runners:[],
    markers: []
}

class ListOfResults extends React.Component{
    state = {
        imBusy:true,
        imWithErrors:false,
        listOfResults:[],
        users:[]
    }

    mapObjectToArray = (obj) => (
        Object.entries(obj || {})
          .map(([key, value]) => (
            typeof value === 'object' ?
              {...value, key}
              :
              {key, value}
          ))
      )
    componentDidMount(){
        // fetch something
        fetch('https://runday-app.firebaseio.com/runs.json')
        .then(r=>r.json())
        .then((user)=>{
                    this.setState({
                    users: user,
                    imBusy:false
                })
           
            console.log('test', user)

        })
    }

    render(){
        console.log('this',this.state, this.props)

        if(this.state.imBusy){
            return (<span>cos sie dzieje</span>)
        }

        return (<div>
            <h2>ListOfResults</h2>
            <ul>{JSON.stringify(this.state.users)}</ul>
            </div>)
    }
}

export default ListOfResults