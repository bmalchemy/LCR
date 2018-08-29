import React from 'react';
import { Link, Switch, Route } from 'react-router-dom'
import TeamMembers from './TeamMembers';
import Pastor from './Pastor';

var style1 = {
    textAlign: "center"
}
export default function MinistryTeam() {

    return (
        <div>
            <section class="row title-newrow">
                <div class="pageTitle" align="center">OUR MINISTRY TEAM</div>
            </section>
            <Switch>
                <Route exact path='/about' component={TeamMembers} />
                <Route exact path='/about/pastor' component={Pastor} />
            </Switch>
        </div>
    )
}