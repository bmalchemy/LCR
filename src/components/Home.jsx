import React from 'react';

import Welcome from './Welcome';
import Worship from './Worship';
import Form from './Form';

export default function Home() {
  return (
    <div class="container-fluid">
      <div class="lowerTop">
        <Welcome />
        <Worship />
        <Form />
      </div>
    </ div>
  );
}
