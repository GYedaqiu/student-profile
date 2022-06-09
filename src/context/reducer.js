import { NAME_SEARCH, TAG_SEARCH, TAG_EDIT } from "./action";

const reducer = (state, action) => {
    switch (action.type) {
        case NAME_SEARCH:
            return {
                ...state,
                nameFilter: action.payload.nameFilter.toLowerCase()
            }
        case TAG_SEARCH:
            return {
                ...state,
                tagFilter: action.payload.tagFilter.toLowerCase()
            }
        case TAG_EDIT:
                return {
                    ...state,
                    tags: {
                        ...state.tags,
                        [action.payload.tagID]: 
                        state.tags[action.payload.tagID] ? 
                        [...state.tags[action.payload.tagID], action.payload.tagInput] :
                        [action.payload.tagInput]
                    }
                }
        default:
            break;
    }
}

export default reducer;