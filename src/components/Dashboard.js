import React from 'react'
import AppBar from 'material-ui/AppBar'
import { render } from 'react-dom';
import { PieChart, Pie, Tooltip, Cell } from 'recharts'

const data = [
    {
        value: 30,
        name: 'biegi po lesie',
        color: 'green'
    },
    {
        value: 20,
        name: 'biegi po miescie',
        color: 'red'
    },
    {
        value: 30,
        name: 'biegi bez butow',
        color: 'yellow'
    }
]

const pie_cells = data.map((entry, index) => {
    return (<Cell key={index} fill={entry.color} />)
})

const Dashboard = () => (
    <div>
        <AppBar
            style= {{background: '#8BC34A'}}
            title="RunDay"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
        />


        <h2 style={{ textAlign: 'center' }}>Running List </h2>
        <PieChart width={500} height={500}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
            >
                {pie_cells}
            </Pie>
            <Tooltip />
        </PieChart>
    </div>
);

export default Dashboard