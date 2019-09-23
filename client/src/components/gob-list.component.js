import React, { Component } from 'react';
import TableRow from './TableRow'
import axios from 'axios';




class GobsList extends Component {

    constructor(props) {
        super(props);
        this.state = {allgobs: []};
    }


    componentDidMount() {
        axios.get('http://localhost:4000/gobs')
            .then(response => {
                console.log(response.data.sucsses)
                this.setState({ allgobs: response.data.sucsses});
            })
            .catch( (error)=>{
                console.log(error);
            })
    }

    componentDidUpdate(){
        axios.get('http://localhost:4000/gobs')
        .then(response => {
            console.log(response.data.sucsses)
            this.setState({ allgobs: response.data.sucsses});
        })
        .catch( (error)=>{
            console.log(error);
        })
    }

    tabRow(){
        return this.state.allgobs.map(function(gob, i){
            return <TableRow obj={gob} key={i} />;
        });
      }
    render() {

        return (
            <div>
                <h3>Gobs List</h3>
                <table className="table" style={{ marginTop: 20 }} >
                    <thead className="thead-dark" >
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default GobsList

