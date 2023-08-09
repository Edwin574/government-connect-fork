import Linechart from "../charts/LineChart";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">
          <span>675</span>
          <span>Emergency Services</span>
        </div>
        <div className="card">
          <span>675</span>
          <span>Parking</span>
        </div>
        <div className="card">
          <span>675</span>
          <span>Business Permits</span>
        </div>
        <div className="card">
          <span>675</span>
          <span>Reported Incidences</span>
        </div>
        <div className="card">
          <span>675</span>
          <span>Public Spaces</span>
        </div>
        <div className="card">
          <span>675</span>
          <span>Payments Made</span>
        </div>
      </div>
      <Linechart />
    </div>
  );
};

export default Dashboard;
