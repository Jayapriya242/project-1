import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllBooksComponent from './components/GetAllBooksComponents/GetAllBooksComponents';
import AddNewBooksComponent from './components/AddNewBooksComponents/AddNewBooksComponents';
import EditBooksComponent from './components/EditBooksComponents/EditBooksComponents';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Library App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >Home</Link>
                <Link to="/admin/add" >Add Books</Link>
                <Link to="/admin/edit" >Edit Books</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllBooksComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewBooksComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditBooksComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
