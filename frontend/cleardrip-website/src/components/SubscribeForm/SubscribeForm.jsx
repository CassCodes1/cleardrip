import { useState } from 'react';
import axios from '../../api/axios';
import '../ContactForm/ContactForm.css';

const SUBSCRIBE_URL = '/subscription/start';

const SubscribeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

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
    setError('');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(''); //remove previous errors

    reformatInput();

    try {
      const response = await axios.post(
        SUBSCRIBE_URL,
        JSON.stringify({
          firstName,
          lastName,
          email,
          contactNo,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: false, //true?
        },
        console.log('success')
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
    <form className='form subscribe-form' onSubmit={submitHandler}>
      <div className='form-group'>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <input
          type='text'
          name='email'
          placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className='form-group'>
        <input
          type='tel'
          name='contactNo'
          placeholder='Phone Number'
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
      </div>

      <div className='form-group'>
        {error ? (
          <div className='status error'>
            <p>{error}</p>
          </div>
        ) : (
          success && (
            <div className='status success'>
              <p>Welcome onboard! A Member of the team will be in touch.</p>
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

export default SubscribeForm;
