import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";


function App() {
  const authAuthentication = useSelector(state=>state.auth.authAuthentication);

  return (
    <Fragment>

      <Header />
      {!authAuthentication &&<Auth />}
      {authAuthentication && <UserProfile/>}
      {authAuthentication && <Counter />}

    </Fragment>
  );
}

export default App;
