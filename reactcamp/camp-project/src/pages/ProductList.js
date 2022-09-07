import React, { useState, useEffect } from 'react'
import { Table } from 'semantic-ui-react'
import ProductService from '../services/productService';

export default function ProductList() {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState('');
    const [demoEffect, setDemoEffect] = useState(null);
    let productService = new ProductService()
    
    useEffect(() => {
        productService.getProducts().then(result => setProducts(result.data.data))

    })
    useEffect(() => {

        productService.getProductByName(name).then(result => setDemoEffect(result.data.data))
    }, [name] // name her degistinde useEffect'i calistir
    )
    return (
        <div>
            <input style={{ margin: 20 }} value={name} onChange={(e) => setName(e.target.value)}></input>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Product Price</Table.HeaderCell>
                        <Table.HeaderCell>Unit In Stock</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        demoEffect ? table(demoEffect) : products.map(product => (table(product)))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}

const table = (product) => {
    return <Table.Row key={product.id}>
        <Table.Cell>{product.productName}</Table.Cell>
        <Table.Cell>{product.unitPrice}</Table.Cell>
        <Table.Cell>{product.unitsInStock}</Table.Cell>
        <Table.Cell>{product.quantityPerUnit}</Table.Cell>
        <Table.Cell>{product.category.categoryName}</Table.Cell>
    </Table.Row>
}
