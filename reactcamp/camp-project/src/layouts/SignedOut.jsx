import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={props.signedIn}> Login (cikis yapilmis) </Button>
                <Button primary style={{ marginLeft: "0.5em" }}> Sign up </Button>
            </Menu.Item>

        </div>
    )
}
