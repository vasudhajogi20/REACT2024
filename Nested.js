import Home from './pages.jsx/Home';
import About from './pages.jsx/About';
import Contact from './pages.jsx/Contact';
import User,{Orders,Profile,Cart} from "./pages.jsx/User";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';

const Header=()=>{
    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/"></Link></li>


            </ul>
        </div>
    )
}

const Nested = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
        

                <Route path="/user" element={<User/>}>
                    <Route path="orders" element={<Orders/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    </Route>

                
                </Routes></BrowserRouter>

        </div>
    );
};

export default Nested;