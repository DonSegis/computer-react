import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Contacto from './pag/Contacto';
import Home from './pag/Home';
import Login from './pag/Login';
import Nosotros from './pag/Nosotros';
import Tienda from './pag/Tienda';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>} />
                    <Route path='/nosotros' element={<Nosotros/>}/>
                    <Route path='/contacto' element={<Contacto/>}/>
                    <Route path='/tienda' element={<Tienda/>}/>
            </Routes> 
        </BrowserRouter>   
    )
}