import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import School from '../School/School'
import './Body.css';
const Body = () => {
    const [schoolData, setSchoolData] = useState([]);
    const [cartData, setCartData] = useState([]);
    // fetch data
    useEffect(()=>{
        fetch('./fakeData/data.JSON')
        .then(res=>res.json())
        .then(data=>setSchoolData(data))
    },[]);
    // add member button handler
    const handleAddMember=school=>{     
        if(cartData.indexOf(school) === -1){
        const newCart = [...cartData, school]; 
        setCartData(newCart);
        }else{
            return
        }
    }
    return (
        <div className="body-container">          
            <div className="schools">
            {
                schoolData.map(school=><School 
                    handleAddMember={handleAddMember}
                    key={school.id}
                    school={school}
                    />)
            }
            </div>
            <div className="cart">
                    <Cart school={cartData}/>
            </div>
        </div>
    );
};

export default Body;