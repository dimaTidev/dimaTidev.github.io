import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.jpg";
import Screen0 from "./HideSeek.gif";
import Screen1 from "./CharacterCustomization.gif";
import Screen2 from "./OpenCrate.gif";
import Screen3 from "./hider_morph.gif";
import Screen4 from "./hider_morph_2.gif";

export const data = new GameDataClass("HideIO", "HideIO", Icon,
    (
       <div className={Styles.container}>
            <div>
                Prototype of game Hide and Seek. Multiplayer game, made on Unity Network. You can play for hider or seeker. Hiders can morphed to objects. Seekers have to find hiders. You also can customize character like clothes, boots, helmets, weapons. 
            </div>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow2} src={Screen0} alt="image" />
                <Image className={Styles.flexRow2} src={Screen1} alt="image" />
                <Image className={Styles.flexRow3} src={Screen2} alt="image" />
                <Image className={Styles.flexRow3} src={Screen3} alt="image" />
                <Image className={Styles.flexRow3} src={Screen4} alt="image" />
            </div>

            <div>
                I&apos;ve covered interesting technical aspects here:
                <ul>
                    <li>Character castomization system</li>
                    <li>Texture baking</li>
                    <li>Baking mesh with bones</li>
                </ul>
            </div>

       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.Mobile, tags.Multiplayer]
);