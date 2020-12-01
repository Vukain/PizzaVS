import './App.sass';
import PizzaInput from './components/PizzaInput/PizzaInput.jsx';
import ShowResult from './components/ShowResult/ShowResult.jsx';
import AppProvider from './AppContext'

function App() {
  return (
    <AppProvider>
      <div className="App">
        <PizzaInput name='uno' />
        {/* <ShowResult /> */}
      </div>
    </AppProvider>
  );
}

export default App;
