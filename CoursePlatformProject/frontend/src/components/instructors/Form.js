import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addInstructor} from "../../actions/Instructors";

class Form extends Component {
    state = {
        name: '',
        email: ''
    }

    static propTypes = {
        addInstructor: PropTypes.func.isRequired
    }

    onChange = e => this.setState({
        [e.target.name]:
        e.target.value
    });

    onSubmit = e => {
        e.preventDefault();
        console.log("submit")
        const {name, email} = this.state;
        const instructor = {name, email};
        this.props.addInstructor(instructor)
        this.setState({
            name: "",
            email: ""
        })
    }



    render() {
        const {name, email} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Instructor</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {addInstructor })(Form);
