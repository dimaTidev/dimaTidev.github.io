import Styles from "./tagChips.module.css";
import Image from 'next/image';
import classNames from "classnames";

// Icons
import Unity3d from "./TagChipsIcons/Unity3d.svg";
import CSharp from "./TagChipsIcons/CSharp.svg";
import JavaScript from "./TagChipsIcons/JavaScript.svg";
import Html from "./TagChipsIcons/Html.svg";
import CSS from "./TagChipsIcons/CSS.svg";
import React from "./TagChipsIcons/React.svg";
import ShaderLab from "./TagChipsIcons/ShaderLab.svg";
import Mobile from "./TagChipsIcons/Mobile.svg";
import XR from "./TagChipsIcons/XR.svg";
import Multiplayer from "./TagChipsIcons/Multiplayer.svg";


export const tags = Object.freeze({
    Unity3d: { text: "Unity3d", image: Unity3d },
    React: { text: "React", image: React },
    CSharp: { text: "C#", image: CSharp },
    JavaScript: { text: "JavaScript", image: JavaScript },
    Html: { text: "HTML", image: Html },
    Css: { text: "CSS", image: CSS },
    ShaderLab: { text: "ShaderLab", image: ShaderLab },
    Mobile: { text: "Mobile", image: Mobile },
    XR: { text: "XR", image: XR },
    Multiplayer: { text: "Multiplayer", image: Multiplayer },
    DOTS: { text: "DOTS", image: Unity3d },
});

export function Chip({ tag, isQuiet, isSmallSize}){
    return (
        <div className={classNames(Styles.chip, isSmallSize && Styles.size_S, isQuiet && Styles.chipQuiet)}>
            <Image className={Styles.icon} src={tag.image} alt="image"/>
            <label className={Styles.label}>{tag.text}</label>
        </div>
    );
}