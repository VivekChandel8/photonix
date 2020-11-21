import React from 'react'
import { useStateMachine } from 'little-state-machine'
import { Flex, Button } from '@chakra-ui/core'

import updateAction from '../components/onboarding/updateAction'

export default{
    title: 'Stories/Form',
    component: FormData,
    args: {
        children: 'Form'
    }
}

export const children = () => <Input type = 'FormData' />
export const formState = () => <Input type = 'FormData' />
history,
handleSubmit,
previousStep,
nextStep