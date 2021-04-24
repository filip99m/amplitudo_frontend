import logo from './logo.svg';
import './App.css';
import ClassComponent from "./components/classComponent/ClassComponent";
import FuncComponent from "./components/funcComponent/FuncComponent";
import MyImage from "./components/myimage/MyImage";
import Table from "./components/table/Table";
import IdCard from "./components/idCard/IdCard";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ClassComponent/>
        <FuncComponent/>
        <MyImage/>
        <Table/>
      </header>*/}
        <IdCard name="Filip" surname="Marijanovic" city="Andrijevica" src="logo192.png"/>
        <IdCard name="Ana" surname="Marijanovic" src="logo192.png"/>
        <IdCard name="Marko" surname="Markovic" city="Andrijevica" src="logo192.png"/>
    </div>
  );
}

export default App;
