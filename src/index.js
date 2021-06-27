import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import Spinner from './components/Spinner/Spinner';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ""}  
    }

    //methods lifecycle
    //this method performs an initial data load for the component
    componentDidMount(){ 
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({ lat: position.coords.latitude}),
            err=> this.setState({errorMessage: err.message})
        );
    }

    /* 
    componentDidUpdate(){
        console.log("My component was just updated - it rerendered!");
    } */


    renderContent(){
        
        /*  {this.state.errorMessage && !this.state.lat ? "Error :" + this.state.errorMessage : "Latitud : "+this.state.lat } */
           
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if( !this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        
        return <Spinner message="Please accept location request"/>;  
    }


    //React says we have to define render
    render (){
        return (
            <div className="container">
               {this.renderContent()}
           </div>
        )   
    } 
}
 
export default App;
ReactDOM.render(<App />, document.querySelector('#root'))