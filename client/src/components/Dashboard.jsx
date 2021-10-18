import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InputNewCustomer from './InputNewCustomer'
import CustomerTable from './CustomerTable/CustomerTable'
import CSVUpload from './CSVUpload'
import Search from './SearchFilter'
import InputNewTxtMessage from './InputNewTxtMessage'
import TextTable from './TextTable/TextTable'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [allCustomers, setAllCustomers] = useState([])
  const [filterCustomers, setFilterCustomers] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const [userAdded, setUserAdded] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchParam, setSearchParam] = useState('id')
  const [allTexts, setAllTexts] = useState([])
  const [messageAdded, setMessageAdded] = useState([])
  

  useEffect(() => {
    axios
    .get('http://localhost:7000/customers').then(response => {
      setIsLoading(false)
      const customers = response.data
      setAllCustomers(customers)
      setFilterCustomers(customers)
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

  useEffect(() => {
    setIsLoading(true)
    axios
    .get('http://localhost:7000/messages').then(response => {
      setIsLoading(false)
      setMessageAdded(false)
      const messages = response.data
      setAllTexts(messages)
    })
    .catch(error => {
      setIsLoading(false)
      setMessageAdded(false)
      setErrorMessage(error.message)
    })
  }, [messageAdded])

  useEffect(() => {
    setFilterCustomers(allCustomers.filter((customer => {
      return customer[searchParam].toString().toLowerCase().includes(searchTerm.toLowerCase())
    })))

  }, [searchTerm, searchParam, allCustomers])

  return (
    <>
    <CSVUpload setUserAdded={setUserAdded}/>
    <Search searchTerm={searchTerm}
      setSearchTerm={setSearchTerm} 
      searchParam={searchParam}
      setSearchParam={setSearchParam} />
    <InputNewCustomer setUserAdded = {setUserAdded}/>
    <CustomerTable customers={filterCustomers} isLoading={isLoading} />
    <InputNewTxtMessage setMessageAdded={setMessageAdded}/>
    <TextTable texts={allTexts} isLoading={isLoading} />
    </>
  )
}

export default Dashboard
