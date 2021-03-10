import React from 'react';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const history = useHistory();
  return (
    <div className='signup'>
      <div className='login__header'>
        <div className='login__logo'>
          <Link>
            <img
              src='https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png'
              alt='logo'
            />
          </Link>
        </div>
        <div className='login__language'>
          <LanguageOutlinedIcon /> <span>en-US</span>
        </div>
      </div>
      <div className='login__info'>
        <h1>Sign In</h1>
        <form className='login__form'>
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
          <ButtonPrimary name='Sign In' type='submit' onClick={signIn} />
        </form>
        <div className='login__divider'>
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to='/signup'>
          <ButtonSecondary name='create account' />
        </Link>
      </div>
    </div>
  );
}

export default Signup;