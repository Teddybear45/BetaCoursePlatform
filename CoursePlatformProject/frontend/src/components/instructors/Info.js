import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {deleteInstructor, getInstructors} from "../../actions/Instructors";

class Info extends Component {
    static propTypes = {
        Info: PropTypes.array.isRequired,
        getInstructors: PropTypes.func.isRequired,
        deleteInstructor: PropTypes.func.isRequired

    }

    componentDidMount() {
        this.props.getInstructors();
    }

    render() {
        return (
            <Fragment>
                <h2>Instructors Info</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>

                    </thead>
                    <tbody>
                    {this.props.Info.map(Info => (
                        <tr key={Info.id}>
                            <td>{Info.id}</td>
                            <td>{Info.name}</td>
                            <td>{Info.email}</td>
                            <td>
                                <button
                                    onClick={this.props.deleteInstructor.bind(this, Info.id)}
                                    className="btn btn-danger btn-sm"
                                >{" "} Delete
                                </button>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>

            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    Info: state.Instructors.Instructors
})


export default connect(
    mapStateToProps,
    {getInstructors, deleteInstructor}
)(Info);