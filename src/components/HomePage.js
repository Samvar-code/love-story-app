// src/components/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomePage = () => {
  return (
    <PageContainer>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <WelcomeText>Happy Birthday, Bubu! 🎉</WelcomeText>
        <SubText>Here's to our adventure, one page at a time...</SubText>
      </motion.div>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const WelcomeText = styled.h1`
  font-size: 2.5em;
  font-weight: bold;
  color: #ef6c57;
`;

const SubText = styled.p`
  font-size: 1.2em;
  margin-top: 10px;
  color: #333;
`;

export default HomePage;
