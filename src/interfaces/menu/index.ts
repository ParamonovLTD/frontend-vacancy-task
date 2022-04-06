import React from 'react';

export interface MenuItem {
  id: string;
  title: string;
  pathname: string;
  icon: React.ReactNode;
}