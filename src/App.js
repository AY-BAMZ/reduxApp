import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        {/* <ItemContainer  cake/>
        <ItemContainer />
        <HookCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HookIceCreamContainer />
        <NewCakeContainer /> */}
      </div>
    </Provider>
  );
}



export default  App;
