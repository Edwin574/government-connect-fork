import {} from "react";
import "../styles/components/cards.css";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const ShowCards = ({ icon, name, numbers,bg,percent }) => {
  return (
    <div
      className={`card-content ${bg}`}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex:1,
        alignSelf:'center',
        padding:'10px',
        borderRadius:'10px'
      }}
    >
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "baseline",
        // alignSelf:'flex-start'
      }}>
        <span style={{ width: 50, height: 50 }}>
          <CircularProgressbar value={percent} text={`${percent}%`} styles={buildStyles({
            pathColor:'orange',
            textColor:'orange'
          })}/>
        </span>
        <span className="card-name">{name}</span>
      </div>

      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
        color:'white'
      }}>
        <span>{icon}</span>
        <span style={{fontSize:'20px',fontWeight:'500'}}>{numbers}</span>
        <span >Total Requests</span>
        <span style={{fontSize:'8px'}}>Last 24Hrs</span>
      </div>
    </div>
  );
};
export default ShowCards;
