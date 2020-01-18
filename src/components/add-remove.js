import React from 'react';

const AnotherCourse = (props) => {
    return (
        <form onSubmit= {props.addNewCourse}>
            <input type= "text" value= {props.current} onChange= {props.newCourse}/>
            <button type= "submit">Add Course</button>
        </form>
    )
}

export default AnotherCourse;