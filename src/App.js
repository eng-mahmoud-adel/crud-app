import React, {Component} from 'react';
import Show from './components/show-courses';
import AnotherCourse from './components/add-remove';

class App extends Component {

  state= {
    courses: [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"}
    ],
    current: ""
  }

  newCourse = (e) => {
    this.setState({current: e.target.value});
  }

  addNewCourse = (e) => {
    e.preventDefault();
    const current= this.state.current;
    const courses = this.state.courses;
    courses.push({name: current});
    this.setState({
      courses: courses,
      current: ""
    });
  }

  deleteCourse = (index) => {
    const courses= this.state.courses;
    courses.splice(index, 1);
    this.setState({courses: courses});
  }

  editCourse = (index, value) => {
    const courses= this.state.courses;
    const course= courses[index];
    course["name"] = value;
    this.setState({courses: courses});
  }

  render() {

    const courses = this.state.courses;
    const courseList = courses.map((course, index) => {
      return(
        <Show info= {course} key= {index} deleteCourse= {this.deleteCourse} index= {index} editCourse= {this.editCourse}/>
      );
    });

    return (
      <div className="App">
        <h2>Add Course</h2>
        <ul>{courseList}</ul>
        <AnotherCourse current= {this.state.current} newCourse= {this.newCourse} addNewCourse= {this.addNewCourse}/>
      </div>
    );
  }
}

export default App;