import React, { Component } from 'react';
import NavBarVivalinda from './ components/NavBarVivalinda' 
import Footer from './ components/Footer'
import './App.css';
import logPhotos from './instagram'

class AppPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: []
    };
}
componentDidMount() {
    this.props.promise.then(value => {
        this.setState({value});
    });
}

  render() {
    return (
      <>
      <NavBarVivalinda/>
      <div className="row no-gutters photoContainer">
          {
           this.state.value.map( ( item, i ) =>  { 
             return (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i} >
                <img className="photoCard"   alt="" src={item} />
             </div>
           )
           })
         }
      </div>
      <Footer />
      </>
    )
  }
}

const App = () => <div><AppPhoto promise={logPhotos()} /></div>

export default App;
