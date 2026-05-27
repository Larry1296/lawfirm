import React, { useContext } from 'react';

import ClientLayout from './ClientLayout';

import ThemeProvider from '../../core/store/ThemeProvider';

import AuthContext from '../../core/store/AuthContext';

export default function ClientLayoutWrapper() {
  const { user } = useContext(AuthContext);

  return (
    <ThemeProvider
      key={`client-${user?.id || user?._id || user?.email}`}
      role='client'
      user={user}
    >
      <ClientLayout />
    </ThemeProvider>
  );
}
