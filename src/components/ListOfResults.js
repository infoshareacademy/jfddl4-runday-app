import React from 'react'

// const ListOfResults = () => <div></div>





const runPattern = {
    date:'',
    creator:'',
    start:'',
    distance:'',
    status:'',
    runners:[]
}



class ListOfResults extends React.Component{
    state = {
        imBusy:true,
        imWithErrors:false,
        listOfResults:[],
        users:[]
    }

    componentDidMount(){
        // fetch something
        window.fetch('https://tasks.isa.valuepoint.pl/users')
        .then(r=>r.json())
        .then((users)=>{
            setTimeout(()=>{
                this.setState({
                    users:users.data,
                    imBusy:false
                })

            },3000)
           
            console.log('test', users.data)

        })
    }

    render(){
        console.log('this',this.state, this.props)

        if(this.state.imBusy){
            return (<span>cos sie dzieje</span>)
        }

        return (<div>
            <h2>ListOfResults</h2>
            <h3>{JSON.stringify(this.state.users)}</h3>
            </div>)
    }
}

export default ListOfResults