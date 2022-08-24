import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PasswordRecovery from '../pages/PasswordRecovery'
import SendEmail from '../pages/SendEmail'
import NewPassword from '../pages/NewPassword'
import MyAccount from '../pages/MyAccount'
import CreateAccount from '../pages/CreateAccount'
import Checkout from '../pages/Checkout'
import Orders from '../pages/Orders'
import NotFound from '../pages/NotFound'
import useInitialState from '../hooks/useInitialState'

import AppContext from '../context/AppContext'

import '@styles/global.css'

const App = () => {
    const initialState = useInitialState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/login" element={<Login />}></Route>
                        <Route
                            exact
                            path="/password-recovery"
                            element={<PasswordRecovery />}
                        ></Route>
                        <Route
                            exact
                            path="/send-email"
                            element={<SendEmail />}
                        ></Route>
                        <Route
                            exact
                            path="/new-password"
                            element={<NewPassword />}
                        ></Route>
                        <Route
                            exact
                            path="/account"
                            element={<MyAccount />}
                        ></Route>
                        <Route
                            exact
                            path="/signup"
                            element={<CreateAccount />}
                        ></Route>
                        <Route
                            exact
                            path="/checkout"
                            element={<Checkout />}
                        ></Route>
                        <Route
                            exact
                            path="/orders"
                            element={<Orders />}
                        ></Route>
                        <Route path="*" exact element={<NotFound />}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App
