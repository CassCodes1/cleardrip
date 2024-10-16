import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/axios';
import '../ContactForm/ContactForm.css';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const SUBSCRIBE_URL = '/subscription/start';

const SubscribeForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');

  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
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
          withCredentials: false,
        }
      );

      if (response.status === 201) {
        setIsLoading(false);
        resetForm();
        setSuccess(true);
      }
    } catch (err) {
      setIsLoading(false);
      setError(err.response.data.message);
    }
  };
  return (
    <form className='form subscribe-form' onSubmit={submitHandler}>
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
        {isLoading && <LoadingSpinner />}
        {error ? (
          <div className='status error'>
            <p>{error}</p>
          </div>
        ) : (
          success && (
            <div className='status success'>
              <p>Welcome onboard! A member of the team will be in touch.</p>
            </div>
          )
        )}
        <button type='submit' className='submit'>
          Submit
        </button>
        <p className='opt-out'>
          You can opt-out at any time. See our{' '}
          <Link to='privacy-policy'>privacy policy</Link>.
        </p>
      </div>
    </form>
  );
};

export default SubscribeForm;
