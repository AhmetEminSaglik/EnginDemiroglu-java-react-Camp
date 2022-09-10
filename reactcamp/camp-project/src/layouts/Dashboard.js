//rfc yazinca otomatik React function gelir
import React, { Component } from 'react'
import Navi from './Navi'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        {/* <ProductList/> */}
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<ProductList />} />

                            </Routes>
                        </BrowserRouter>

                    </Grid.Column>
                </Grid.Row>
            </Grid>


        </div>
    )
}
