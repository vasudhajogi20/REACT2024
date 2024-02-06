import { Outlet } from "react-router-dom";
import {Link} from 'react-router-dom';

function User(){
    return <>
    <div>
        <button><Link to = "Orders" >Orders</Link> </button>
        <button><Link to = "Profile" >Profile</Link> </button>
        <button><Link to = "Cart" >Cart</Link> </button>
        
        </div>
        <h1>This is user Component</h1>
        <Outlet/>
        </>
}
export function Orders(){
    return<>
    <h1>This is user order Component</h1>
    </>
}
export function Profile(){
    return<>
 
    <h1>This is Profile page</h1>
    </>
}
export function Cart(){
    return<>
    <h1>This is Cart page</h1>
    </>
}
export default User;