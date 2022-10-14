import './App.css';
import Button from './components/Button/Button';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from './assesnts/data'
import { useState} from 'react';


const App = () => {
  const [page, setPage] = useState(1)
  const userPerPage = 5; // her saayfada 5 adet resim olsun

  const indexoffLastUser = page * userPerPage;
  const İndexOffFirstUser = indexoffLastUser - userPerPage;

  const currentUsers = data.slice(İndexOffFirstUser, indexoffLastUser)

  return (
    <div className='App'>
       <Header from={İndexOffFirstUser + 1} to={İndexOffFirstUser + currentUsers.length}/>
       {currentUsers.map((item) => <Main key={item.id}{...item}/>)}
       <Button total = {Math.ceil(data.length / userPerPage)} page = {page} setPage = {setPage} />

    </div>
   
  )
}

export default App;
