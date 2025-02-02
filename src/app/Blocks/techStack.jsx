import Styles from "./techStack.module.css";
import { Chip, tags } from "../Components/tagChips";
import classNames from "classnames";

export default function Element(){
    return (
        <div className={classNames(Styles.background, "section")}>
        <div className={classNames(Styles.container, "section-content-container")}>
                <Chip tag={tags.Unity3d} isQuiet={true}/>
                <Chip tag={tags.React} isQuiet={true}/>
                <Chip tag={tags.CSharp} isQuiet={true}/>
                <Chip tag={tags.ShaderLab} isQuiet={true}/>
                <Chip tag={tags.JavaScript} isQuiet={true}/>
                <Chip tag={tags.Html} isQuiet={true}/>
                <Chip tag={tags.Css} isQuiet={true}/>
            </div>
        </div>
    );
}