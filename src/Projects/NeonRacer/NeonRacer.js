import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';

import Icon from "./Icon.png";
import Screen0 from "./CarSwitch.gif";
import Screen1 from "./Screen_0.jpg";
import Screen2 from "./Screen_1.jpg";

export const data = new GameDataClass("Music Hero Racer", "MusicHeroRacer", Icon,
    (
       <div className={Styles.container}>
            <div>
                Variation of the game Guitar Hero. In this game, you need to collect blocks to the music. Collect cars and upgrade them.
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <iframe className={classNames(Styles.youtube2, Styles.flexRow2)} src="https://www.youtube.com/embed/JZoOfqqCLDU" frameBorder="0" allowFullScreen></iframe> 
                <iframe className={classNames(Styles.youtube2, Styles.flexRow2)} src="https://www.youtube.com/embed/hdQsFNckNtA" frameBorder="0" allowFullScreen></iframe> 
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow3} src={Screen1} alt="image" />
                <Image className={Styles.flexRow3} src={Screen0} alt="image" />
                <Image className={Styles.flexRow3} src={Screen2} alt="image" />
            </div>

            <div>
                I&apos;ve covered interesting technical aspects here:
                <ul>
                <li>Shaders - Dissolve (mobile optimized), Screen Effects (radial blur, dirty lence, lut), World Curve</li>
                <li>Procedural wheel generation. Every wheel assemble from little parts: spokes, rim, bolts, tyre. Texture generate in depend wheel parts. Everything can be changed parametrically</li>
                <li>UI show only items in view. We can scroll a ton of items but actually exists only viewed items in hierarchy.</li>
                </ul>
            </div>

       </div>
    )
);