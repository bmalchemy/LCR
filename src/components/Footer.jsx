import React from 'react';
const facebook = require('../media/images/facebook.png');

export default function Footer() {
    return (

        <footer class="container-fluid">
            <div class="row">
                <div class="facebook-element col-md-1">
                    <a href="https://www.facebook.com/pages/Lutheran-Church-of-the-Resurrection/721494127926960" target="new">
                    <img src={facebook} alt="facebook" /></a>
                </div>
            </div>
        </footer>
    )
}