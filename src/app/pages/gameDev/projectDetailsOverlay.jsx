'use client';

import Styles from "./projectDetailsOverlay.module.css";
import { Chip } from "../../Components/tagChips";

export default function Page({ title, onClose, innerJSX, tags }) {
    return (
        <div className={Styles.background} onClick={onClose}>
            <div className={Styles.panel} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.header}>
                    <h2>{title}</h2>
                    <button className={Styles.closeButton} onClick={onClose}>X</button>
                </div>
                <div className={Styles.container}>
                    <div className={Styles.tagsContainer}>
                        {tags && tags.map((tag, i) =>{
                            return (
                                <Chip key={i} tag={tag} isSmallSize={true}/>
                            )
                        })}
                    </div>
                    {innerJSX}
                </div>
            </div>
        </div>
    );
      
  }