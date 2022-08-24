import React, {Component} from 'react'
import PropTypes from 'prop-types';
class Bio extends Component {
    render(){
        
    return (
        <div className="media">
            <img src="p1.jpeg" className="avatar" alt="Biophoto"  />
            <div className="media-body">
            <h5>{this.props.FullName}</h5>
            <span >Age:</span> {this.props.Age} <br/>
            
            <span >Interests:</span>{this.props.Interests}<br/>
            <span >Bio:</span>{this.props.FullName} is {this.props.Age} years old, I like {this.props.Interests}
            </div>
        </div>
    )
}}
Bio.propTypes = {
    Age: PropTypes.number
  };

export default Bio;

