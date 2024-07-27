import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Icon.jpg";
import Screen_1 from "./Screen_1.gif";
import Screen_2 from "./Screen_2.gif";
import Screen_3 from "./Screen_3.gif";

export const data = new GameDataClass("Network Battleships", "HackBattleShips", Icon,
    (
       <div className={Styles.container}>
            I saved 99% of bandwidth by replacing projectile update synchronization with one-time
            synchronization and deterministic calculations in this 4 days network project.

            <div className={Styles.flexScreenshotContainer}>
                <iframe className={classNames(Styles.youtube)} src="https://www.youtube.com/embed/dGqf35pXthA" frameBorder="0" allowFullScreen></iframe> 
            </div>

            
            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow3} src={Screen_1} alt="image" />
                <Image className={Styles.flexRow3} src={Screen_2} alt="image" />
                <Image className={Styles.flexRow3} src={Screen_3} alt="image" />
            </div>

            <br/><br/>
            <h3 className={Styles.center}>A short project description</h3>     

            <div className={Styles.flexScreenshotContainer}>
                <div>
                    <p>
                        Each player controlls a ship. The main goal to survive in the game. Each ship can shoot cannon balls and take down other ships.
                    </p>

                    <p>
                        &bull; The project was made from scratch in 4 days.
                        <br/> &bull; The project is fully network. Utilizes <a href="https://docs-multiplayer.unity3d.com/netcode/current/about/" target="_blank">Netcode for GameObjects</a>.
                        <br/> &bull; The team contained 3 software developers including me.
                        <br/> &bull; For quick development iteration, we utilized the 
                        <a href="https://docs-multiplayer.unity3d.com/netcode/current/about/" target="_blank"> ParrelSync</a> tool which saved time a lot.
                    </p>
                    
                </div>
            </div>

            {/* <br/><br/>
            <h3 className={Styles.center}>My duties:</h3>     
            <br/>

            <div className={Styles.flexScreenshotContainer}>

                <div className={Styles.flexRowFill}>
                    <h3>Projectile synchronization</h3>
                    <p>
                        Bla bla bla
                    </p>
                </div>
            </div>

            <br/>
            <div className={Styles.flexScreenshotContainer}>
                <div className={Styles.flexRowFill}>
                    <h3>Visual effects synchronization</h3>
                </div>

            </div> */}
       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.Multiplayer]
);