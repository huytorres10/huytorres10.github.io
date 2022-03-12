import React from "react";
import "./ToDo.css";

class ToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = { task: props.task, key: props.key };
	}
	render() {
		return (
			<li className={this.state.task.done ? "task-item task-item--done" : "task-item"} key={this.state.key}>
				<img className="icon icon-bag" src={process.env.PUBLIC_URL + "./icon/bag.png"} alt="icon bag" />
				<span className="task-item--value"> {this.state.task.value}</span>
				<img
					className="icon icon-check"
					src={process.env.PUBLIC_URL + "./icon/check.png"}
					alt="icon check"
					onClick={() => this.props.doneTask(this.state.task)}
				/>
				<img
					className="icon icon-recycle-bin"
					src={process.env.PUBLIC_URL + "./icon/recycle-bin.png"}
					alt="icon recycle bin"
					onClick={() => this.props.deleteTask(this.state.task.id)}
				/>
			</li>
		);
	}
}

export default ToDo;
