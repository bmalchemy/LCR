import React from 'react';

var style1 = {
    color: "white",
    paddingRight: "20px"
}
var style2 = {
    fontSize: "8px"
}

export default function ContactUs() {

    return (
        <div class="container-fluid">

            <section class="row text-banner">

                <div class="activity-element col-md-12">
                    <iframe title="map" width="100%" height="380" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=101+West+Spoke+Hill+Drive,+Wimberley,+TX&amp;aq=1&amp;oq=101+spoke+hill&amp;sll=29.977357,-98.087651&amp;sspn=0.106021,0.181789&amp;t=m&amp;ie=UTF8&amp;hq=&amp;hnear=101+W+Spoke+Hill+Dr,+Wimberley,+Texas+78676&amp;ll=29.976693,-98.089875&amp;spn=0.006626,0.011362&amp;z=14&amp;output=embed"></iframe>
                </div>

                <div class="activity-element col-md-6">

                    <div style={style1}>
                        <div class="middleBodySubText">
                            P.O. Box 1087
                        <br /> 101 Spoke Hill Drive
                        <br /> Wimberley, TX 78676
                        <br /> Phone:(512) 847-3386
                    </div>

                        <div class="middleBodySubText">
                            <strong>Church Hours</strong>
                            <br /> Education Hour: Sunday 9:00am
                        <br /> Worship: Sunday 10:00am
                    </div>
                        <div class="middleBodySubText">
                            <strong>Office Hours</strong>
                            <br /> Monday-Friday (?) 9am-12pm
                        <br /> Office Admin: Maureen Mele
                    </div>
                    </div>
                </div>

                <div class="activity-element col-md-6">

                    <div class="form-div">
                        <form action="feedback.php" method="post">
                            <p class="name">
                                <input name="fullname" type="text" class="feedback-input" required placeholder="Name" id="name" />
                            </p>
                            <p class="email">
                                <input name="email" type="text" class="feedback-input glyphicon glyphicon-envelope" required id="email" placeholder="Email"
                                />
                            </p>
                            <p class="text">
                                <textarea name="comments" class="feedback-input" required id="comment" placeholder="Comment"></textarea>
                            </p>

                            <div class="submit">
                                <input type="submit" value="SEND" id="button-blue" />
                                <div class="ease"></div>
                            </div>
                            <div style={style2}>
                                Form by
                            <a href="http://www.thesitewizard.com/">thesitewizard.com</a>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}