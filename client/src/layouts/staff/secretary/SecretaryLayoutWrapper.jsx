import React, { useContext } from 'react';

import SecretaryLayout from './SecretaryLayout';

import ThemeProvider from '../../../core/store/ThemeProvider';

import AuthContext from '../../../core/store/AuthContext';

export default function SecretaryLayoutWrapper() {
  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider
      key={`secretary-${user?.id || user?._id || user?.email}`}
      role='secretary'
      user={user}
    >
      <SecretaryLayout />
    </ThemeProvider>
  );
}
