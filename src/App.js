
// import "../component/App.css";
import Card from './Components/Card';
import Chart from './Components/Chart';
import Sidebar from './Components/Sidebar';
import Navbar from './component/Navbar';
import './sidebar.css';

function App() {
  return (
    <div className="Appp ">
    <div className="App ">

    <div className="w-25 App">
    <Sidebar />
    </div>

    <div className="w-100">
    <div>
    <Navbar className=""/>
    </div>
    <div className="oie">
      <Chart className=""/>
      <Card className="gars"/>
      </div>
    </div>
  
    </div>
    
     </div>
     
  );
}

export default App;
