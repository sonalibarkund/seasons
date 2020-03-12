import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui dimmer active">
      <div className="ui big text loader">
        {props.message}
      </div>
    </div>
  );
};

// If no message is passed to spinner component then defaultprops message will be dispalyed
Spinner.defaultProps = {
  message: 'Loading...'
};

export default Spinner;