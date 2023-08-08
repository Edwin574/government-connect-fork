import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import SummarizeIcon from '@mui/icons-material/Summarize';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PaidIcon from '@mui/icons-material/Paid';

const cards=[
    {
        name:"Emergency Services",
        numbers:"123",
        icon:<LocalHospitalIcon/>
    },
    {
        name:"Parking",
        numbers:"342",
        icon:<LocalParkingIcon/>
    },
    {
        name:"Business Permits",
        numbers:"102",
        icon:<AddBusinessTwoToneIcon/>
    },
    {
        name:"Reported Incidences",
        numbers:"32",
        icon:<SummarizeIcon/>
    },
    {
        name:"Public Spaces",
        numbers:"85",
        icon:<OtherHousesIcon/>
    },
    {
        name:"Payments Made",
        numbers:"235",
        icon:<PaidIcon/>
    }
]

    const ShowCards=()=>{
        
        return(
            <div className='cards'>
                {cards.map((card, index)=>(
                    <div className='card' key={index}>

                        <div className="cardTop">
                        <span className='cardIcon'>{card.icon}</span>
                        <span className='cardNumber'>{card.numbers}</span>
                         </div>

                         <div className="cardBottom">
                        <span className='cardName'>{card.name}</span>
                    </div>
                        </div>                              
                ))}
            </div>
        )
    }
export default ShowCards;