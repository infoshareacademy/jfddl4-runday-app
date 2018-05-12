import React from 'react'

class ListOfResults extends React.Component{
    state = {
        imBusy:true,
        imWithErrors:false,
        runList:[]
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
        .then((run)=>{
                    this.setState({
                    runList: run,
                    imBusy:false
                })
           
            console.log('test', run)

        })
    }


    render(){
        console.log('this',this.state, this.props)

        if(this.state.imBusy){
            return (<span>cos sie dzieje</span>)
        }

        return (<div>
            <h2>ListOfResults</h2>
            <ul>{JSON.stringify(this.state.runList)}</ul>
            </div>)
    }
}

export default ListOfResults