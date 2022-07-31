import { List, Li } from "./PhonebookList.styled"
import {ListElem} from "./ListElem/ListElem"

export const PhonebookList = ({ contacts, onDelete }) => {
    return (
        <List>
            {contacts.map(({name, id, number}) => <Li key={id}>
                <ListElem name={name} number={number} onDelete={onDelete} />
            </Li>)}
        </List>
    )
}