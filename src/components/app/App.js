import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundarie from "../errorBoundarie/ErrorBoundarie"

import decoration from '../../resources/img/vision.png';

class App extends Component {

  state = {
    selectedChar: null
  }

  onSelectChar = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render (){
    return (
      <div className="app">
      <AppHeader/>
          <main>
            <ErrorBoundarie>
              <RandomChar/>
            </ErrorBoundarie>
              
            <div className="char__content">
              <ErrorBoundarie>
                <CharList onSelectChar = {this.onSelectChar}/>
              </ErrorBoundarie>
              <ErrorBoundarie>
                <CharInfo charId = {this.state.selectedChar}/>
              </ErrorBoundarie>
            </div>
              <img className="bg-decoration" src={decoration} alt="vision"/>
          </main>
      </div>
    );
  }
}

export default App;