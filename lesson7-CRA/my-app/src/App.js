
import React from 'react';
import './App.css';


const Header = () => { // реакт компонент
  return <h2>Hello World!</h2> // содержит внутри один реакт элемент
}

function Btn() { // компонент через обычную функцию 
  const res = () => {
    return 'Log In';
  }
  const styleField = {
    width: '300px'
  }
  return <button style={styleField}>{res()}</button> // использование функции внутри и применение инлан класса
}

class Field extends React.Component {
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '100px'
    };

    return <input placeholder={holder} type='text' style={styleField}/>
  };
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
