import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Fragment } from 'react';
import Routes from './src/routes';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Routes />
    </Fragment>
  );
}
