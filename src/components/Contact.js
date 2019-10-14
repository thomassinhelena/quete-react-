import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOnLine: props.isOnline,
    };
  }
  changeOnLine = () => {
    const newOnLine = !(this.state.isOnLine)
    this.setState({isOnLine:newOnLine});
  }
  render() {
    return(
      <div className="Contact">
            <img alt="" src={this.props.avatar}/>
            <div>
            <h4>{this.props.name}</h4>
            {this.state.isOnLine ?
                <div className="status">
                    <div className="status-online" /><p onClick = {this.changeOnLine} className="status-text">Online</p>
                </div> : 
                <div className="status">
                    <div className="status-offline" /><p onClick = {this.changeOnLine}className="status-text">Offline</p>
                </div>
            }
            </div>
        </div>
    );
  }
}    

export default Contact;
