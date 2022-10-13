import { Fragment } from 'react';
import GlobalStyle from './globalStyles';
import Button from './components/Button';
import DeleteBoard from './pages/DeleteBoard';

function App() {
  return (
    <Fragment>
      {/*Globale Styles müssen als Geschwisterkomponente zu den Haupt Komponenten hinzugefügt werden.*/}
      <GlobalStyle />
      <Button text="+ Add New Column" radius="24px" />
      <Button text="+ Add New Subtask" fontSize="13px" backgroundColor="rgba(99, 95, 199, 0.1)" hoverColor="rgba(99, 95, 199, 0.25)" color="#635FC7" />
      <Button text="Create Task" fontSize="13px" />
      <Button text="+ Add New Subtask" fontSize="13px" backgroundColor="rgba(99, 95, 199, 0.1)" hoverColor="rgba(99, 95, 199, 0.25)" color="#635FC7" />
      <Button text="Create New Board" fontSize="13px" />
      <Button 
        text="+ Add New Column" 
        fontSize="13px" 
        backgroundColor="rgba(99, 95, 199, 0.1)" 
        hoverColor="rgba(99, 95, 199, 0.25)" 
        color="#635FC7" />
      <Button 
        text="Save Changes" 
        fontSize="13px" />
      <Button 
        text="+ Add New Column" 
        fontSize="13px" 
        backgroundColor="rgba(99, 95, 199, 0.1)" 
        hoverColor="rgba(99, 95, 199, 0.25)" 
        color="#635FC7" />
      
      <DeleteBoard />
    </Fragment>
  );
}

export default App;
