//rfc
import React, { useState } from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {
    const [isAuthenticated, setisAuthenticated] = useState(true)

    function handleSignOut() { // herzaman handle gondermek daha sagliklidir
        setisAuthenticated(false)
    }
    function handleSignIn() {
        setisAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted fixed='top'/**fixed='true' ekleyince sayfanin top kismi  fixed kaliyor ancak hemen altina diger ogeler gorunmez olabiliyor*/>

                <Container>
                    <Menu.Item name='home' />
                    <Menu.Item name='messages' />
                </Container>

                <Menu.Menu position='right'>
                    <CartSummary />
                    {isAuthenticated
                        ? <SignedIn signOut={handleSignOut} />
                        : <SignedOut signedIn={handleSignIn} />}

                </Menu.Menu>
            </Menu>
            

        </div>
    )
}
