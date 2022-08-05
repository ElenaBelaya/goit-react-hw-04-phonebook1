import shortid from 'shortid';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import {
  FormStyled,
  FieldStyled,
  ButtonSubmit,
  TitleInput,
} from './contactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = async (value, { setSubmitting, resetForm }) => {
    await onSubmit(value, shortid.generate());
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <FormStyled>
          <label>
            <TitleInput>Name</TitleInput>
            <FieldStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            <TitleInput>Number</TitleInput>
            <FieldStyled
              type="text"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <ButtonSubmit type="submit" disabled={isSubmitting}>
            Add contact
          </ButtonSubmit>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
