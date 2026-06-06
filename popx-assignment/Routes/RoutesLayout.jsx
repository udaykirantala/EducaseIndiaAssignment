import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Welcome } from '../pages/WelcomePage/Welcome'
import { Register } from '../pages/Register/Register'
export const RoutesLayout = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}