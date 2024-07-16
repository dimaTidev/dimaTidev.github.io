import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";

import Image from 'next/image';

import Icon from "./Icon.png";
import Screen0 from "./First_lvl.gif";
import Screen1 from "./BigProj.gif";
import Screen2 from "./Gears.gif";
import Screen3 from "./DisconnectPipe.gif";
import Screen4 from "./Electric_BatterySolar_connections.gif";
import Screen5 from "./ToyCar.gif";
import Screen6 from "./Solar_obstacles.gif";

export const data = new GameDataClass("VR Crazy Machines", Icon,
    (
       <div className={Styles.container}>
         <div>
            Crazy Machines Clone. Built on <a href="https://github.com/De-Panther/unity-webxr-export" target="_blank">WebXR Export</a>. VR Puzzle physics-based game where you have to solve puzzles using physical objects, steam pipes, belts, gears, and electric wires.
         </div>

        <div className={Styles.flexScreenshotContainer}>
            <Image className={Styles.flexRow2} src={Screen0} alt="image" />
            <Image className={Styles.flexRow2} src={Screen1} alt="image" />
            <Image className={Styles.flexRow2} src={Screen2} alt="image" />
            <Image className={Styles.flexRow2} src={Screen3} alt="image" />
            <Image className={Styles.flexRow3} src={Screen4} alt="image" />
            <Image className={Styles.flexRow3} src={Screen5} alt="image" />
            <Image className={Styles.flexRow3} src={Screen6} alt="image" />
        </div>

        <div>
        It was interesting to make: 
            <ul>
            <li>VR Interactions from scratch. Sockets, pickup, buttons, levers, winding mechanisms. This interactions works with the mouse as well.</li>
            <li>Time rewind system. Which can put all things back to the places after simulation by rewinding time.</li>
            <li>Value network system for transmitting Value types (steam, electricity, kinematic energy, etc). Value type is a ScriptableObject and it&apos;s easy to add new Value types by copy ScriptableObject.</li>
            <li>Consumers and Producers which search each other by Binary Search Tree, when placed to the value network.</li>
            <li>Gears and belt system. Based on connections to each other system calculate direction and rotation speed.</li>
            </ul>
        </div>

        


       </div>
    )
);