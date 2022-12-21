import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Box } from '../Box/Box';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};