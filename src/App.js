import logo from './logo.svg';
import './App.css';
import Cube from './components/cube';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Cube />
        </div>
      </div>
    </div>
  );
}

export default App;
