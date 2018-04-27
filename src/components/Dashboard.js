import React from 'react'
import { render } from 'react-dom';
import { PieChart, Pie, Tooltip }  from 'recharts'

const data = [
  {
    value: 30,
    name: 'biegi po lesie'
  },
  {
    value: 20,
    name: 'biegi po miescie'
  },
  {
    value: 50,
    name: 'biegi bez butow'
  }

]

const Dashboard = () => (
  <div >
    <PieChart width={500} height={500}>
      <Pie 
        data={data}
        dataKey="value"
        nameKey="name"
        fill="#000fff" 
      />
      <Tooltip />
    </PieChart>
  </div>
);

export default Dashboard