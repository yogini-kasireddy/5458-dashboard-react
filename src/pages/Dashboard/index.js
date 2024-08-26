import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import DashboardBox from './components/dashboardBox';
import Carousel from './components/Carouse';
import { data,options,Cdata,Coptions } from "../../Data/Data";

import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale,ArcElement, LinearScale,BarElement, Title, Tooltip, Legend } from 'chart.js'
ChartJS.register(CategoryScale, LinearScale,ArcElement, BarElement, Title, Tooltip, Legend);
ChartJS.register(CategoryScale, LinearScale, BarElement,  Title, Tooltip, Legend);

const Dashboard = () => {
  return (
    <div className="right-content w-100">
      <div className="row dashboardBoxWrapperRow">
        <div className="col-md-21">
          <div className="dashboardBoxWrapper d-flex">
            <DashboardBox color={["#1da256","#48d483"]} icon={<FaUserCircle/>} grow={true}/>
            <DashboardBox color={["#c012e2","#eb64fe"]} icon={<FaUserCircle/>} />
            <DashboardBox color={["#2c78e5","#60aff5"]} icon={<FaUserCircle/>}/>
            <DashboardBox color={["#e1950e","#f3cd29"]} icon={<FaUserCircle/>}/>
          </div>
        </div>
      </div>
      
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="card" style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}}>
            <div className="card-body" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', alignItems: 'center' }}>
                <h2 style={{ margin: 0 }}>Statistics</h2>
                <div>
                  <span style={{ marginRight: '10px' }}>Sort by</span>
                  <select style={{ padding: '5px', borderRadius: '5px', backgroundColor: '#f0e6ff' }}>
                    <option>Yearly</option>
                    <option>Monthly</option>
                  </select>
                </div>
              </div>
              <Bar data={data} options={options} />
            </div>
          </div>
        </div>
      
        <div className="col-md-6">
        <div style={{ width: '550px', height: '360px', padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Course Activities</h2>
      <div style={{ position: 'relative', height: '200px' }}>
        <Doughnut data={Cdata} options={Coptions} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
        }}>
          75%
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgb(65, 105, 225)', marginRight: '5px' }}></div>
          <span>Process</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'rgb(230, 230, 250)', marginRight: '5px' }}></div>
          <span>In process</span>
        </div>
      </div>
    </div>

       </div>
      </div>

      <Carousel color={["#1da256","#48d483"]}/>
      
    </div>
  )
}

export default Dashboard;