import React from "react"

type ButtonProps = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>, id:string) => void
}

export const Button = (props: ButtonProps) => {
    return <button onClick={(e) => props.handleClick(e, "123")}>Click</button>
}