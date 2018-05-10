import React from 'react'
import List from './List'
import Controls from './Controls'
import Slider from 'material-ui/Slider';
import Container from "./UI/Container";


const styles={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
}

class ToDo extends React.Component {
    state = {
        tasks: [],
        filterText: '',
        newTask: 'asDFGHJ'
    }

    deleteTask = (taskUid) => {
        const newTasks = this.state.tasks.filter(task => taskUid !== task.uid)
        this.setState({
            tasks: newTasks
        })
    }

    addTask = () => {
        const newTask = {
            name: this.state.newTask,
            uid: Date.now()
        }
        const newTasks = this.state.tasks.concat(newTask)

        this.setState({
            tasks: newTasks,
            newTask: ''
        })
    }

    newTaskChangeHandler = (event, newValue) => this.setState({
        newTask: newValue
    })

    newFilterChangeHandler = (event, newValue) => this.setState({
        filterText: newValue
    })

    render(){
        return (

            <div style={styles}>
                <Controls
                    onClickHandler={this.addTask}
                    onChangeHandler={this.newTaskChangeHandler}
                    newTaskValue={this.state.newTask}
                    filterTaskValue={this.state.filterText}
                    onFilterChangeHandler={this.newFilterChangeHandler}
                />

                <span style={styles}>0 km <Slider/> 100 km</span>

                <List
                    deleteTaskFunction={this.deleteTask}
                    tasksList={this.state.tasks}
                    filter={this.state.filterText}
                />
            </div>

        )
    }
}

export default ToDo