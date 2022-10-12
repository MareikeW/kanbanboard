import { Fragment } from 'react';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <Fragment>
      {/*Globale Styles müssen als Geschwisterkomponente zu den Haupt Komponenten hinzugefügt werden.*/}
      <GlobalStyle />
    </Fragment>
  );
}

export default App;
