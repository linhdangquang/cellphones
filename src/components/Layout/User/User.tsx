import React from 'react';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

import Header from '../../Header';
import styled from 'styled-components';
import Footer from '../../Footer';

const UserLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
        >
          <Outlet />
        </motion.div>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
`;

export default UserLayout;
