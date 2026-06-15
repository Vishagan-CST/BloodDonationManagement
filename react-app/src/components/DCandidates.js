import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";
import DCandidateForm from "./DCandidateForm";

const DCandidates = (props) => {
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        props.fetchAllDCandidates()
    }, [])

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?')) {
            props.deleteDCandidate(id, () => console.log("Deleted"))
        }
    }

    return (
        <div className="main-container">
            <div className="glass-panel form-panel">
                <DCandidateForm currentId={currentId} setCurrentId={setCurrentId} />
            </div>
            <div className="glass-panel list-panel">
                <h2 className="panel-title">List of Blood Donors</h2>
                <div className="table-responsive">
                    <table className="premium-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Blood Group</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.dCandidateList.map((record, index) => {
                                    return (
                                        <tr key={index} className="table-row">
                                            <td>{record.fullName}</td>
                                            <td>{record.mobile}</td>
                                            <td><span className="badge">{record.bloodGroup}</span></td>
                                            <td>
                                                <button className="action-btn edit-btn" onClick={() => { setCurrentId(record.id) }}>✎ Edit</button>
                                                <button className="action-btn delete-btn" onClick={() => { onDelete(record.id) }}>🗑 Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate
})

const mapActionToProps = {
    fetchAllDCandidates: actions.fetchAll,
    deleteDCandidate: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(DCandidates);