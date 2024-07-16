'use client';

import Link from 'next/link'
import classNames from "classnames";
import Styles from "./contentBlock.module.css";

export default function Element({isReverced, title, description, href}){

    const resultStyles = classNames(
        Styles.container, 
        isReverced && Styles.containerReversed,
    );

    return (
        <div className={resultStyles}>
            {/* onClick={() => window.open("/src/app" + {href})} */}
            <div className={Styles.textContainer}> 
                <div className={Styles.textWrapper}>
                    <div className={Styles.textDescription}>
                        <h2>{title}</h2>
                        <label>{description}</label>
                    </div>
                    <Link href={href ?? "#"}>Learn more...</Link>
                </div>
            </div>
            <div className={Styles.imageContainer}>
                <div className={Styles.imageWrapper}>
                </div>
            </div>
        </div>
    );
}