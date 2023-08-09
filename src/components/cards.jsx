import {} from "react";
import '../styles/components/cards.css'
const ShowCards = ({ icon, name, numbers }) => {
  return (
    
    <div className="cards">
      <div className="card">
        <div className="cardTop">
          <span className="cardIcon">{icon}</span>
          <span className="cardNumber">{numbers}</span>
        </div>

        <div className="cardBottom">
          <span className="cardName">{name}</span>
        </div>
      </div>
    </div>
  );
};
export default ShowCards;
