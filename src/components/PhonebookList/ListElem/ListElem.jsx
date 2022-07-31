import { ContactElement, Button } from "./ListElem.styled"
import PropTypes from "prop-types"

export const ListElem = ({ name, number, onDelete }) =>
    <ContactElement>
        <span>{name}: {number}</span>
        <Button type="button" id={name} onClick={onDelete}>Delete</Button>
    </ContactElement>

ListElem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
}
