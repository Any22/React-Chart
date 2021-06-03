import React from 'react';
import BarChart from './BarChart';
// git remote add origin https://github.com/Any22/React-Chart.git
// git branch -M main
// git push -u origin main

function App() {
  return (
      <>
      <div className="bar-chart">
        <h3>Bar Chart</h3>
         <BarChart/>
{/* 
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
        /> */} 
      </div>
      </>
    );
  }
export default App;