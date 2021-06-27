import React from 'react';

export default class NewPlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamValue: '',
            nameValue: '',
            salaryValue:'',
            positionValue:''
        }

        this.handleTeamChange = this.handleTeamChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSalaryChange = this.handleSalaryChange.bind(this);
        this.handlePositionChange = this.handlePositionChange.bind(this);
    }
    handleTeamChange(e) {
        this.setState({teamValue: e.target.value});
    }

    handleNameChange(e) {
        this.setState({nameValue: e.target.value});
    }

    handleSalaryChange(e) {
        this.setState({salaryValue: e.target.value});
    }

    handlePositionChange(e) {
        this.setState({positionValue: e.target.value});
    }
    handleClick(e) {
        this.props.addNewPlayer(e, this.props.data,
            {team: this.state.teamValue, name: this.state.nameValue,  salary: this.state.salaryValue, position: this.state.positionValue});
            this.setState({teamValue: '', nameValue: '', salaryValue: '', positionValue: ''});
    }

    render() {
        return (

            <div>
                <form className="form-inline">
                <div className="form-group">
                        <label htmlFor="franchise">Franchise:</label>
                        <select id="franchise" class="form-control">
                            <option value="">--Select Franchise--</option>
                            <option value="New England">New England</option>
                            <option value="Orlando">Orlando</option>
                            <option value="Philadelphia">Philadelphia</option>
                            <option value="New York City">New York City</option>
                            <option value="Columbus">Columbus</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name"
                            onChange={this.handleChange} defaultValue={this.state.nameValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input type="text" className="form-control" id="salary" placeholder="Enter Salary" name="salary"
                            onChange={this.handleChange} defaultValue={this.state.salaryValue} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="position">Position:</label>
                        <select id="position" class="form-control">
                            <option value="">--Select Position--</option>
                            <option value="Forward">Forward</option>
                            <option value="Midfield">Midfield</option>
                            <option value="Defense">Defense</option>
                            <option value="Sweeper">Sweeper</option>
                            <option value="Goalie">Goalie</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleClick}>Add Player </button>
                </form>
            </div>
        );
    }

    }
