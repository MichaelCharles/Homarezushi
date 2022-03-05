import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlidesCommon from "../Common";
import { Fade } from "react-awesome-reveal";
import "./contact.css";
import { useSelector } from "react-redux";
import { selectLang } from "../../../features/lang/langSlice";
import { useLocalization } from "../../../localization";

const { solid } = require("@fortawesome/fontawesome-svg-core/import.macro");
const { GradientSlide } = SlidesCommon;

const Contact = () => {
    const lang = useSelector(selectLang);
    const [l, s] = useLocalization(lang);
    return (
        <GradientSlide id="contact" colors={["#f44336", "#c493b6"]} isFlex>
            <div
                className="about"
                style={{
                    color: "#f2f2f2",
                    maxWidth: "768px",
                    width: "100%",
                    padding: "1em",
                }}
            >
                <Fade triggerOnce>
                    <h2>{l.get(s.contactTitle)}</h2>
                </Fade>
                <Fade triggerOnce>
                    <img
                        alt="〜"
                        src="/images/divider.png"
                        className={`welcome-divider`}
                    />
                </Fade>
                <Fade triggerOnce>{<p>{l.get(s.contactText)}</p>}</Fade>
                <div className="contact-small-card-area">
                    <Fade triggerOnce>
                        <div className="small-card">
                            <div className="small-card-icon">
                                <FontAwesomeIcon
                                    icon={solid("phone")}
                                    color="#f2f2f2"
                                />
                            </div>
                            <p>
                                {l.get(s.phoneAndFax)}
                                <br />
                                018-862-5065
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </GradientSlide>
    );
};

export default Contact;
