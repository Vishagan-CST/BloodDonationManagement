import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/dCandidate";

const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    age: '',
    bloodGroup: '',
    address: ''
}

const DCandidateForm = ({ currentId, setCurrentId, ...props }) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (currentId !== 0) {
            setValues({
                ...props.dCandidateList.find(x => x.id === currentId)
            })
        } else {
            setValues({ ...initialFieldValues })
        }
    }, [currentId])

    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }

    const validate = () => {
        let temp = {}
        temp.fullName = values.fullName ? "" : "This field is required."
        temp.mobile = values.mobile ? "" : "This field is required."
        temp.email = (/^$|.+@.+..+/).test(values.email) ? "" : "Email is not valid."
        temp.bloodGroup = values.bloodGroup ? "" : "This field is required."
        setErrors({
            ...temp
        })
        return Object.values(temp).every(x => x === "")
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()
            }
            if (currentId === 0)
                props.createDCandidate(values, onSuccess)
            else
                props.updateDCandidate(currentId, values, onSuccess)
        }
    }

    const resetForm = () => {
        setValues({ ...initialFieldValues })
        setErrors({})
        setCurrentId(0)
    }

    return (
        <form autoComplete="off" noValidate onSubmit={handleSubmit} className="premium-form">
            <h2 className="form-title">{currentId === 0 ? "New Blood Donor" : "Update Donor"}</h2>
            <div className="form-grid">
                <div className="input-group">
                    <input name="fullName" value={values.fullName} onChange={handleInputChange} placeholder="Full Name" />
                    {errors.fullName && <div className="error-text">{errors.fullName}</div>}
                </div>
                <div className="input-group">
                    <input name="mobile" value={values.mobile} onChange={handleInputChange} placeholder="Mobile" />
                    {errors.mobile && <div className="error-text">{errors.mobile}</div>}
                </div>
                <div className="input-group">
                    <input name="email" value={values.email} onChange={handleInputChange} placeholder="Email" />
                    {errors.email && <div className="error-text">{errors.email}</div>}
                </div>
                <div className="input-group">
                    <input name="age" type="number" value={values.age} onChange={handleInputChange} placeholder="Age" />
                </div>
                <div className="input-group">
                    <input name="bloodGroup" value={values.bloodGroup} onChange={handleInputChange} placeholder="Blood Group (e.g. A+)" />
                    {errors.bloodGroup && <div className="error-text">{errors.bloodGroup}</div>}
                </div>
                <div className="input-group full-width">
                    <input name="address" value={values.address} onChange={handleInputChange} placeholder="Address" />
                </div>
            </div>
            <div className="form-actions">
                <button type="submit" className="btn btn-primary">{currentId === 0 ? "Submit" : "Update"}</button>
                <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    dCandidateList: state.dCandidate
})

const mapActionToProps = {
    createDCandidate: actions.create,
    updateDCandidate: actions.update
}

export default connect(mapStateToProps, mapActionToProps)(DCandidateForm);
