import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlidesCommon from "../Common";
import { Fade } from "react-awesome-reveal";
import "./welcome.css";
import { useSelector } from "react-redux";
import { selectLang } from "../../../features/lang/langSlice";
import { useLocalization } from "../../../localization";

const { solid } = require("@fortawesome/fontawesome-svg-core/import.macro");
const { GradientSlide } = SlidesCommon;

const Welcome = () => {
    const lang = useSelector(selectLang);
    const [l, s] = useLocalization(lang);

    return (
        <GradientSlide id="welcome" colors={["#651fff", "#881fff"]} isFlex>
            <div
                className="welcome"
                style={{
                    color: "#f2f2f2",
                    maxWidth: "768px",
                    width: "100%",
                    padding: "1em",
                }}
            >
                <Fade triggerOnce>
                    <h2>{l.get(s.welcome)}</h2>
                </Fade>
                <Fade triggerOnce>
                    <img
                        alt="〜"
                        src="/images/divider.png"
                        className={`welcome-divider`}
                    />
                </Fade>
                <Fade triggerOnce>{<p>{l.get(s.welcomeMessage)}</p>}</Fade>
                <div className="small-card-area">
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
                    <Fade triggerOnce>
                        <div className="small-card">
                            <div className="small-card-icon">
                                <FontAwesomeIcon
                                    icon={solid("clock")}
                                    color="#f2f2f2"
                                />
                            </div>
                            <p>
                                {l.get(s.businessHours)}
                                <br />
                                11:00～14:00
                                <br />
                                16:30～23:00
                                <br />
                                <br />
                                {l.get(s.closedNotice)}
                                <br />
                            </p>
                        </div>
                        <Fade triggerOnce></Fade>
                        <div className="small-card">
                            <div className="small-card-icon">
                                <FontAwesomeIcon
                                    icon={solid("location-dot")}
                                    color="#f2f2f2"
                                />
                            </div>
                            <p>
                                〒010-0913
                                <br />
                                {l.get(s.address)}
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
        </GradientSlide>
    );
};

export default Welcome;
