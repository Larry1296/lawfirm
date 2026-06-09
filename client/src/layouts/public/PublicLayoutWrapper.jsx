import React from 'react';

import PublicLayout from './PublicLayout';

import ThemeProvider from '../../core/store/ThemeProvider';

export default function PublicLayoutWrapper() {
  return (
    <ThemeProvider key='public-guest' role='public'>
      <PublicLayout />
    </ThemeProvider>
  );
}
