import Container from 'components/Container';
import './App.css';
import Aside from 'components/Aside';
import Viewer from 'components/Viewer';
import ListsProvider from 'context/ListsContext';
import EditProvider from 'context/EditContext';
import ItemsProvider from 'context/ItemsContext';


function App() {
  return (
    <div className="App">
      <Container>
        <ListsProvider>
          <ItemsProvider>
            <Aside />
            <EditProvider>
              <Viewer />
            </EditProvider>
          </ItemsProvider>
        </ListsProvider>
      </Container>
    </div>
  );
}

export default App;
