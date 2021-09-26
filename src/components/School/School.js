import React from 'react';
import './School.css'
const School = (props) => {
    const {name, img, location, students, established, teachers} = props.school;
    const {handleAddMember,school} = props;
    return (
        <div className="school">
            <img src={img} alt="School photo" />
            <h3>{name}</h3>
            <p><b>Location: </b>{location}</p>
            <p><b>Students: </b>{students}</p>
            <p><b>Teachers: </b>{teachers}</p>
            <p><b>Established in: </b>{established}</p>
            <button onClick={()=>handleAddMember(school)}><i class="fas fa-user-plus"></i> Add as member</button>
        </div>
    );
};

export default School;