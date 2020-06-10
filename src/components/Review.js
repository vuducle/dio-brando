import React from 'react'
import '../App.css'
import giornoGiovanna from '../img/gg.png';
import cloudStrife from '../img/cs.png';
import aerithGainsborough from '../img/ag.png';
import liMing from '../img/lm.png';

let profileImg = [
    {
        photo: giornoGiovanna,
        name: "Giorno Giovanna",
        text: "I have a dream and want a peaceful life in Italy. My dad 'D I O' is a vampire by the way..."
    },
    {
        photo: aerithGainsborough,
        name: "Aerith Gainsborough",
        text: "I'm a local florist at sector 5 and a ancient from the planet. And i got a i'm falling in love "
    },
    {
        photo: cloudStrife,
        name: "Cloud Strife",
        text: "I'm a EX-SOLDIER"
    },
    {
        photo: liMing,
        name: "Li Ming Lee",
        text: "I need more power! I want to be the strongest sorceress in the world >:("
    }
]

function Review() {

    
    return (
        <div>
            <section>
                {profileImg.map((e,i) =>
                <p>
                photo={e.photo},
                name={e.name},
                text={e.text},
                key={i},
                </p>
                )}
            </section>
            <img src={aerithGainsborough}></img>
        </div>
    )
}

export default Review;
