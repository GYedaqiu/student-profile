import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AddTag from '../AddTag';
import './index.css'

const Studentcard = (props) => {
    const [expand, setExpand] = useState(false);
    const { student } = props;
    const average = student.grades.reduce((pre, cur) => pre * 1 + cur * 1) / student.grades.length;
    const toggleExpand = () => {
        setExpand(!expand);
        console.log(expand);
    }
    return (
        <div className={expand ? 'info-card active' : 'info-card'}>
            <div className='avtar-container'>
                <img src={student.pic} alt={`${student.firstName} ${student.lastName} Avtar`} />
            </div>
            <div className='profile-container'>
                <h1>{`${student.firstName} ${student.lastName}`}</h1>
                <p>Email: {student.email}</p>
                <p>Company: {student.company}</p>
                <p>Skill: {student.skill}</p>
                <p>Average: {average}%</p>
            </div>
            <div className='btn-wrapper'>
                <button className='btn' onClick={toggleExpand}>
                    <FontAwesomeIcon icon={expand ? 'minus' : 'plus'} />
                </button>
            </div>

            <div className={expand ? 'collapse-items active' : 'collapse-items'}>
                {
                    student.grades.map((grade, i) => {
                        return (
                            <p key={i}>{`Test ${i + 1}:`}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`${grade}%`}</p>
                        )
                    })
                }
            </div>
            <div className={expand ? 'tags-container active': 'tags-container'}>
                <AddTag id={student.id}/>
            </div>
        </div>
    );
}

export default Studentcard;
