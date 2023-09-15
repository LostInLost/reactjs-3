import { Component } from "react";

class Image extends Component {
    render() {
        return (
            <img src={this.props.linkGambar} alt="food" width={'500'}/>
        )
    }
}

export default Image