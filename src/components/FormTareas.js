import React, { Component } from "react";
class FormTareas extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            responsible: "",
            description: "",
            priority: ""
        }
        //enlaza los this.
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(o) {
        const { value, name } = o.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }
    handleSubmit(event) {
        event.preventDefault();//evita recargar la pagina
        this.props.onAddtodo(this.state);
        console.log("Sending the data..");
    }
    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"
                            name="title"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="responsible"
                            className="form-control"
                            placeholder="Responsible"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="priority"
                            className="form-control"
                            onChange={this.handleInput}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>Hight</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                 </button>

                </form>
            </div>
        )
    }
}
export default FormTareas;