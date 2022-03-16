import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlidesCommon from "../Common";
import styled from "styled-components";
import LanguageSwitcher from "./LanguageSwitcher";
import { useSelector } from "react-redux";
import { selectLang } from "../../../features/lang/langSlice";
import { AttentionSeeker } from "react-awesome-reveal";
const { solid } = require("@fortawesome/fontawesome-svg-core/import.macro");

const HeroLogo = styled.img`
    width: 60vw;
    max-width: 800px;
    position: relative;
    top: -60px;
    @media (max-width: 600px) {
        width: 100%;
        max-width: 100vw;
        padding: 1em;
    }
`;

const { ParallaxSlide } = SlidesCommon;

const Hero = () => {
    const lang = useSelector(selectLang);

    return (
        <ParallaxSlide
            id="hero"
            image={`/images/header.jpg`}
            isFlex
            customStyles={{ flexDirection: "column" }}
        >
            <header
                style={{
                    minHeight: "60px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    color: "white",
                }}
            >
                <div>{` `}</div>
                <header
                    style={{ padding: "0px 1em", flex: 1, textAlign: "right" }}
                >
                    <LanguageSwitcher />
                </header>
            </header>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                    flexDirection: "column",
                }}
            >
                <HeroLogo
                    alt="誉寿司"
                    src={
                        lang === "ja"
                            ? "/images/logo-white.png"
                            : "/images/logo-white-en.png"
                    }
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "1em",
                    }}
                >
                    <AttentionSeeker effect={"bounce"} delay={1000}>
                        <FontAwesomeIcon
                            icon={solid("chevron-down")}
                            color="#f2f2f2"
                            fontSize={"36px"}
                        />
                    </AttentionSeeker>
                </div>
            </div>
        </ParallaxSlide>
    );
};

export default Hero;
