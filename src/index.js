import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  // user location added here as, it is called only one time this is used for initial data loading
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

// write helper method when multiple return statement in render funtion as if there are multiple conditinal statements then it gets challenging to maintain things in rneder methos so we have moved this things to helper method like renderContent()
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>
    }

    return <Spinner message="Please accept location request"/>;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>
  };
};

ReactDom.render(<App />, document.querySelector("#root"));