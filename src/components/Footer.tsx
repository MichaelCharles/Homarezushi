import "./footer.css";

const Footer = () => (
    <div className={`footer`}>
        <div className={`footer-wrapper`}>
            <div className={`footer-focus-text`}>
                秋田　誉寿司 © {new Date().getFullYear()}
            </div>{" "}
            <div className={`footer-text`}>TEL & FAX: 018-862-5065</div>{" "}
            <div className={`footer-text`}>
                〒010-0913　秋田県秋田市保戸野鉄砲町2-21
            </div>
        </div>
    </div>
);

export default Footer;
