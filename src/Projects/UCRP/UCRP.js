import { GameDataClass } from "../GameDataClass";
import Styles from "../styles.module.css";
import classNames from 'classnames';

import Image from 'next/image';
import { tags } from "../../app/Components/tagChips";

import Screen1 from "./ucrp_assets.jpg";
import Screen2 from "./ucrp_collaborate.jpg";
import Screen3 from "./ucrp_vr.jpg";

export const data = new GameDataClass("Unity Cloud Reference Project", "UCRP", Screen2,
    (
       <div className={Styles.container}>
            <div>
                The project is a fully functional collaborative design review tool for 3D assets. 
                Supports PC, Android, iOS, WebGL, VR (Quest2) and Hololens.

                <p> 
                    The Unity Cloud Reference Project is intended as a starting point for industry developers, and is architected with customization and extensibility in mind. Developers can pull in changes from the latest release with minimal conflicts to their codebase and can easily remove unwanted features. It supports many build targets including WebGL, which along with deep-linking support, empowers users to easily share their 3D assets for review with one-click.
                </p>
            </div>

            <p/> 
            <div className={Styles.flexScreenshotContainer}>
                <iframe className={classNames(Styles.youtube2, Styles.flexRow2)} src="https://www.youtube.com/embed/E0alTWB8m2Q" frameBorder="0" allowFullScreen></iframe> 
                <iframe className={classNames(Styles.youtube2, Styles.flexRow2)} src="https://www.youtube.com/embed/WTCf5geMghw" frameBorder="0" allowFullScreen></iframe> 
            </div>

            
                <a className={classNames(Styles.buttonGithub, Styles.center)} href=" https://github.com/Unity-Technologies/unity-cloud-reference-project?tab=readme-ov-file" target="_blank">
                    <a className="fa fa-github fa-lg"/>
                    <label className={Styles.ignorePointer}> Project repo</label>
                </a>
            


            <div className={Styles.flexScreenshotContainer}>
                <Image className={Styles.flexRow3} src={Screen1} alt="image" />
                <Image className={Styles.flexRow3} src={Screen2} alt="image" />
                <Image className={Styles.flexRow3} src={Screen3} alt="image" />
            </div>

            <div>
                The project utilizes different SDKs such as 
                <a gref="https://docs.unity.com/cloud/en-us/creator-sdks/data-streaming" target="_blank"> 3d data streaming, </a>
                <a href="https://docs.unity.com/cloud/en-us/creator-sdks/identity" target="_blank">Identity, </a>
                <a href="https://docs.unity.com/cloud/en-us/creator-sdks/assets" target="_blank">Asset manager, </a>
                <a href="https://docs.unity.com/cloud/en-us/creator-sdks/deep-linking" target="_blank">Deep Linking, </a>
                <a href="https://docs.unity.com/cloud/en-us/creator-sdks/annotations" target="_blank">Annotations, </a>
                <a href="https://docs.unity.com/cloud/en-us/creator-sdks/presence" target="_blank">Presence, </a> and
                <a href="https://docs.unity.com/cloud/en-us/creator-sdks/metadata" target="_blank"> Metadata. </a> 
            </div>
       </div>
    ),
    [tags.Unity3d, tags.CSharp, tags.XR, tags.Mobile, tags.Multiplayer]
);