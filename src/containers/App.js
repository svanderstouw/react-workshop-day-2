import React, { Component } from 'react';
import Headline from '../components/Headline/Headline'
 
class App extends Component {
  render() {
    // const words = ['hello', 'these', 'are', 'some', 'words']
    return (
      <div>
        <Headline isColor text={"Hello from props"}/>
        <Headline isColor={false} text={"Blog post number 1"}/>
        <Headline isColor text={"Some other headline"}/>
        {/* <ul>
            {words.map(word => <li>{word}</li>)}
        </ul> */}
        <p>This should not be styled...</p>
      </div>
    );
  }
}
export default App;