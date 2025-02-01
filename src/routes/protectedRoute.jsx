import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch('/api/user');
        const user = await response.json();
        setUser(user);
      };
      fetchUser();
    }, []);
  
    if (!user) return <Redirect to="/login" />;
    return children;
  };

export default ProtectedRoute;