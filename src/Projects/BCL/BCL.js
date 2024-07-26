import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.png";
import Screen0 from "./GTA3_screen_0.jpg";
import Screen1 from "./GTA3_screen_1.jpg";
import Screen2 from "./GTA3_screen_2.jpg";
import Screen3 from "./GTA3_screen_3.jpg";
import Screen5 from "./GTA3_screen_5.jpg";
import Screen6 from "./GTA3_screen_6.jpg";

import IconGooglePlay from "../etc/logo_googlePlayStore.png";

export const data = new GameDataClass("Big City Life", "BCL", Icon,
    (
       <div className={Styles.container}>
            <div>
                Released in <strong>2017</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.BCL" target="_blank">GooglePlay</a>. A game without firearms and violence. This is an attempt to combine 2 types of games: GTA and SIMS. In this game, you appear in a small town where you can earn extra money by working: pizza delivery, taxi driver, builder on a construction site, garbage collector, thief. You will need to take a driving license in a driving school to be able to drive a car. You can buy cars, an apartment, furniture in an apartment.
            </div>

            <br/>Video recorded by some player
            <div className={Styles.flexScreenshotContainer}>
                <iframe className={Styles.youtube} src="https://www.youtube.com/embed/-Fc8oy1aavY" frameBorder="0" allowFullScreen></iframe> 
            </div>

            <div className={classNames(Styles.center, Styles.flexScreenshotContainer)}>
                <a href="https://play.google.com/store/apps/details?id=com.CactusGames.BCL" target="_blank"><Image src={IconGooglePlay}alt="Play Store badge" /></a>
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow2} src={Screen0} alt="image" />
                <Image className={Styles.flexRow2} src={Screen1} alt="image" />
                <Image className={Styles.flexRow2} src={Screen2} alt="image" />
                <Image className={Styles.flexRow2} src={Screen3} alt="image" />
                <Image className={Styles.flexRow2} src={Screen5} alt="image" />
                <Image className={Styles.flexRow2} src={Screen6} alt="image" />
            </div>
       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.Mobile]
);