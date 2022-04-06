import { FilterInput } from './Filter.styled';
import { InputStyled } from './Filter.styled';
import {  useDispatch, useSelector } from 'react-redux'
import {filterAct} from 'redux/contacts/contacts-actions.js'

export default function Filter() {
  const {filter} = useSelector(state=>state.contacts)
  const dispatch=useDispatch();
  
  const handleChangeFilter = e => {
    const value = e.target.value;
    dispatch(filterAct(value));
  };
  return (
    <>
      <FilterInput>
        Find contacts by name
        <InputStyled
          type="text"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
      </FilterInput>
    </>
  );
}
