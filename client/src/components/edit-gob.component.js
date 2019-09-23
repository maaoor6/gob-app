import React, { Component } from 'react';
import axios from 'axios';

 class EditGob extends Component {
    constructor(props) {
        super(props);
        
        this.onChangeGobDescription = this.onChangeGobDescription.bind(this);
        this.onChangeGobResponsible = this.onChangeGobResponsible.bind(this);
        this.onChangeGobPriority = this.onChangeGobPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            gob_description: '',
            gob_responsible: '',
            gob_priority: '',
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/gobs/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    gob_description: response.data.gob_description,
                    gob_responsible: response.data.gob_responsible,
                    gob_priority: response.data.gob_priority,
                    gob_completed: response.data.gob_completed
                })   
            })
            .catch( (error)=> {
                console.log(error);
            })
    }
    onChangeGobDescription(e) {
        this.setState({
            gob_description: e.target.value
        });
    }

    onChangeGobResponsible(e) {
        this.setState({
            gob_responsible: e.target.value
        });
    }

    onChangeGobPriority(e) {
        this.setState({
            gob_priority: e.target.value
        });
    }

 
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            gob_description: this.state.gob_description,
            gob_responsible: this.state.gob_responsible,
            gob_priority: this.state.gob_priority,
        };
        console.log(obj);
        axios.post('http://localhost:4000/Gobs/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <h3 align="center">Update Gob</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.gob_description}
                            onChange={this.onChangeGobDescription}
                            />
                </div>
                <div className="form-group">
                    <label>Responsible: </label>
                    <input 
                            type="text" 
                            className="form-control"
                            value={this.state.gob_responsible}
                            onChange={this.onChangeGobResponsible}
                            />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityLow" 
                                value="Low"
                                checked={this.state.gob_priority==='Low'} 
                                onChange={this.onChangeGobPriority}
                                />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityMedium" 
                                value="Medium" 
                                checked={this.state.gob_priority==='Medium'} 
                                onChange={this.onChangeGobPriority}
                                />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input  className="form-check-input" 
                                type="radio" 
                                name="priorityOptions" 
                                id="priorityHigh" 
                                value="High" 
                                checked={this.state.gob_priority==='High'} 
                                onChange={this.onChangeGobPriority}
                                />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <br />

                <div className="form-group">
                    <input type="submit" value="Update Gob" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}
export default EditGob