import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundarie from "../errorBoundarie/ErrorBoundarie"

import decoration from '../../resources/img/vision.png';

const App = () => {

  const [selectedChar, setChar] = useState(null)

  const onSelectChar = (id) => {
    setChar(id)
  }

  return (
    <div className="app">
    <AppHeader/>
        <main>
          <ErrorBoundarie>
            <RandomChar/>
          </ErrorBoundarie>
            
          <div className="char__content">
            <ErrorBoundarie>
              <CharList onSelectChar = {onSelectChar}/>
            </ErrorBoundarie>
            <ErrorBoundarie>
              <CharInfo charId = {selectedChar}/>
            </ErrorBoundarie>
          </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </main>
    </div>
  );
  }

export default App;