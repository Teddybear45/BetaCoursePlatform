import axios from "axios";
import {ADD_INSTRUCTOR, DELETE_INSTRUCTOR, GET_ERRORS, GET_INSTRUCTORS} from "./types";
import {createMessage} from "./messages";

// Get Instructors
export const getInstructors = () => dispatch => {
    axios.get('/api/Instructors')
        .then(res => {
            dispatch({
                type: GET_INSTRUCTORS,
                payload: res.data
            })
        }).catch(err => console.log(err));
}

// Delete Instructor
export const deleteInstructor = id => dispatch => {
    axios
        .delete(`/api/Instructors/${id}/`)
        .then(res => {
            dispatch(createMessage({deleteInstructor: 'Instructor deleted'}));
            dispatch({
                type: DELETE_INSTRUCTOR,
                payload: id
            })
        }).catch(err => console.log(err));
}

// Add Instructor
export const addInstructor = Instructor => dispatch => {
    axios
        .post('/api/Instructors/', Instructor)
        .then(res => {
            dispatch(createMessage({addInstructor: 'Instructor added'}));

            dispatch({
                type: ADD_INSTRUCTOR,
                payload: res.data
            })
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        };
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
}