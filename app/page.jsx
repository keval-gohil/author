'use client'

import React from 'react';
import MainHeader from '@/components/mainHeader';
import MainSection from '@/components/mainSection';
import Load from './load';
import '@/components/style.css';
import '@/components/responsive.css?var=4.5';

const Author = () => {
  const { isLoading, loadingComponent } = Load(3000);

  return isLoading ? loadingComponent : (
    <div className="author">
      <MainHeader />
      <MainSection />
    </div>
  );
};

export default Author;
