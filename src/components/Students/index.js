import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Studentcard from '../StudentCard';
import './index.css'
import { studentContext } from '../../context/appContext';


const Students = () => {
    const { nameFilter, tagFilter, tags } = useContext(studentContext);
    const [data, setData] = useState([]);
    const [scrolling, setScrollbar] = useState(false);
    const getStudents = async () => {
        const { data } = await axios.get('https://api.hatchways.io/assessment/students');
        setData(data.students);
    }

    const addScrollBar = () => {
        setScrollbar(true);
    }
    useEffect(() => {
        getStudents();
        //console.log('render');
    }, [nameFilter, tagFilter, tags]);

    return (
        <div className={scrolling ? 'student-display student-display-scroll' : 'student-display'} onWheel={addScrollBar}>
            {data.filter(stu => {
                let name = stu.firstName + ' ' + stu.lastName;
                let matchedNames = name.toLowerCase().includes(nameFilter);
                if (tagFilter !== '') {
                    if (tags[stu.id]) {
                        let matchedTags = tags[stu.id].filter(tag => {
                            return tag.toLowerCase().includes(tagFilter);
                        })
                        return matchedTags.length > 0 ? matchedNames : false;
                    }else {
                        return false
                    }
                }else {
                    return matchedNames;
                }
            }).map(stu => {
                return (
                    <Studentcard key={stu.id} student={stu} />
                )
            })}
        </div>
    );
}

export default Students;
