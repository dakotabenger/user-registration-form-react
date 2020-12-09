import { useState } from "react";
import {isEmail} from 'validator'
function UserRegistration() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [staff,setStaff] = useState('');
    const [bio,setBio] = useState('');
    const [emailNote,setEmailNote] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

const validate = () => {
    const validationErrors = [];
    const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

    if (!name) validationErrors.push('Provide a name')
    if (!email) validationErrors.push('Provide an email')
    if (bio.length > 280) validationErrors.push("Your bio is too long")
    if(!regEx.test(phone)) {
        validationErrors.push("Please enter a valid phone number");
    }
    if (!isEmail(email)) {
        validationErrors.push("Please enter a valid email.")
    }

    return validationErrors;
}

const onSubmit = (e) => {
    e.preventDefault()
    const errors = validate()

    if (errors.length > 0) return setValidationErrors(errors);
    const userRegistrationForm = {
        name,
        email,
        phone,
        staff,
        bio,
        emailNote
    }
    const urfJson = JSON.stringify(userRegistrationForm)
    console.log(urfJson)

    setName('')
    setEmail('')
    setPhone('')
    setStaff('')
    setBio('')
    setEmailNote('')


}   

    return (
      <div>
        <h2>User Registration</h2>
        {validationErrors.length > 0 && (
        <div>
          The following errors were found:
          <ul>
            {validationErrors.map(error => <li key={error}>{error}</li>)}
          </ul>
        </div>
      )}
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='phone'>Phone:</label>
            <input id='phone' type='text' value={phone} onChange={(e) => setPhone(e.target.value)}/>
          </div>
      <div>
        <label htmlFor='staff'>Student or Staff:</label>
        <input id='staff' type='radio' value="staff" onChange={(e) => setStaff(e.target.value)}/> Staff
        <input id="student" type="radio" value="student" onChange={(e) => setStaff(e.target.value)}/> Student
      </div>
      <div> 
         <label htmlFor='bio'> Bio: </label>
         <input id='bio' type='textarea' value={bio} onChange={(e) => setBio(e.target.value)}/>
      </div>
      <div>
         <label htmlFor='emailnotifications'> Checkbox for Email Notifications </label>
         <input id='emailnotifications' type='checkbox' value={emailNote} onChange={(e) => setEmailNote(e.target.checked)}/>
      </div>	
          <button>Submit</button>
        </form>
      </div>
    );
  }
  
  export default UserRegistration;