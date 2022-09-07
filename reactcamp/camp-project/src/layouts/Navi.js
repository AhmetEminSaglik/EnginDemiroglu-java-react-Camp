//rfc
import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'

export default function Navi() {
    return (
        <div>
            <Menu inverted  fixed='top'/**fixed='true' ekleyince sayfanin top kismi  fixed kaliyor ancak hemen altina diger ogeler gorunmez olabiliyor*/>

                <Menu.Item
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />
                <Container>
                    <Menu.Item name='Container Demo' />
                </Container>



                <Menu.Menu position='right'>
                    <CartSummary />
                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        </div>
    )
}
