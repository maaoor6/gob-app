import React, { Component } from 'react';
import axios from 'axios';

 class CreateGob extends Component {
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
        
        console.log(`Form submitted:`);
        console.log(`Gob Description: ${this.state.gob_description}`);
        console.log(`Gob Responsible: ${this.state.gob_responsible}`);
        console.log(`Gob Priority: ${this.state.gob_priority}`);

        const newGob = {
            gob_description: this.state.gob_description,
            gob_responsible: this.state.gob_responsible,
            gob_priority: this.state.gob_priority,
        };

        axios.post('http://localhost:4000/gobs/addGob', newGob)
            .then(res => console.log(res.data));
        
        this.setState({
            gob_description: '',
            gob_responsible: '',
            gob_priority: '',
        })
        alert('Gob Add successfully')
    }

    render() {
        return (
             <div style={{marginTop: 10}}>
                <h3>Create New Gob</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.gob_description}
                                onChange={this.onChangeGobDescription}
                                required
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.gob_responsible}
                                onChange={this.onChangeGobResponsible}                               
                                required/>
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
                                    required
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
                                    required
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
                                    required
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Gob" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
        
    }
}
export default CreateGob