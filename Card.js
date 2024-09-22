import { useState } from "react";


function Card({id, image,info,price,name, removeTour})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);// click hone pe ye line true ya false batayega
    }


    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    {/* click hone pe kuch change ho rha hai isiliye onClick ka use kr liya */}
                    <span className="read-more" onClick={readmoreHandler} >   
                        {/* ternary operator ka use kiya hai */}
                        {readmore ? `Show Less`: `Read \More`} 
                    </span>
                </div>
            </div>
             
             {/* id ki help se kisi tour ko remove kr skte hai */}
            <button className="btn-red" onClick={() => removeTour(id)}> 
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;