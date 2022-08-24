import React from 'react';
import PropTypes from 'prop-types';

const fullName = ({firstName,lastName,handleEvent}) => {
    
    
    
    return (
        <div >
    <h1>{firstName} {lastName}</h1>
    <button onClick={()=>handleEvent(`${firstName} ${lastName}`)}>User</button>
    </div>

    );
};
fullName.propTypes = {
    lastName: PropTypes.string
  };

export default fullName;