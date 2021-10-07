import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CustomerTable from './CustomerTable/CustomerTable'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [allCustomers, setAllCustomers] = useState([])
  const [errorMessage, setErrorMessage] = useState()

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

  return (
    <CustomerTable customers={allCustomers} isLoading={isLoading} />
  )
}

CustomerTable({customers: [], isLoading: false})

export default Dashboard
