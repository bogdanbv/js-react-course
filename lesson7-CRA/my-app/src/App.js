
import React, {Component} from 'react';
import './App.css';

class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      text: '+++',
      position: ''
    }
  }

  // используем такую конструкцию есил нам не важно предыдущее результат не зависит от предыдущего значения state
  // nextYear = () => { 
  //   this.setState({
  //     years: this.state.years + 1
  // })
  // }

  // Используем этот вариант (со стрелочной функцией) если результат зависит от предыдущего значения state,
  nextYear = () => { 
    this.setState(state => ({
      years: state.years + 1, // команда меняет только значения которые изменились и указаны тут, остальные значения (text) передадуться без измененй
    }))
  }

  commitInputChanges = (e, color) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;
    console.log(name);
    console.log(this.props);
    return (
      <div>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <a href={link}>My profile</a>
        <form>
          <span>Введите должность</span>
          <input type="text" onInput={(e) => this.commitInputChanges(e, 'some color')} />
        </form>
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

export default App;
