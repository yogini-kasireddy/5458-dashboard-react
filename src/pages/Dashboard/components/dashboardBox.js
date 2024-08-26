import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
const DashboardBox = (props) => {
  return (
    <div className="dashboardBox" style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color?.[1]})`
    }}>
        
        {
              props.grow === true ?
              <span className="chart"><TrendingUpIcon/></span> 
              :
              <span className="chart"><TrendingDownIcon/></span>  
        }
    
        <div className="d-flex w-100">
           <div className="col1">
               <h6 className="text-white mb-0">total applications</h6>
               <span className="text-white">277</span>
           </div>
            
           <div className="ml-auto">
            {
                props.icon ?
                <span className="icon">
              {props.icon?props.icon:''}
            </span>
             :
             ''
            }
            
           </div>
        </div>
        <div className="d-flex align-items-center w-100 bottomEle">
        <div className="d-flex align-items-center">
        <span className={`percentage-indicator ${props.grow ? 'positive' : 'negative'}`}>
            {props.grow ? '▲' : '▼'}
          </span>
          <span className="text-white font-weight-bold mr-2" style={{ fontSize: '1.2em' }}>
            {props.percentage || '0'}%
          </span>
        </div>
             
            
        </div>
    </div>
  )
}

export default DashboardBox;
