import { useNavigate } from "react-router-dom"
import { MobileContainer } from "../../components/MobileContainer/MobileContainer"
import './Welcome.css'
export const Welcome = ()=>{
    const navigate = useNavigate()
    return(
        <MobileContainer>
            <div className="welcome">
                <div>
                    <h2>Welcome to PopX</h2>
                    <div className="welcome-sub">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                    </div>
                </div>
                <div className="btn-continer">
                    <button className="create-account-btn" onClick={()=>navigate('/register')}>Create Account</button>
                    <button className="Registered-btn" onClick={()=>navigate('/signin')}>Already Registered? Login</button>
                </div>
            </div>
        </MobileContainer>
    )
}