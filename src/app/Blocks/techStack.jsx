import Styles from "./techStack.module.css";

export default function Element(){
    return (
        <div className={Styles.container}>
            <label>Unity3d</label>
            <label>C#</label>
            <label>JavaScript</label>
            <label>HTML/CSS</label>
            <label>React</label>
            <label>StableDiffusion</label>
            <label>ComfyUI</label>
            <label>Figma</label>
        </div>
    );
}