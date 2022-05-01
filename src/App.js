// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplatesExpressions';
import Event from './components/Events';
import MyComponent from './components/MyComponent';
import Challenge from './components/Challenge';
// styles / CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Event />
      <Challenge />
    </div>
  );
}

export default App;
