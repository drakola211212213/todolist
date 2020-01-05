import React , {Component} from 'react';

class ListDown extends Component {

    state = {
        isEdit : true
    }

    secondList = () => {
        return(
            
            <div>
                <form onSubmit={this.saveTask}>
                    <input type="text"  defaultValue={this.props.item.name} className="submit" 
                    ref ={(v) => this.input = v} />
                    <button className="btn btn-success" >Save</button>  
                </form> <br/>   
            </div>
        )
    }

    saveTask = (e) => {
        e.preventDefault();
        this.props.updateTask(this.props.index, this.input.value )
        this.toggle()
    }

    firstList = () => {
        return(
            <div>
            <li className="list-group-item">
                {this.props.item.name}
                <button className="btn btn-danger" onClick={() => this.props.deleteTask(this.props.index)}>Delete</button>
                <button className="btn btn-primary" onClick = {() => this.toggle()}>Edit Task</button>
            </li><br/>
            
         </div>
        )
    }
    toggle = () => {
        let isEdit = this.state.isEdit
        this.setState({
            isEdit: !isEdit
        })
    }
   
    
    render() {
      let isEdit = this.state.isEdit
        
        return (
            <div>
                {isEdit ? this.firstList() : this.secondList()}
            </div>
           
        )
    }
}

export default ListDown;