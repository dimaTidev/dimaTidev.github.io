import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.jpg";
import Screen1 from "./Screen_1.jpg";
import Screen2 from "./Screen_2.jpg";
import Screen3 from "./Screen_3.jpg";
import Screen4 from "./Screen_4.jpg";

import IconGooglePlay from "../etc/logo_googlePlayStore.png";

export const data = new GameDataClass("Clash of Crime 2", "COC2", Icon,
    (
       <div className={Styles.container}>
            <div>
                Released in <strong>2016</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime2&hl=ru&gl=US" target="_blank">GooglePlay</a>.
                You play as a third person character. In the game you can fight, shoot weapons, steal vehicles, run away from the police
            </div>
            <br/>Video recorded by a player

            <div className={Styles.flexScreenshotContainer}>
                <iframe className={Styles.youtube} src="https://www.youtube.com/embed/LjfpPOLWSmQ" frameBorder="0" allowFullScreen></iframe> 
            </div>

            <div className={Styles.center}>
                <a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime2" target="_blank"><Image src={IconGooglePlay} alt="Play Store badge" /></a>
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow2} src={Screen1} alt="image" />
                <Image className={Styles.flexRow2} src={Screen2} alt="image" />
                <Image className={Styles.flexRow2} src={Screen3} alt="image" />
                <Image className={Styles.flexRow2} src={Screen4} alt="image" />
            </div>
       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.Mobile]
);