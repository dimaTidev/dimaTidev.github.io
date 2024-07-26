import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.png";
import Screen0 from "./Screen_0.jpg";
import Screen1 from "./Screen_1.jpg";
import Screen2 from "./Screen_2.jpg";
import Screen3 from "./Screen_3.jpg";

export const data = new GameDataClass("Brawl Karts", "BrawlKarts", Icon,
    (
       <div className={Styles.container}>
            <div>
                Prototype. Casual racing game. You can select 1 of 5 types of vehicles. You can use weapons to survive. Who drives too slowly will be run over by an evil machine.
            </div>
            <div className={Styles.flexScreenshotContainer}>
                <iframe className={classNames(Styles.youtube, Styles.center)} src="https://www.youtube.com/embed/vxk5EmamNvQ" frameBorder="0" allowFullScreen></iframe> 
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow2} src={Screen0} alt="image" />
                <Image className={Styles.flexRow2} src={Screen1} alt="image" />
                <Image className={Styles.flexRow2} src={Screen2} alt="image" />
                <Image className={Styles.flexRow2} src={Screen3} alt="image" />
            </div>

       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.ShaderLab, tags.Mobile, tags.Multiplayer]
);