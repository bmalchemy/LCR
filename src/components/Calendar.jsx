import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

var style1 = {
    borderWidth: 0,
    width: "98%",
    height: "450px",
    scrolling: "no"
}
export default class Calendar extends Component {
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
                    <div class="pageTitle" align="center">CALENDAR</div>
                </section>

                <section id="calendar" class="row text-banner">

                    <div>
                        <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_January_2018.pdf">january</a>&nbsp;
                        <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_February_2018.pdf">february</a>&nbsp;
                        <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_March_2018.pdf">march</a>
                    </div>

                    <Button onClick={() => this.setState({ open: !this.state.open })}>
                        Archive
        </Button>
                    <br />
                    <Panel id="collapsible-panel-example-1" expanded={this.state.open}>
                        <Panel.Collapse>
                            <Panel.Body>
                                <div>2017</div>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_January_2017.pdf">january</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_February_2017.pdf">february</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_March_2017.pdf">march</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_April_2017.pdf">april</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_May_2017.pdf">may</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_June_2017.pdf">june</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_July_2017.pdf">july</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_August_2017.pdf">august</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_September_2017.pdf">september</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_October_2017.pdf">october</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_November_2017.pdf">november</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_December_2017.pdf">december</a>

                                <div>2016</div>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_January_2016.pdf">january</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_February_2016.pdf">february</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_March_2016.pdf">march</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_April_2016.pdf">april</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_May_2016.pdf">may</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_June_2016.pdf">june</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_July_2016.pdf">july</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_August_2016.pdf">august</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_September_2016.pdf">september</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_October_2016.pdf">october</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_November_2016.pdf">november</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_December_2016.pdf">december</a>
                                <br />
                                <div>2015</div>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_January_2015.pdf">january</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_February_2015.pdf">february</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_March_2015.pdf">march</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_April_2015.pdf">april</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_May_2015.pdf">may</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_June_2015.pdf">june</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_July_2015.pdf">july</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_August_2015.pdf">august</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_September_2015.pdf">september</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_October_2015.pdf">october</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_November_2015.pdf">november</a>
                                <a target="_new" href="http://www.welcometonewlife.org/calendar_newsletter/Calendar_December_2015.pdf">december</a>
                            </Panel.Body>
                        </Panel.Collapse>
                    </Panel>

                </section>

                <section id="calendar" class="row text-banner">

                    <iframe src="https://www.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=lcr847%40gmail.com&amp;color=%232F6309&amp;src=en.christian%23holiday%40group.v.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FChicago" style={style1}></iframe>

                </section>
            </div>
        )
    }
}