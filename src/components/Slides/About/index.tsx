import { useSelector } from "react-redux";
import { selectLang } from "../../../features/lang/langSlice";
import { useLocalization } from "../../../localization";
import SlidesCommon from "../Common";
import PhotoCard from "./PhotoCard";
const { RepeatingImageSlide } = SlidesCommon;

const About = () => {
    const lang = useSelector(selectLang);
    const [l, s] = useLocalization(lang);

    return (
        <RepeatingImageSlide
            id="about"
            image="./images/japanese-paper.jpg"
            baseColor="#f2f2f2"
            isFlex
        >
            {" "}
            <div
                style={{
                    maxWidth: "768px",
                    width: "100%",
                    padding: "1em",
                }}
            >
                <PhotoCard
                    title={l.get(s.styleCardTitle)}
                    content={l.get(s.styleCardMessage)}
                    image="/images/wall-banner.jpg"
                />
                <PhotoCard
                    title={l.get(s.familyCardTitle)}
                    content={l.get(s.familyCardMessage)}
                    image="/images/family-work.jpg"
                    isRight
                />
                <PhotoCard
                    title={l.get(s.freshCardTitle)}
                    content={l.get(s.freshCardMessage)}
                    image="/images/fresh-in-tank.jpg"
                />
            </div>
        </RepeatingImageSlide>
    );
};

export default About;
