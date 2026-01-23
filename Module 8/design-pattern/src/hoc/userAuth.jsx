import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const userAuth = (WrappedComponent) => {
  function AuthComponent(props) {
    const navigate = useNavigate();
    const isAuth = true; // later replace with real auth logic

    useEffect(() => {
      if (!isAuth) {
        navigate("/", { replace: true });
      }
    }, [isAuth, navigate]);

    if (!isAuth) return null;

    return <WrappedComponent {...props} hoc="hello hoc" />;
  }

  // 👇 Good practice for debugging
  AuthComponent.displayName = `userAuth(${WrappedComponent.name})`;

  return AuthComponent;
};

export default userAuth;
