import React from 'react'
import { Navigate, Route } from 'react-router-dom'
import { useUser } from '../../Context'

const ProtectedRoute = (props) => {
  const { login } = useUser()
  if (login) return <Route {...props} />
  else if (!login) return <Navigate to="/login" />
  else return null
}
export default ProtectedRoute
