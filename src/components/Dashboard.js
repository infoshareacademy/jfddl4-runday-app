import React from 'react'

import { PieChart, Pie, Tooltip, Cell } from 'recharts'

import Container from './UI/Container'

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
        <Container>
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
        </Container>
    </div>
);

export default Dashboard
