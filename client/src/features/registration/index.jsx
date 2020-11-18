import { useState } from 'react';
import TextField from '../../ui/text-field';
import SubmitBtn from '../../ui/submit-btn';

const defaultValues = {
  name: '',
  email: '',
  password: '',
  password2: '',
};

export default function RegistrationForm() {
  const [user, setUser] = useState(defaultValues);

  const { name, email, password, password2 } = user;

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('You must provide a valid username and password');
    } else {
      const register = { name, email, password };
    }
  };

  return (
    <div className='form-container'>
      <h2>
        New Account <span className='text-primary'>Register</span>
      </h2>
      <form onSubmit={onSubmit}>
        <TextField
          label='Name'
          name='name'
          value={name}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, name: e.target.value }))
          }
        />

        <TextField
          label='Email Address'
          type='email'
          value={email}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, email: e.target.value }))
          }
        />

        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password: e.target.value }))
          }
          minLength='6'
        />

        <TextField
          label='Confirm Password'
          type='password'
          value={password2}
          onChange={(e) =>
            setUser((prev) => ({ ...prev, password2: e.target.value }))
          }
        />

        <SubmitBtn value='Register' />
      </form>
    </div>
  );
}
