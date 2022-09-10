import React from 'react'
import { BrowserRouter as Navigate, Link, Route, Router, Routes } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductDetail from '../pages/ProductDetail'

export default function CartSummary() {
  return (
    <div>
    
      <Dropdown item text='Cart'>
        <Dropdown.Menu>

          <Dropdown.Item>
            <Navigate to="/cart" replace="true">Acer Laptop</Navigate>
          </Dropdown.Item>
          <Dropdown.Item>Asus Laptop</Dropdown.Item>
          <Dropdown.Item>Dell Laptop</Dropdown.Item>
          <Dropdown.Divider />
    {/* PROBLEM 1 */}
          {/* <Dropdown.Item href="/cart">Go to Cart */}

          {/* </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
