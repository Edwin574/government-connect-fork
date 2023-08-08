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
        numbers:"675",
        icon:LocalHospitalIcon
    },
    {
        name:"Parking",
        numbers:"675",
        icon:LocalParkingIcon
    },
    {
        name:"Business Permits",
        numbers:"675",
        iconUrl:AddBusinessTwoToneIcon
    },
    {
        name:"Reported Incidences",
        numbers:"675",
        icon:SummarizeIcon
    },
    {
        name:"Public Spaces",
        numbers:"675",
        icon:OtherHousesIcon
    },
    {
        name:"Payments Made",
        numbers:"675",
        icon:PaidIcon
    }
]

    const ShowCards=()=>{
        
        return(
            <div>
                {cards.map((card, index)=>(
                    <div className='cardEmergency' key={index}>

                        <div>
                        <span className='cardIcon'><card.icon/></span>
                        <span className='cardNumber'><card.numbers/></span>
                          </div>

                          <div>
                           <span className='cardName'><card.name/></span>
                          </div>

                        </div>                              
                ))}
            </div>
        )
    }
export default ShowCards;