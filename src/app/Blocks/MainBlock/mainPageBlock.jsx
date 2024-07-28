import Link from 'next/link'
import Styles from "./mainPageBlock.module.css";
import Social from "../../Components/social";
import classNames from 'classnames';

export default function Element(){
    return (
        <div className={classNames(Styles.container, "section-content-container")}>
            <div className={classNames(Styles.textContainer)}> 
                <div className={Styles.flexWrapper}>
                    <label>Dima Tymofiienko</label>
                    <h2>Senior Software developer</h2>
                    {/* <label>Software developer</label>
                    <h2>Dima Tymofiienko</h2> */}
                    <p>
                        9+ years of experience in software development. Specialize in XR, mobile, and web development. 
                        Passionate about building effective solutions and supporting team success.
                    </p>
                    <div className={Styles.textContainerSocial}>
                        <Social/>
                        <div>
                            <Link href="https://www.docs.google.com/document/d/10RB1EKj8RIKA4bNUYqm5dbVqAIHBrLdzX-rF_Go0KH8/export?format=pdf"> 
                            <div href="#" className="fa fa-download fa-lg"></div> Resume
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.flexBasis}></div>
            <div className={Styles.imageContainer}></div>
        </div>
    );
}