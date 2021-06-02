import React from 'react';
import {Bar, Doughnut,Line,Pie} from 'react-chartjs-2';
// git remote add origin https://github.com/Any22/React-Chart.git
// git branch -M main
// git push -u origin main

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill:false,
      lineTension:0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default  function App() {
  
    return (
      <>
      <div>
        <h3>Bar Chart</h3>
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
          colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
        />
      </div>
      <div>
        <h3>Line Chart</h3>
      <Line 
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
      <div>
       <h3>Pie Chart</h3> 
       <Pie
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
      <div>
        <h3>
          Doughnut Chart
        </h3>
        <Doughnut
        data={state}
        options={{
          title:{
            display:true,
            text:'Average rainfall per month',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          },
        }}
        colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
        />
      </div>
      </>
    );
  }
