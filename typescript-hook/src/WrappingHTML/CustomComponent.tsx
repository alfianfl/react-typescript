import { Profile } from "../auth/Profile"
import React from 'react'

export const CustomComponent = (props:React.ComponentProps<typeof Profile>) => {
    return (
        <div>
            {props.name}
        </div>
    )
}