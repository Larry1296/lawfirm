// src/modules/auth/ForgotPassword.jsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import Card from '../../components/ui/Card';
import Button3D from '../../components/ui/Button3D';
import FloatingInput from '../../components/ui/FloatingInput';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // handle API call to send reset link
    console.log('Reset link sent to:', email);
  };

  return (
    <div className='flex-1 flex flex-col lg:flex-row'>
      {/* LEFT PANEL */}
      <div className='hidden lg:flex lg:w-1/2 bg-blue-700 relative items-center justify-center p-10 overflow-hidden'>
        {/* Animated Background Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className='absolute w-96 h-96 bg-blue-500/40 rounded-full blur-3xl'
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className='absolute w-96 h-96 bg-indigo-400/30 rounded-full blur-3xl'
        />

        {/* Branding Content */}
        <div className='relative text-center text-white max-w-md'>
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className='flex justify-center mb-6'
          >
            <Mail size={90} className='text-white/90' />
          </motion.div>

          <h1 className='text-4xl font-bold mb-4'>Reset Your Password</h1>

          <p className='text-blue-100'>
            Enter your email address and we’ll send you instructions to reset
            your password securely.
          </p>

          <div className='mt-10 border border-white/30 rounded-2xl p-6 text-sm text-white/80'>
            Secure recovery system for LegalAssist accounts
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div
        className='
          w-full lg:w-1/2
          flex items-center justify-center
          min-h-screen lg:min-h-0
          px-6 py-24 lg:px-10
          bg-gray-50
        '
      >
        <Card className='relative w-full max-w-md p-8 overflow-visible'>
          {/* BACK LINK */}
          <Link
            to='/login'
            className='
              absolute top-6 left-6
              flex items-center gap-2
              text-sm font-medium
              text-blue-600
              hover:text-blue-800
              transition
            '
          >
            <ArrowLeft size={16} />
            Back to Login
          </Link>

          {/* HEADING */}
          <div className='mt-10'>
            <h2 className='text-2xl font-bold mb-2 text-gray-900'>
              Forgot Password
            </h2>

            <p className='text-sm text-gray-500 mb-6'>
              No worries. We’ll send a reset link to your email.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className='space-y-5'>
            <FloatingInput
              label='Email Address'
              name='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button3D
              type='submit'
              variant='primary'
              size='lg'
              className='w-full'
            >
              Send Reset Link
            </Button3D>
          </form>

          {/* LOGIN LINK */}
          <p className='text-sm text-center mt-6 text-gray-600'>
            Remember your password?{' '}
            <Link
              to='/login'
              className='
                whitespace-nowrap
                text-blue-600
                font-bold
                hover:text-blue-700
                transition-colors duration-200
              '
            >
              Login
            </Link>
          </p>
        </Card>
      </div>
    </div>
  );
}
