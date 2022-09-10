import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg" />
                <Dropdown pointing="top right">
                    <Dropdown.Menu>
                        <Dropdown.Item text="About Me" icon="info" />
                        <Dropdown.Item onClick={props.signOut}text="Sign out" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
