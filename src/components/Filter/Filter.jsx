import { LabelFilter, Input } from '../PhonebookForm/PhonebookForm.styled';

export const Filter = ({value, onChange}) => (
  <LabelFilter>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </LabelFilter>
);
