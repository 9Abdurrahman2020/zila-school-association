import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const school = props.school;
    const totalTeachers = school.reduce((initial, school)=>initial + school.teachers,0)
    return (
        <div className="cart-container">
            <h3>Member Added: {school.length}</h3>
            {
                school.map(data=><List key={data.id} data={data}></List>)
            }
            <h4>Total Teachers: {totalTeachers}</h4>
        </div>
    );
};
const List=props=>{
    const {data} = props;
return <li>{data.name}</li>;
}

export default Cart;