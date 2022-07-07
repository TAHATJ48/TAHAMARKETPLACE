import { deleteToken } from "./API";
import { useNavigate } from "react-router-dom";



export default function Logout() {
    let navigate = useNavigate();
    deleteToken();
    window.location.reload(false);
    navigate('/login')                

}