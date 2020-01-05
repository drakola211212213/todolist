import React , {Component} from 'react';

class ListUp extends Component {
    
    render() {
        
        return (
            <div>
                <h2>Todo Task</h2>
                <form onSubmit={this.props.addTask}>
                    <input type='text' className="submit" placeholder="What needs to do?" 
                    onChange={this.props.updateitem} value={this.props.current}/>
                    <button className="btn btn-success">Create</button>
                </form><br/>
            </div>
        )
    }
}

export default ListUp;