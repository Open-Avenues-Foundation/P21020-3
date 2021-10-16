import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CSVUpload from './components/CSVUpload';
// import NewCustomer from './components/InputNewCustomer'
// import CustomerTable from './components/CustomerTable/CustomerTable'
import Dashboard from './components/Dashboard'
import InputNewTxtMessage from './components/InputNewTxtMessage'
import TextTable from './components/TextTable/TextTable'

function App() {
  return (
    <div className="App">
      <Dashboard />
      <InputNewTxtMessage/>
      <TextTable />
      
    </div>
  );
}

export default App;
