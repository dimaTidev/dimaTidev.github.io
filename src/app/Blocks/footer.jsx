import Styles from "./footer.module.css";
import Social from "../Components/social"
import classNames from "classnames";

export default function Element(){
    return (
        <div className={classNames(Styles.background, "section")}>
            <div className={classNames(Styles.container, "section-content-container")}>
                <div className={Styles.flexContainer}>
                    <div className={Styles.textWrapper}>
                        <h2>Let&apos;s get in touch</h2>
                        <label>Feel free to contact me about any opportunity, or just to chat about cooking, kittens or anything else.</label>
                        <Social/>
                    </div>
                </div>
            </div>
        </div>

    );
}