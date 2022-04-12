import { useState } from 'react'
import DisplaySimpson from './DisplaySimpson'
import axios from 'axios'

import './App.css'

function App() {
  const [quote, setQuote] = useState(null);
  
    const getQuote = () => {
      // Send the request  
      axios  
        .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')  
        // Extract the DATA from the received response  
        // .then((response) => response.data)  
        // Use this data to update the state  
        .then(({data}) => {  
          setQuote(data[0]);  
        });
    
    };
    return (
      <div>
        
        <button type="button" onClick={getQuote}>Get Quote</button>
        <DisplaySimpson {...quote}/>
      </div>
    );
    
  
}

export default App
