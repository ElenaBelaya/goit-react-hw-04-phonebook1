export const ContactForm = () => {
    return (
       <form>
           <label>
               Name
               <input type='text' name='name'></input>
           </label>
           <label>
               Number
               <input type='text' name='number'></input>
           </label>
           <button type='submit'>Add contact</button>
       </form>
    )
}