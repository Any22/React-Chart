import React from 'react'
import {Bar} from 'react-chartjs-2';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill:true,
    //   lineTension:0.5,
      backgroundColor:[ 
        'rgba(75,192,192,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
        ],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [56,28,67,12,45]
    }
  ]
}
const BarChart = () => {
    return (
        <div>
          <Bar 
            data={state}
            options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          />  
        </div>
    )
}

export default BarChart;
