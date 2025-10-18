import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
    onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (login(email, password)) {
        onClose();
    } else {
      setError('Invalid email or password.');
    }
  };
  
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for signing up! This is a demo. Please use one of the pre-defined accounts to log in.');
    setIsSignUp(false);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg" onClick={e => e.stopPropagation()}>
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-700">KMO Platform</h1>
            <p className="text-slate-500">{isSignUp ? 'Create an Account' : 'Welcome Back'}</p>
        </div>
        {isSignUp ? (
           <form onSubmit={handleSignUp} className="space-y-6">
             <input type="email" placeholder="Email address" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
             <input type="password" placeholder="Password" required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                Sign Up
            </button>
           </form>
        ) : (
            <form onSubmit={handleLogin} className="space-y-6">
            {error && <p className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-md">{error}</p>}
            <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm" />
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700">
                Login
            </button>
            </form>
        )}
        <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-green-600 hover:underline w-full mt-6">
            {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
        <div className="mt-4 p-4 bg-slate-100 rounded-lg text-sm text-slate-600">
            <h4 className="font-semibold mb-2">Demo Accounts:</h4>
            <p><strong>Admin:</strong> admin@kmo.com</p>
            <p><strong>Trainer:</strong> trainer@kmo.com</p>
            <p><strong>Student:</strong> student@kmo.com</p>
            <p><strong>Password:</strong> password</p>
        </div>
      </div>
    </div>
  );
};

export default Login;