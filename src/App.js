import React from 'react';
import BarChart from './components/BarChart'
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';

function App() {
  return (
    <>
      <div className="bar-chart">
        <h3>Bar Chart</h3>
         <BarChart/>
      </div>
      <div className="line-chart">
        <h3>Line Chart</h3>
         <LineChart/>
      </div>
      <div className="Pie-chart">
        <h3>Pie Chart</h3>
         <PieChart/>
      </div>
      <div className="Doughnut-chart">
        <h3>Doughnut Chart</h3>
         <DoughnutChart/>
      </div>
    </>
  ); 
}
export default App;