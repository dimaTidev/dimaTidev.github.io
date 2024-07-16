'use client';
// import Link from 'next/link'
import Image from 'next/image'
import classNames from "classnames";
import Styles from "./gameElement.module.css";

//import bg from './Icon_slimeAttack.jpg'

export default function Element({title, imageUrl, additionalClassName, onClick}){
    return (
        <div className={classNames(Styles.container, additionalClassName)}>
            {/* <Image src={imageUrl} alt="logo"/> */}
            {/* <div className={Styles.textImage} style={{ backgroundImage: `url("./gameDev/Content/Icon_slimeAttack.jpg")`, width: '100px', height: '100px', }}></div> */}
            {/* <div className={Styles.textImage} style={{ backgroundImage: `url(${bg})`, width: '100px', height: '100px', }}></div> */}
            {/* <div className={Styles.textImage} style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => onClick(title)}></div> */}
            <div className={Styles.selection}>
                <Image className={Styles.textImage} src={imageUrl} onClick={() => onClick(title)}/>
                <div className={Styles.titleContainer}>
                    <h4 className={Styles.textOpacity}>{title}</h4>
                </div>
            </div>
            
            {/* <h3>{title}hello</h3> */}
        </div>
    );
}