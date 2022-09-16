import {Name} from './types/Person.type'

type PersonListProps = {
    names:Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map((person,i)=>(
                    <h2 key={i}>{person.first} {person.last}</h2>
                ))
            }
        </div>
    )
}