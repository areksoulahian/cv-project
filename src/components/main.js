import React from "react";

const Main = () => {
    return(
        <div>
        <form className="general-information">
            <h2>General Information</h2>
            {/* First Name */}
            <label>First Name: <input type="text" name="First Name"/></label>
            {/* Last Name */}
            <label>Last Name: <input type="text" name="Last Name"/></label>
            {/* Email */}
            <label>Email: <input type="text" name="Email"/></label>
            {/* Phone Number */}
            <label>Phone Number: <input type="number" name="Phone Number"/></label>
            <button type="submit">Save</button>
        </form>
        <form className="education-experience">
            <h2>Educational Experience</h2>
            {/* School Name */}
            <label>School Name: <input type="text" name="School Name"/></label>
            {/* Title of study */}
            <label>Title of Study: <input type="text" name="Title of Study"/></label>
            {/* Date of Study */}
            <label>Date of Study: <input type="text" name="Date of Study"/></label>
            <button type="submit">Save</button>
        </form>
        <form className="practical-experience">
            <h2>Practical Experience</h2>
            {/* Company Name */}
            <label>Company Name: <input type="text" name="Company Name"/></label>
            {/* Position Title */}
            <label>Position Title: <input type="text" name="Position Title"/></label>
            {/* Main Tasks */}
            <label>Main Tasks of Work: <input type="text" name="Main Tasks of Work"/></label>
            {/* Date Worked */}
            <label>Date of Employment<input type="text" name="Date of Employment"/></label>
            <button type="submit">Save</button>
        </form>
        </div>
    );
};

export default Main;
