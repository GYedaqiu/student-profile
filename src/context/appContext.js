import React, { useReducer } from 'react';
import reducer from './reducer';
import {NAME_SEARCH, TAG_SEARCH, TAG_EDIT} from './action';



const initialState = {
    nameFilter: '',
    tagFilter:'',
    tags: {}
};

const studentContext = React.createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const searchNames = (nameInput) => {
        dispatch({
            type: NAME_SEARCH,
            payload: {
                nameFilter: nameInput
            }
        });
    }

    const searchTags = (tagInput) => {
        dispatch({
            type: TAG_SEARCH,
            payload: {
                tagFilter: tagInput
            }
        })
    }

    const tagEdit = (tagID, tagInput) => {
        dispatch({
            type: TAG_EDIT,
            payload: {
                tagID: tagID,
                tagInput: tagInput
            }
        })
    }

    return (
        <studentContext.Provider value={{ ...state, searchNames, searchTags, tagEdit }}>
            {children}
        </studentContext.Provider>
    )
}



export {studentContext, AppProvider}
