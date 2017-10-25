import React from 'react';

import './App.css';

import Menu from './components/Menu';
import Gallery from './components/Gallery';
import CardProfile from './components/Card/CardProfile';
import CardDescription from './components/Card/CardDescription';
import CardContent from './components/Card/CardContent';

const App = () => (
  <div className="main">
    <Menu />
    <div className="main-col-1">
      <CardProfile />
      <Gallery />
    </div>
    <div className="main-col-2">
      <CardDescription />
      <CardContent />
    </div>
  </div>
);

export default App;
