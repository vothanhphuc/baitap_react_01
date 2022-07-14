import React from 'react';
import './UpAndDown.scss';

class UpAndDown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value_02: Number(this.props.start)
		};

		this.up_02 = this.up_02.bind(this);
		this.down_02 = this.down_02.bind(this);
	}
	up_02() {
		this.setState((state) => ({
			value_02: state.value_02 + 1
		}));
	}

	down_02() {
		this.setState((state) => ({
			value_02: state.value_02 - 1
		}));
	}
	render() {
		return (
			<div className="UpDown">
				<span>Value: {this.state.value_02}</span>
				<div className="UpDown__actions">
					<button className="btn btn--silver" onClick={this.up_02}>
						Increase
					</button>
					<button className="btn btn--silver" onClick={() => this.down_02()}>
						Decrease
					</button>
				</div>
			</div>
		);
	}
}
export default UpAndDown;
