import { getToken } from '../pages/auth/API';
import { Outlet , Navigate} from 'react-router-dom'

const ProtectedRoute = () => {
    const isAuth = getToken();
    return isAuth ? <Outlet /> : <Navigate to="/login"/> ;
};

export default ProtectedRoute;