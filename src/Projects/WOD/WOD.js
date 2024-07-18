import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';

import Icon from "./Icon.png";
import Screen0 from "./Wod_screen_3.jpg";
import Screen1 from "./Wod_screen_2.jpg";
import Screen2 from "./Wod_screen_4.jpg";
import Screen3 from "./Wod_screen_5.jpg";
import Screen4 from "./Wod_screen_menu.jpg";

import IconGooglePlay from "../etc/logo_googlePlayStore.png";
import IconAppStore from "../etc/logo_AppStore.png";

export const data = new GameDataClass("World of Derby", "WOD", Icon,
    (
       <div className={Styles.container}>
         <div>
         Released in <strong>2015</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.WOD" target="_blank">GooglePlay</a> and <a href="https://apps.apple.com/us/app/world-of-derby-full/id1078273212" target="_blank">Apple AppStore</a>. World of Derby its a racing game about derby in arenas. We were inspired by the game Flatout 2.
         You can buy and upgrade, repair cars. Take part in arena battles.
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <iframe className={classNames(Styles.youtube, Styles.center)} src="https://www.youtube.com/embed/MqUwtk5L-_o" frameBorder="0" allowFullScreen></iframe> 
        </div>

        <div className={classNames(Styles.center, Styles.flexScreenshotContainer)}>
            <a href="https://play.google.com/store/apps/details?id=com.CactusGames.WOD" target="_blank"><img src={IconGooglePlay} alt="Play Store badge" /></a>
            <a href="https://apps.apple.com/us/app/world-of-derby-full/id1078273212" target="_blank"><img src={IconAppStore} alt="Play Store badge" /></a>
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <Image className={Styles.flexRow2} src={Screen0} alt="image" />
            <Image className={Styles.flexRow2} src={Screen1} alt="image" />
            <Image className={Styles.flexRow2} src={Screen2} alt="image" />
            <Image className={Styles.flexRow2} src={Screen3} alt="image" />
            <Image className={Styles.flexRow2} src={Screen4} alt="image" />
        </div>
       </div>
    )
);