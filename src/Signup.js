import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from './firebase'
import { login } from './features/userSlice'
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fName, setFName] = useState('')
  const [lName, setLName] = useState('')
  const dispatch = useDispatch()
  const history = useHistory();

  const signUp = (e) => {
    e.preventDefault()

    if (!fName) {
      return alert('Please enter a fist name')
    }
    if (!lName) {
      return alert('Please enter a last name')
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            )
            history.push('/teslaaccount')
          })
      })
      .catch((error) => alert(error.message))
  }
  return (
    <div className='signup'>
      <div className='signup__header'>
        <div className='signup__logo'>
          <Link>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='logo'
            />
          </Link>
        </div>
        <div className='signup__language'>
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='signup__info'>
        <h1>Create Account</h1>
        <form className='signup__form'>
        <label htmlFor='fName'>first name</label>
        <input
          type='text'
          id='fname'
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <label htmlFor='email'>Last Name</label>
        <input
          type='text'
          id='lname'
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='email'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name='Create account' type='submit' onClick={signUp}/>
        </form>
        <div className='signup__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/login'>
          <ButtonSecondary name='SignIn' />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
