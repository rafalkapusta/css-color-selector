import React from 'react';
import 'bulma';
import './style/style.scss';
import ColorSelector from './components/ColorSelector';

function App() {
  return (
    <>
      <div className="notification is-warning has-text-centered">
        Type CSS color name into input field and chose color from autocomplete list with click. Clicking on the save button enables to save up to 10
        colors. <br />
        Project is ongoing and new features are continuously implemented. Arrow keys and enter <strong>are not</strong> supported for chosing color at
        the moment.
      </div>
      <ColorSelector />
    </>
  );
}

export default App;
