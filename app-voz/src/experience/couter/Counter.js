import React from "react";
import './Counter.scss';
import Num from "./Num";

class Counter extends React.Component {
    hello() {
        alert("Xin chào.");
    }
    render() {
        return (
            <div className="counter">
                <h2 style={{color: "var(--red)", fontSize: "1.2em"}}>{this.props.heading}</h2>
                <Num start={this.props.start}/>
                <div className="counter__actions">
                    <button className="btn btn--yellow" onClick={this.hello}>Xin chào</button>
                    <button className="btn btn--blue" onClick={() => console.log("Tạm biệt")}>Tạm biệt</button>
                </div>
            </div>
        );
    }
}

export default Counter;
