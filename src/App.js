import './App.css';
import Content from './components/Content';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 col-md-4"><Menu/></div>
        <div className="col"><Content/></div>
      </div>
    </div>
  );
}

export default App;
