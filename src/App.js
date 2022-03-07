import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { MenuContextProvider } from './store/MenuContext';

function App() {
  return (
    <MenuContextProvider>
      <Header />
      <Main />
    </MenuContextProvider>
  )
}

export default App;
