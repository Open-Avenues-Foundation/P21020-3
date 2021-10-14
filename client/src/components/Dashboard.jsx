import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputNewCustomer from './InputNewCustomer'
import CustomerTable from './CustomerTable/CustomerTable'
import CSVUpload from './CSVUpload'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [allCustomers, setAllCustomers] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const [userAdded, setUserAdded] = useState(false)
  

  useEffect(() => {
    axios
    .get('http://localhost:7000/customers').then(response => {
      setIsLoading(false)
      const customers = response.data
      setAllCustomers(customers)
    })
    .catch(error => {
      setIsLoading(false)
      setErrorMessage(error.message)
    })
  }, [])

  useEffect(() => {
    setIsLoading(true)
    axios
    .get('http://localhost:7000/customers').then(response => {
      setIsLoading(false)
      setUserAdded(false)
      const customers = response.data
      setAllCustomers(customers)
    })
    .catch(error => {
      setIsLoading(false)
      setUserAdded(false)
      setErrorMessage(error.message)
    })
  }, [userAdded])

  return (
    <>
    <CSVUpload setUserAdded = {setUserAdded}/>
    <InputNewCustomer setUserAdded = {setUserAdded}/>
    <CustomerTable customers={allCustomers} isLoading={isLoading} />
    </>
  )
}

export default Dashboard
