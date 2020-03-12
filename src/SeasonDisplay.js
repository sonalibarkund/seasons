import './SeasonDisplay.css';
import React from 'react';


const getSeason = (lat, month) => {
  if(month > 2 && month < 9){
    return lat > 0 ? 'winter' : 'summer';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const seasonConfig = {
  winter: {
    text: 'Burr.. its chilly',
    iconName: 'snowflake'
  },
  summer: {
    text: 'Lets hit beach',
    iconName: 'sun'
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]
  return(
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
};

export default SeasonDisplay;