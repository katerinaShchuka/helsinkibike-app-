import 'rsuite/dist/rsuite.min.css';
import './App.css';
import TopNavBar from './components/TopNavBar';
import AllRoute from './routes/AllRoute';

function App() {
  return (
    <>
      <TopNavBar/>
      <AllRoute />
    </>
  );
}

export default App;
