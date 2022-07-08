import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  console.log('render');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const inputOnChangeHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        inputOnChangeHandler={inputOnChangeHandler}
        className='search-box'
        placeholder='Search monsters'
      ></SearchBox>
      <CardList monsters={filteredMonsters}></CardList>
    </div>
  );
};

export default App;

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => ({
//           monsters: users,
//         }))
//       );
//   }

//   inputOnChangeHandler = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   render() {
//     const { inputOnChangeHandler } = this;
//     const { monsters, searchField } = this.state;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           inputOnChangeHandler={inputOnChangeHandler}
//           className='search-box'
//           placeholder='Search monsters'
//         ></SearchBox>
//         <CardList monsters={filteredMonsters}></CardList>
//       </div>
//     );
//   }
// }

// export default App;
