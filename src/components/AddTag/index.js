import React, { useState, useContext, useEffect } from 'react'
import { studentContext } from '../../context/appContext';
import './index.css'

export default function AddTag({ id }) {
    const { tags, tagEdit } = useContext(studentContext);
    const [tagInput, setTagInput] = useState('');
    const handleChange = (e) => {
        setTagInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        tagEdit(id, tagInput);
        setTagInput('');
    }

    return (
        <div className='tag-bar'>
            <div className='tags'>
                {
                    tags[id] && tags[id].map((tag, i) => {
                        return (
                            <div className="tag" key={i}>
                                {tag}
                            </div>
                        )
                    })
                }

            </div>
            <form className='tag-form' onSubmit={handleSubmit}>
                <input type="text" className='tag-input' value={tagInput} onChange={handleChange} placeholder='Add a Tag' />
            </form>
        </div>
    )
}
