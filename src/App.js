import {useState,useEffect} from 'react';

import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]); 
  const [filteredMonster,setFilteredMonster] = useState(monsters);


  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) =>  response.json())
      .then((user) => setMonsters(user))     
      
  },[])

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) =>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

   setFilteredMonster(newFilteredMonster);
      
  },[monsters,searchField]);

const onSearchChange = (event) => {
        const serachFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(serachFieldString) ;  
  } 



  return (
    <div className='App' > 
     <h1 className='app-title'>Monsters Rolodex</h1>  
    <SearchBox 
    className='monsters-search-box' 
    onChangeHandler={onSearchChange} 
    placeholder='search monsters'/>
   
    <CardList monsters={filteredMonster}/>
   
    </div>    
  )







  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then((response) =>  response.json())
  //   .then((user) => this.setState(() => {
  //     return {monsters:user}
  //   },
  //   // () => console.log(this.state)
  // ))   
   

  // }




}

export default App;
