import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';

import Icon from "./Icon.png";
import Screen0 from "./Screen_0.jpg";
import Screen1 from "./Screen_1.jpg";
import Screen2 from "./Screen_2.jpg";

export const data = new GameDataClass("FoesIO", "FoesIO", Icon,
    (
       <div className={Styles.container}>
            <div>
                Clone FoesIO. 2D top down battle royale. Pick up weapon, ammo, armor and be the last one alive. 
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <iframe className={classNames(Styles.youtube2, Styles.flexRow2)} src="https://www.youtube.com/embed/SiEs2b8D758" frameBorder="0" allowFullScreen></iframe> 
                <iframe className={classNames(Styles.youtube2, Styles.flexRow2)} src="https://www.youtube.com/embed/fUU3tivUqfQ" frameBorder="0" allowFullScreen></iframe> 
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow3} src={Screen0} alt="image" />
                <Image className={Styles.flexRow3} src={Screen1} alt="image" />
                <Image className={Styles.flexRow3} src={Screen2} alt="image" />
            </div>

            <div>
                I&apos;ve covered interesting technical aspects here:
                <ul>
                <li>Finite state machine (based on scriptableObjects)</li>
                </ul>
            </div>

       </div>
    )
);