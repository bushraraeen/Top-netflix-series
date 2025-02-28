import React from 'react';
import Card from './Card';
import  Carddata from'./Carddata';  
const Card2=()=>{
    return(
        <>
         <h1 className="heading">List of Top 5 Netflix Series</h1>
      <div className="card_container">
        {Carddata.map((val, index) => (
          <Card
            key={index} 
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        ))}
      </div>
        </>
    )

}
export default Card2;