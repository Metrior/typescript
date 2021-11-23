import React, { Suspense } from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import setAuthToken from "./utils/setAuthToken";
// import List from "./components/List/List";

const List = React.lazy(() => import('./components/List/List'));


function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
            <List/>
        </Suspense>
    </div>
  );
}

export default App;
