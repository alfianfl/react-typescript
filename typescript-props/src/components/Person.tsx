import { PersonProps } from "./types/Person.type"

export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}