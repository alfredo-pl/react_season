import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';

const App = ( ) => {
    return ( 
        <div>
            hi there!
            <SeasonDisplay></SeasonDisplay>
        </div>
     );
}
 
export default App;
ReactDOM.render(<App />, document.querySelector('#root'))