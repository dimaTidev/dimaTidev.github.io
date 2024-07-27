import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Icon from "./Ants5.jpg";
import ProfilerObj from "./ProfilerObject.jpg";
import ProfilerDOTS from "./ProfilerDOTS.jpg";
import Pheromones from "./Pheromones.jpg";
import VisionMaps from "./VisionMaps.jpg";
import ObstacleMaps from "./ObstacleMaps.jpg";

import Screen1 from "./Screen_1.jpg";
import Screen2 from "./Screen_2.jpg";

export const data = new GameDataClass("DOTS Ants", "DOTSAnts", Icon,
    (
       <div className={Styles.container}>
            I migrated the existing project to Data oriented technology stack (DOTS) and improved performance to 60 FPS. 
            <p>
                <h3>The problem was:</h3>
                The simulation takes 2770ms for 1 frame with 200k ants
            </p>

            <p>
                <h3>The goal:</h3> 
                60FPS (16ms) with 200k ants simulation
            </p>

            <div className={Styles.flexScreenshotContainer}>
                <iframe className={classNames(Styles.youtube)} src="https://www.youtube.com/embed/daum8_I6bHk" frameBorder="0" allowFullScreen></iframe> 
            </div>

            
            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow3} src={Icon} alt="image" />
                <Image className={Styles.flexRow3} src={Screen1} alt="image" />
                <Image className={Styles.flexRow3} src={Screen2} alt="image" />
            </div>

            <br/><br/>
            <h3 className={Styles.center}>A short project desciption</h3>     
            <br/>

            <div className={Styles.flexScreenshotContainer}>
                <div>

                    <p>
                        &bull; We have a map with ants base in the center
                        <br/>&bull; The map contains a food source
                        <br/>&bull; The map contains obstacles in the form of circular walls.
                        <br/>&bull; Ants should find the food source and bring the food to the base.
                        <br/>&bull; Each ant leaves a red pheromone to guide the next ants.
                    </p>
                </div>

                <Image className={Styles.flexRow3} src={Pheromones} alt="image" />
            </div>

            <br/><br/>
            <h3 className={Styles.center}>After jobs parallelization, I used different techniques to improve performance:</h3>     
            <br/>

            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow3} src={VisionMaps} alt="image" />

                <div className={Styles.flexRowFill}>
                    <h3>Vision map baking</h3>
                    <p>
                        I replaced raycasting from each ant to the food source and the base with prebaked vision maps.
                    </p>

                    <p>
                        &bull; The food source vision map is green
                        <br/>&bull; The base vision map is blue
                    </p>

                    <p>
                        The red color is a pheromone. So I packed 3 maps into one RGB picture to save space.
                    </p>
                </div>
            </div>

            <br/>
            <div className={Styles.flexScreenshotContainer}>
                <div className={Styles.flexRowFill}>
                    <h3>Obstacles baking</h3>
                    <p>
                        Each ant does 2 raycasts to determine obstacles on the way. It scales badly when we add 200k ants.
                    </p>

                    <p>
                        I replaced raycasting with a pre-baked obstacle map.
                        <br/> Instead of raycasting, each ant checks the next pixel on the obstacle map.
                        
                    </p>

                    <p>
                        This implementation makes 4 mechanics (pheromones, vision, obstacles) follow the same approach which simplifies the code.
                    </p>
                </div>

                <Image className={Styles.flexRow3} src={ObstacleMaps} alt="image" />
            </div>

            <br/><br/>
            <h3 className={Styles.center}>Profiler data</h3>

            <p className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow} src={ProfilerObj} alt="image" />
                <div>Before DOTS transition CPU: 2770ms</div>
            </p>
            <p className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow} src={ProfilerDOTS} alt="image" />
                <div>After DOTS migration CPU: 15ms</div>
            </p>
       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.DOTS]
);