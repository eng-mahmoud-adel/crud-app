import React, {Component, Fragment} from 'react';

class Show extends Component {

    state= {
        isEdit: false
    }

    renderCourse = () => {
        return(
            <li>
                <span>{this.props.info.name}</span>
                <button onClick= {() => this.toggleEdit()}>Edit Course</button>
                <button onClick= {() => this.props.deleteCourse(this.props.index)}>Delete Course</button>
            </li> 
        );
    };

    updateCourse = () => {
        return(
            <form onSubmit= {this.admitUpdate}>
                <input type= "text" defaultValue= {this.props.info.name} ref= {value => this.input = value} />
                <button>Update Course</button>
            </form>
        );
    };

    toggleEdit = () => {
        const isEdit= this.state.isEdit; 
        this.setState({isEdit: !isEdit});
    }

    admitUpdate = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value)
        this.toggleEdit();
    }

    render() {
        const isEdit= this.state.isEdit;
        return (
            <Fragment>
                {isEdit? this.updateCourse() : this.renderCourse()}
            </Fragment>
        );
    }
}

export default Show;