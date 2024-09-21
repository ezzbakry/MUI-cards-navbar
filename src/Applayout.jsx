import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Navbar/Navbar'

export default function Applayout() {
    return <>
        <Header></Header>

        <Outlet></Outlet>
    </>

}