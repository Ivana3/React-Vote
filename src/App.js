import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
      super(props);
      this.state = {
         languages : [
             {name: "React", votes: 0},
             {name: "Angular", votes: 0},
             {name: "Vue.js", votes: 0}
          ]
     }
}

vote (i) {
   let newLanguages = [...this.state.languages];
   newLanguages[i].votes++;
   function swap(array, i, j) {
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
   this.setState({languages: newLanguages});
}

render(){
  return(
      <>
          <h1>Vote your framework!</h1>
          <div className="languages">
             {
                 this.state.languages.map((lang, i) =>
                     <div key={i} className="language">
                         <div className="voteCount">
                              {lang.votes}
                         </div>
                         <div className="languageName">
                              {lang.name}
                         </div>
                         <button onClick={this.vote.bind(this, i)}>Vote Here</button>
                     </div>
                 )
           }
      </div>
    </>
   );
 }
}


export default App;
