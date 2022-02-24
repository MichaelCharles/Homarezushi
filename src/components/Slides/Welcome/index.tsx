import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlidesCommon from "../Common";
import { Fade } from "react-awesome-reveal";

import "./welcome.css";
const { solid } = require("@fortawesome/fontawesome-svg-core/import.macro");
const { GradientSlide } = SlidesCommon;

const Welcome = () => (
    <GradientSlide colors={["#651fff", "#881fff"]} isFlex>
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
                <h2>ようこそ</h2>
            </Fade>
            <Fade triggerOnce>
                <img
                    alt="〜"
                    src="./images/divider.png"
                    className={`welcome-divider`}
                />
            </Fade>
            <Fade triggerOnce>
                <p>
                    昭和47年、秋田市の中心部に店を構えた誉寿司は45年以上にわたりアットホームでお客様に寄り添ったサービスを提供してまいりました。
                    店主自慢の煮穴子は当店で一番の人気があり、おかげさまで県内外だけにはとどまらず、海外からもお客様を迎えるほどとなりました。
                    お近くにお越しの際は、是非当店の穴子のにぎり寿司、穴子の棒寿司をご賞味ください。
                </p>
            </Fade>
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
                            電話とFAX番号
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
                            営業時間
                            <br />
                            11:00～14:00
                            <br />
                            16:30～23:00
                            <br />
                            <br />
                            定休日：元旦・毎週月曜日
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
                            秋田県秋田市保戸野鉄砲町2-21
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
    </GradientSlide>
);

export default Welcome;
