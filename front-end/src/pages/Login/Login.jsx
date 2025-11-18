import React, { useContext } from 'react';
import styles from './Login.module.css';
import userData from '../../storage/log.js';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import logo from '../../assets/logo.png';
import { MenuContext } from '../../context/MenuContext.jsx';


const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const { setGlobalUser } = useContext(MenuContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Array.isArray(userData)) {
      console.error('Invalid userData format:', userData);
      return setError('Internal error. Please try again later.');
    }

    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      console.log('Login successful');
      Cookies.set('auth_token', 'token123', { expires: 1 });

      // set the global user initial (first letter of email)
      try {
        const initial = (email && email.length) ? email.trim().charAt(0).toUpperCase() : "";
        if (setGlobalUser) setGlobalUser(initial);
      } catch (err) {}

      navigate('/home', { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <>
    <button className={styles['back-button']} onClick={() => navigate(-1)}>&#8592; Back</button>
    <div className={styles['login-container']}>
      <div className={styles['logo-container']}>
<img src={logo} alt="Logo" />
      </div>

      <div className={styles['form-container']}>
        <h1 className={styles['login-title']}>Login</h1>
        <form className={styles['login-form']} onSubmit={handleSubmit}>
        <div className={styles['input-group']}>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            id="email"
            name="email"
            required
          />
        </div>

        <div className={styles['input-group']}>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(null);
            }}
            type="password"
            id="password"
            name="password"
            required
          />
        </div>

        <button className={styles.loginButton} type="submit">Login</button>
        <button className={styles.signupButton} type="button" onClick={() => navigate('/signup')}>Signup</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
        </div>
    </div>
    </>
  );
};

export default Login;
