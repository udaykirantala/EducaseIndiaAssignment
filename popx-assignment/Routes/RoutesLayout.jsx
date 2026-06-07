import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Welcome } from '../pages/WelcomePage/Welcome'
import { Register } from '../pages/Register/Register'
import { Signin } from '../pages/Signin/Signin'
import { AccountSettings } from '../pages/AccountSettings/AccountSettings'
export const RoutesLayout = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/account-settings' element={<AccountSettings/>}/>
            </Routes>
        </BrowserRouter>
    )
}