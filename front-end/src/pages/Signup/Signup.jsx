import userData, { addUser } from '../../storage/log';
import style from './Signup.module.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { addUserToServer, saveUsers } from '../../storage/api';
import Logo from '../../assets/logo.png';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const userExists = userData.some(user => user.email === email);
        if (userExists) {
            setError('User with this email already exists');
        } else {
                const newUser = { username, email, password, role: 'user' };
                // update in-memory
                addUser(newUser);
                // try to persist to server; if server unavailable, we still keep it in-memory
                try {
                  addUserToServer(newUser).then((ok) => {
                    if (!ok) {
                      // fallback: try to persist full array
                      saveUsers(userData);
                    }
                  });
                } catch (err) {
                  // ignore
                }
                console.log('Signup successful', userData);
                navigate('/login', { replace: true });
            
        }
    };

  return (
    <>
      <button className={style['back-button']} onClick={() => navigate(-1)}>&#8592; Back</button>

    <div className={style['signup-container']}>

      <div className={style['logo-container']}>
         <img src={Logo} alt="Logo" />
      </div>
      <div className={style['form-container']}>
        <h1>Register</h1>
        <form className={style['signup-form']} onSubmit={handleSignup}>
          <div className={style['form-group']}>
            <label htmlFor={style.username}>Username</label>
            <input type="text" id={style.username} name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={style['form-group']}>
          <label htmlFor={style.email}>Email  </label>
          <input type="email" id={style.email} name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={style['form-group']}>
          <label htmlFor={style.password}>Password</label>
          <input type="password" id={style.password} name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className={style['signup-button']}>Sign Up</button>
        <button onClick={() => navigate('/login')} className={style['login-button']}>Go to Login</button>
      </form>
       </div>
    </div>
    </>
  )
}

export default Signup