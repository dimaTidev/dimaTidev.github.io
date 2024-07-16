'use client'
 
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Styles from "./header.module.css";

// Data
import { CategoryData } from "./ContentBlock/contentData"

export default function Element(){
    let url = usePathname();

    return (
        <div className={Styles.container}>
            {/* <div className={url === "/" ? Styles.active : ""}>
                <Link href="/">Home</Link>
            </div> */}
            
            {/* {CategoryData.map((element, i) =>{
                return (
                    <div className={url.includes(element.Href) ? Styles.active : ""} key={i}>
                        <Link href={element.Href} key={i}>{element.TitleShort}</Link>
                    </div>
                );
            })} */}
            <Link href="https://www.docs.google.com/document/d/10RB1EKj8RIKA4bNUYqm5dbVqAIHBrLdzX-rF_Go0KH8/export?format=pdf"> 
                <div href="#" className="fa fa-download fa-lg"></div> Resume 
            </Link>
        </div>
    );
}