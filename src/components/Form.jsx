import React from 'react';
import '../Contact-us-form.css';

var style1 = {
    paddingBottom: '20px',
    paddingTop: '10px',
    color: 'white'
}
var style3 = {
    fontSize: '8px'
}
var style4 = {
    backgroundColor: "#C0392B"
}

export default function Form() {
    return (

        <section class="row" style={style4}>

            <div align="center" style={style1}>
                <h2><strong>CONTACT US</strong></h2>
            </div>



            <div class="activity-element col-md-12">
                <div class="form-div">
                    <form action="feedback.php" method="post">
                        <div>
                            <span class="name">
                                <input name="fullname" type="text" class="feedback-input" required placeholder="Name" id="name" />
                            </span>
                            <span class="email">
                                <input name="email" type="text" class="feedback-input glyphicon glyphicon-envelope" required id="email" placeholder="Email" />
                            </span>
                        </div>
                        <div class="text">
                            <textarea name="comments" class="feedback-input" required id="comment" placeholder="Comment"></textarea>
                        </div>

                        <div class="submit">
                            <input type="submit" value="SEND" id="button-blue" />
                            <div class="ease"></div>
                        </div>
                        <div style={style3}>
                            Form by <a href="http://www.thesitewizard.com/">thesitewizard.com</a>
                        </div>

                    </form>
                </div>
            </div>

        </section>
    )
}