import React,{Component} from 'react';

class CheckList extends Component {
  render() {
    let tasks=this.props.tasks.map((task) =>(
      <li key={task.id} className="tasklist_task">
        <input type="checkbox" defaultChecked={task.done}/>
        {task.name}
        <a href="#" className="CheckList_task--remove"/>
      </li>
    ));
    return(
      <div className="CheckList">
        <ul>
          {tasks}
        </ul>
      </div>
    );
  }
}
export default CheckList;
