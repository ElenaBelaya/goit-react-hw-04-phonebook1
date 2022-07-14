import { Formik, Form, Field } from "formik";
import shortid from "shortid";


const ContactForm = ({ onSubmit }) => {  

    const handleSubmit = async ( value, { setSubmitting, resetForm }) => {
           await onSubmit(value, shortid.generate());     
            setSubmitting(false);
            resetForm();           
      }
    
        return (
            <Formik   
            initialValues={{name: '', number: '' }}
            onSubmit={handleSubmit}>
           {({isSubmitting}) => (
 <Form>
 <label>
     Name
     <br />
     <Field type='text' name='name' />
 </label>
 <br />
 <label>
     Number
     <br />
     <Field type='text' name='number' />
 </label>
 <br />
 <button type='submit' disabled={isSubmitting}>Add contact</button>
</Form>
           )}            
            </Formik>
         )}

export default ContactForm;