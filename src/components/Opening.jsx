import React from 'react';
import { Link } from 'react-router-dom'
const lakeImage = require('../media/images/lake-dark.jpg');
const lcrImage = require('../media/images/LCR_logo_white.png');

var style0 = {
    backgroundImage: "url(" + lakeImage + ")"
}

export default function Opening() {
    return (

        <section class="row title-row">
            <div class="fill-screen stellar-bg"
                 style={style0}
                 data-stellar-background-ratio="0.2">

                <img class="img-responsive title-image" src={lcrImage} alt="LCR Logo" />

                <div class="down-button">
                <Link to='#welcome'><i class="fa fa-arrow-circle-down fa-4x"></i></Link>
                </div>
            </div>
        </section>

    )
}