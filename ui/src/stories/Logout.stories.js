import React from 'react'

import history from '../history'
import { logOut } from '../auth'
import '../static/css/Logout.css'
import Button from './Button'

export  default {
    title: 'Auth/Button',
    component: Button,
    args: {
        children: 'Button'
    }
}

export const LogOut = () =><Button variant = 'primary'>LogOut</Button>

const Template = args => <Button {...args} />

export const LoggOut = Template.bind({})
LoggOut.args = {
    variant: 'LogOut',
    
}