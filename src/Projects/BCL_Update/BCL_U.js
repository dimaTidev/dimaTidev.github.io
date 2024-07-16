import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';

import Icon from "./Icon.png";
import Screen0 from "./Car_Destructibles.gif";
import Screen1 from "./Jobs.gif";
import Screen2 from "./DayNightShift.gif";
import Screen3 from "./LightScaleUp.gif";
import Screen4 from "./TopDownShadow.gif";

export const data = new GameDataClass("BigCityLife Update", Icon,
    (
       <div className={Styles.container}>
            <div>
                <p>The old version of this game was published on google play. Here is shown huge update for this game. But due to a team breakup development of this project was stopped.</p>
                <p>In this game, the player can use jobs to earn money and buy cars, house, customize a character, and fulfill desires. There is a taxi job, food delivery, 3 types of city clean job, builder, thief. Character need for sleep, eat and have fun. If a player uses cheats, the game will put him in the prison.</p>
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
                    <li>Cheat detection and delayed punishment (put in prison).</li>
                    <li>Car physics</li>
                    <li>Traffic system. Finding close point on the traffic network, and spawning traffic vehicles only near this point. Vehicles from traffic do not have physics. They switch to gameObject with physics only when a player hits them.</li>
                    <li>All dynamic object spawns only around the player. All far objects, which are not visible, will despawn.</li>
                </ul>
                    Effects:
                <ul>
                    <li>Custom LightMap. The result from blending 2 lightMaps (Day and Night) at runtime for the Day change effect.</li>
                    <li>Lights based on a topdown map</li>
                    <li>Light effect, from street lights, scale to up direction when the camera comes close to avoid overdraws</li>
                    <li>Shader-based banners animation. All light banners are baked into one mesh. The difference between them is vertex data which does change the effect.</li>
                    <li>Partition, shader-based falling snow. All snow pieces are baked into one mesh. Used a local billboard and fall down by shader. Vertex data control vertical offset and speed. 9 identical volumes around the player, will move with the player when he changes grid cell.</li>
                </ul>
            </div>
       </div>
    )
);