import Styles from "./social.module.css";

export default function Element(){
    return (
        <div className={Styles.container}>
            <a href="mailto:timofeenkodima@gmail.com" className="fa fa-envelope-o fa-lg"></a>
            <a href="https://www.linkedin.com/in/dimatidev/" className="fa fa-linkedin fa-lg" target="_blank"></a>
            <a href="https://github.com/dimaTidev" className="fa fa-github fa-lg" target="_blank"></a>
            <a href="https://www.instagram.com/dimatidev/" className="fa fa-instagram fa-lg" target="_blank"></a>
            <a href="https://www.facebook.com/profile.php?id=100011299205944" className="fa fa-facebook fa-lg" target="_blank"></a>
        </div>
    );
}