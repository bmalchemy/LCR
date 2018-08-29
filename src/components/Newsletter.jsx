import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

export default class Newsletter extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }
    render() {
        return (
            <div class="container-fluid">

                <section class="row title-newrow">
                    <div class="pageTitle" align="center">NEWSLETTER</div>
                </section>

                <section id="newsletter" class="row text-banner">

                    <div>
                        <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_January_2018.pdf">january</a>&nbsp;
                        <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_February_2018.pdf">february</a>&nbsp;
                        <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_March_2018.pdf">march</a>&nbsp;
                </div>
                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                        Archive
        </Button>
                    <br />
                    <div>
                        <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
                            <Panel.Collapse>
                                <Panel.Body>
                                    <div>2017</div>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_January_2017.pdf">january</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_February_2017.pdf">february</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_March_2017.pdf">march</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_April_2017.pdf">april</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_May_2017.pdf">may</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_June_2017.pdf">june</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_July_2017.pdf">july</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_August_2017.pdf">august</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_September_2017.pdf">september</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_October_2017.pdf">october</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_November_2017.pdf">november</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_December_2017.pdf">december</a></li>

                                    <br/>
                                
                                    <div>2016</div>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_January_2016.pdf">january</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_February_2016.pdf">february</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_March_2016.pdf">march</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_April_2016.pdf">april</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_May_2016.pdf">may</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_June_2016.pdf">june</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_July_2016.pdf">july</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_August_2016.pdf">august</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_September_2016.pdf">september</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_October_2016.pdf">october</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_November_2016.pdf">november</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_December_2016.pdf">december</a></li>
                                    <br />
                                    <div>2015</div>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_January_2015.pdf">january</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_February_2015.pdf">february</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_March_2015.pdf">march</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_April_2015.pdf">april</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_May_2015.pdf">may</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_June_2015.pdf">june</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_July_2015.pdf">july</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_August_2015.pdf">august</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_September_2015.pdf">september</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_October_2015.pdf">october</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_November_2015.pdf">november</a></li>
                                    <li><a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/NL_December_2015.pdf">december</a></li>
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </div>
                </section>
            </div>
        )
    }
}