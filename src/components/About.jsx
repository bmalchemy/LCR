import React from 'react';
import Beliefs from './Beliefs';
import MinistryTeam from './MinistryTeam';
import Worship from './Worship';

export default function About() {
  return (
    <div class="container-fluid">
      <div  class="lowerTop">
        <Beliefs />
        <Worship />
        <MinistryTeam />
      </div>
    </ div>
  );
}
