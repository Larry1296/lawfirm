import React from 'react';

import AuthLayout from './AuthLayout';

import ThemeProvider from '../../core/store/ThemeProvider';

export default function AuthLayoutWrapper() {
  return (
    <ThemeProvider key='auth-guest' role='auth'>
      <AuthLayout />
    </ThemeProvider>
  );
}
