import './App.sass';
import PizzaInput from './components/PizzaInput/PizzaInput.jsx';
import ShowResult from './components/ShowResult/ShowResult.jsx';
import AppProvider from './AppContext'
import Pizza from './components/Pizza/Pizza';

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <PizzaInput name='uno' />
        <PizzaInput name='due' />
        <ShowResult /> */}
        <Pizza />
      </div>
    </AppProvider>
  );
}

export default App;
