type HeadingProps = {
    title:string
    children:React.ReactNode
}

export const Heading = (props:HeadingProps) =>{
    return <div> <h1>{props.title}</h1> {props.children}</div>
}