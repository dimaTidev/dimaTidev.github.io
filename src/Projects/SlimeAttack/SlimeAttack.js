import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';

import Icon from "./Icon.png";
import Screen1 from "./Screen_1.PNG";
import Screen2 from "./Screen_2.PNG";
import Screen3 from "./Screen_3.PNG";
import Screen4 from "./Screen_4.PNG";
import Screen5 from "./Screen_5.PNG";
import Screen6 from "./Screen_6.PNG";

export const data = new GameDataClass("Slime attack", Icon,
    (
       <div className={Styles.container}>
         <div>
            Completed prototype. 2d color match game. Main goal feed porings with the same color of apple. In game you can upgrade and use some special skills.
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <iframe className={classNames(Styles.youtube, Styles.center)} src="https://www.youtube.com/embed/9v8zv753_fY" frameBorder="0" allowFullScreen></iframe> 
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <Image className={Styles.flexRow2} src={Screen3} alt="image" />
            <Image className={Styles.flexRow2} src={Screen4} alt="image" />
            <Image className={Styles.flexRow2} src={Screen1} alt="image" />
            <Image className={Styles.flexRow2} src={Screen2} alt="image" />
            <Image className={Styles.flexRow2} src={Screen5} alt="image" />
            <Image className={Styles.flexRow2} src={Screen6} alt="image" />
        </div>
       </div>
    )
);