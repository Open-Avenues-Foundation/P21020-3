import './App.css';
import NewCustomer from './components/InputNewCustomer'
import CustomerTable from './components/customertable/customerTable'

function App() {
  return (
    <div className="App">
      <NewCustomer />
      <CustomerTable />
      
    </div>
  );
}

export default App;
