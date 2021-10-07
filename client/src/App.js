import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NewCustomer from './components/InputNewCustomer'
import CustomerTable from './components/CustomerTable/CustomerTable'


function App() {
  return (
    <div className="App">
      <NewCustomer />
      <CustomerTable />
      
    </div>
  );
}

export default App;
