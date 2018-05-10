import React from 'react'

import Task from './Task'
import ContainerList from './UI/ContainerList'
import {removeDiacritics} from '../utils'

const List = ({tasksList, deleteTaskFunction, filter}) => (
    <ContainerList>
        {
            tasksList
                .filter(task => {
                    const taskName = removeDiacritics(task.name.toLowerCase())
                    const filterText = removeDiacritics(filter.toLowerCase())

                    return taskName.indexOf(filterText) !== -1
                })
                .map(task => (
                    <Task
                        name={task.name}
                        key={task.uid}
                        deleteTask={() => deleteTaskFunction(task.uid)}
                    />
                ))
        }
    </ContainerList>
)

export default List