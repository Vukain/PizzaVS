import './App.sass';
import PizzaInput from './components/PizzaInput/PizzaInput.jsx';
import ShowResult from './components/ShowResult/ShowResult.jsx';
import AppProvider from './AppContext'
import Pizza from './components/Pizza/Pizza';
import Plate from './components/Plate/Plate';

function App() {
  return (
    <AppProvider>
      <div className="App">
        {/* <PizzaInput name='uno' />
        <PizzaInput name='due' />
        <ShowResult /> */}

        <Pizza />
        {/* <Plate /> */}
      </div>
    </AppProvider>
  );
}

export default App;
