import { useState } from 'react';
import axios from '../../api/axios';
import './ContactForm.css';

const SEND_EMAIL_URL = '/contact/email-enquiry';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [enquiryType, setEnquiryType] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const reformatInput = () => {
    // Reject empty input
    const trimmedFirstName = firstName.trim();
    setFirstName(trimmedFirstName);

    const trimmedLastName = lastName.trim();
    setLastName(trimmedLastName);

    const trimmedEmail = email.trim();
    setEmail(trimmedEmail);

    const trimmedContactNo = contactNo.trim();
    setContactNo(trimmedContactNo);

    // Remove spaces from contact number
    const formattedContactNo = trimmedContactNo.split(' ').join('');
    setContactNo(formattedContactNo);
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setContactNo('');
    setEnquiryType('');
    setMessage('');
    setError('');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(''); //remove previous errors

    reformatInput();

    try {
      const response = await axios.post(
        SEND_EMAIL_URL,
        JSON.stringify({
          firstName,
          lastName,
          email,
          contactNo,
          enquiryType,
          message,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false, //true?
        }
      );

      if (response) {
        resetForm();
        setSuccess(true);
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <form className='form contact-form' onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='contactNo'>Phone Number</label>
        <input
          type='tel'
          name='contactNo'
          placeholder='Phone Number'
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <label htmlFor='enquiryType'>Enquiry Type</label>
        <select
          name='enquiryType'
          defaultValue='enquiry-type'
          onChange={(e) => setEnquiryType(e.target.value)}
        >
          <option value='enquiry-type' disabled={true}>
            Enquiry Type (Choose One)
          </option>
          <option value='general-enquiry'>General Enquiry</option>
          <option value='booking-enquiry'>Booking Enquiry</option>
          <option value='new-estimate'>Quote/Estimate</option>
        </select>
      </div>

      <div className='form-group'>
        <label htmlFor='message'>Message</label>
        <textarea
          name='message'
          cols='30'
          rows='5'
          placeholder='Your message goes here...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <div className='form-group'>
        {error ? (
          <div className='status error'>
            <p>{error}</p>
          </div>
        ) : (
          success && (
            <div className='status success'>
              <p>Message sent!</p>
            </div>
          )
        )}
        <button type='submit' className='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
