import {ADD_INSTRUCTOR, DELETE_INSTRUCTOR, GET_INSTRUCTORS} from '../actions/types.js';

const initialState = {
    Instructors: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_INSTRUCTORS:
            return {
                ...state,
                Instructors: action.payload
            }
        case DELETE_INSTRUCTOR:
            return {
                ...state,
                Instructors: state.Instructors.filter(Instructor => Instructor.id !== action.payload)
            }
        case ADD_INSTRUCTOR:
            return {
                ...state,
                Instructors: [...state.Instructors, action.payload]
            };

        default:
            return state;
    }

}