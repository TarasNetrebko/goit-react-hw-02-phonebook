import { ContactElement, Button } from "./ListElem.styled"
export const ListElem = ({ name, number, onDelete }) =>
    <ContactElement>
        <span>{name}: {number}</span>
        <Button type="button" id={name} onClick={onDelete}>Delete</Button>
    </ContactElement>

