import React from 'react'
import BoundingBoxes from './BoundingBoxes'


export default{
    title: 'Box/',
    component: BoundingBoxes,
    args: {
        children: 'BoundingBoxes'
    }
}

export const photoWidth = () => <Input size='x'  />
export const photoHeight = () => <Input size='y' />
export const Boxes = () => <Input size='x*y' />


const Template = args => <BoundingBoxes {...args} />

export const  photoWidth = Template.bind({})
photoWidth.args = {
    variant: 'photowidth',
}

export const photoHeight = Template.bind({})
photoHeight.args = {
    variant: 'photoHeight',
}

export const Boxes = Template.bind({})
Boxes.args = {
    ...photoWidth.args,
}