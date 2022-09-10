//rfc yazinca otomatik React function gelir
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import { Grid } from 'semantic-ui-react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <h1>- - -</h1>
            <li>asd</li>

            <Router style={{ marginTop: "10.5em" }}>

                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products </Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart Detail</Link>
                    </li>
                </ul>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Categories />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            <Routes> <Route exact path='/home' element={<Home />} /> </Routes>
                            <Routes> <Route exact path='/products' element={<ProductList />} /> </Routes>
                            <Routes> <Route exact path='/products/:name' element={<ProductDetail />} /> </Routes>
                            <Routes> <Route exact path='/cart' element={<CartDetail />} /> </Routes>


                        </Grid.Column>
                    </Grid.Row>
                </Grid>


            </Router>


        </div>
    )
}

function Home() {
    return <h1>HOME</h1>
}