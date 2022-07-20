React использует деклоративный (говорим какой результат нам нужен) подход, основанный на компонентах.
1 использует препроцессор JSX, помесь HTML JS. Можем создавать разметку и прописывать логику в одном месте.
2 Существует алгоритм сравниния (reconciliation algorithm) который позволят отслеживать изменения элементов и обновлять только их а не все вместе.
3 Virtual DOM - лёгкая копия в которой мы работаем, а потом переносим на основное DOM дерево. Элементы DOM содеражт только то что нужно, пока мы не добавим туда то что нам необходимо.

## Create New App
npx create-react-app my-app
cd my-app
npm start

## JSX JS
const elem = <h2>Hello world!</h2>;
то же самое на JS:
const elem = React.createElement('h2', {className: 'nameOfCssClass'}, 'Hello World!');

если элемент содержит больше одной строки то нужны круглые скобки, всегда должен быть один корневой элемент (в примере div), переменную используем через скобки:
const elem = (
let text = 'Hello World';
  <div>
    <h2>Some text: {text} {2+2}</h2> // не можем помещать обьекты но можем всё остальное
    <button /> // используем чтобы создавать кнопки без контента
    <button tabIndex='0' >Click</button> // Css записываем в camelCase
    <button className='first' >Click</button> // чтобы присвоить класс, так же htmlFor
  </div>
);

### Компоненты
- всегда написаны с большой буквы.


const Header = () => { // реакт компонент через стрелочную функцию
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

function Btn() { // пример логики внутри
  const res = 'Log in';
  const logged = true;
  return <button>{logged ? 'Enter' : res}</button> // использование тернарного оператора вместо if else (их нельзя тут использовать)
}

добавление компонента с помощью класса с наследованием из реакт компонента (вверху должны импортировать import React from 'react';) обязательно должен быть render()
class Field extends React.Component {
  render() {
    const holder = 'Enter here';
    const styleField = {
      width: '100px'
    };
    return <input placeholder={holder} type='text' style={styleField}/>
  };
}

## Свойства Props компонентов // пропсы (name sorname link) являються не изменяемыми и доступны только на чтение
function WhoAmi (props) { // function WhoAmi ({name, surname, link}) {
  return(
    <div>
      <h1>My name is {props.name}, surname - {props.surname}</h1> // <h1>My name is {name}, surname - {surname}</h1>
      <a href={props.link}>My Profile</a>
    </div>  
  )
};
function App() {
  return (
    <div className="App">
      <WhoAmi name="John" surname="Smith" link="facebook.com"/>
      <WhoAmi name="Ivan" surname="Pavlov" link="twitter.com"/>
    </div>
  );
};

ID MAP и получение элементов с базы
const data = [
        {name: 'John C.', salary: 800, increase: true, id: '1'},
        {name: 'David J.', salary: 3000, increase: false, id: '2'},
        {name: 'Ammy C.', salary: 5000, increase: false, id: '3'}
    ];
const EmployersList = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployersListItem key={id} {...itemProps}/> // <EmployersListItem name={item.name} salary={item.salary}/>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

this.nextYear = this.nextYear.bind(this); // привязка метода/функции к конкретному экземляру класса, чтобы не терять контекст вызова
<button onClick={() => this.nextYear()}>{this.state.text}</button> // вызов через анонимную функцию, чтобы не терять контекст вызова


## состояние компонента state 
- компонент может содержать состояние которое может меняться, 
может быть как у классовых так и у функциональных компонентов, 
можно менять только через команду setState, 
это асинхронная операция (если надо синхронную то используем каллбек функц), 
можем менять только то что нам нужно

import React, {Component} from 'react'; // импортируем компонент из реакт

class WhoAmi extends Component { // создали классовый элемент с наследованием компонента из React
  constructor(props) { // задали пропсы для конструктора
    super(props);
    this.state = { // используем state чтобы добавить изменяющиеся значения
      years: 27,
      text: '+++'
    }
  }

  // используем такую конструкцию есил нам не важно предыдущее результат не зависит от предыдущего значения state
  nextYear2 = () => { 
    this.setState({
      years: this.state.years + 1 
    })
  }

  // Используем этот вариант (со стрелочной функцией) если результат зависит от предыдущего значения state,
  nextYear = () => { 
    this.setState(state => ({
      years: state.years + 1 // меняем значение. команда меняет только значения которые изменились и указаны тут, остальные значения (text) передадуться без измененй
  }))
  }

  render() {
    const {name, surname, link} = this.props; // деструктуризируем значения из props чтобы применить их удобно
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {this.state.years}</h1>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <WhoAmi name="John" surname="Smith" link="ya.com"/>
      <WhoAmi name="Alex" surname="Ford" link="ind.com"/>
    </div>
  )
}

## События
onClick={function()}, onChange={function()}, 

<input type="text" onInput={this.commitInputChanges} />
commitInputChanges = (e) => {
  console.log(e.target.value);
}

<input type="text" onInput={(e) => this.commitInputChanges(e, 'some color')} /> // вариант передачи аргумента через стрелочную функцию

[e.target.name]: e.target.value // скобки чтобы записать свойство в обьект

// Упраляемый элемент/компонент. значене поместили в value и теперь оно упраляемо reactom
<input type="text"
  className="form-control new-post-label"
  placeholder="Как его зовут?" 
  name="name"
  value={name}
  onChange={this.onValueChange}/>