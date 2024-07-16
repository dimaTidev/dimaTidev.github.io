'use client';

import Styles from "./projectDetailsOverlay.module.css";

export default function Page({ title, onClose, innerJSX }) {
    return (
        <div className={Styles.background} onClick={onClose}>
            <div className={Styles.panel} onClick={(e) => e.stopPropagation()}>
                <div className={Styles.header}>
                    <h2>{title}</h2>
                    <button className={Styles.closeButton} onClick={onClose}>X</button>
                </div>
                <div className={Styles.container}>
                    {innerJSX}
                </div>
            </div>
        </div>
    );
      
  }