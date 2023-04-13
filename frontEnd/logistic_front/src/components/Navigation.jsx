import { useNavigate } from "react-router-dom"
import NavItem from "./NavItem"

const Navigation = (props) => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('client')
        navigate('/')

    }
    return (
        <nav className="flex justify-between px-5 mb-5 mt-3">
            <div className="flex gap-4">
                <NavItem name="Home" page={0} setState={props.setPage} selected={props.page === 0 ? true : false} />
                <NavItem name="Trucks" page={1} setState={props.setPage} selected={props.page === 1 ? true : false} />
            </div>

            <button onClick={logout}>Logout</button>
        </nav>
    )
}

export default Navigation