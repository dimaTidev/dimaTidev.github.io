import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';
import Image from 'next/image';

import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.png";
import Screen0 from "./Pistol_throw.gif";
import Screen1 from "./PistolReloatThrow.gif";
import Screen2 from "./Reloading.gif";

export const data = new GameDataClass("VR weapon showcase", "VR_weapon_showcase", Icon,
    (
       <div className={Styles.container}>
         <div>
            VR weapon interaction showcase. Built on <a href="https://github.com/De-Panther/unity-webxr-export" target="_blank">WebXR Export</a>. In development. Currently available pistol. Other weapons are on the way. 
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <iframe className={classNames(Styles.youtube, Styles.center)} src="https://www.youtube.com/embed/UqstOUAfglk" frameBorder="0" allowFullScreen></iframe> 
        </div>

        <div className={Styles.flexScreenshotContainer}>
            <Image className={Styles.flexRow3} src={Screen0} alt="image" />
            <Image className={Styles.flexRow3} src={Screen1} alt="image" />
            <Image className={Styles.flexRow3} src={Screen2} alt="image" />
        </div>

       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.ShaderLab, tags.XR]
);