import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.jpg";
import Screen2 from "./Screen_2.jpg";
import Screen3 from "./Screen_3.jpg";
import Screen4 from "./Screen_4.jpg";
import Screen5 from "./Screen_5.jpg";

export const data = new GameDataClass("Clash of Zombie", "ClashOfZombie", Icon,
    (
       <div className={Styles.container}>
         <div>
            Clone of the game SAS3. You can buy weapons, ammo, grenades. And participate in battles with zombies. The game has not been published.
         </div>

        <div className={Styles.flexScreenshotContainer}>
            <iframe className={classNames(Styles.youtube, Styles.center)} src="https://www.youtube.com/embed/PsJd1iXRkxw" frameBorder="0" allowFullScreen></iframe> 
        </div>

        <div className={Styles.center}>
            Windows build available on <a href="https://drive.google.com/file/d/1w_V8ODyUfAaurP-DqQPkOkOR4J1xIf_O/view?usp=sharing" target="_blank">
            <div className="fa fa-download fa-lg"></div> google drive</a>.
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <Image className={Styles.flexRow2} src={Screen2} alt="image" />
            <Image className={Styles.flexRow2} src={Screen3} alt="image" />
            <Image className={Styles.flexRow2} src={Screen4} alt="image" />
            <Image className={Styles.flexRow2} src={Screen5} alt="image" />
        </div>
       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.Mobile]
);