interface ILocalizationGroup {
    en: string;
    ja: string;
}

export const strings = {
    welcome: {
        en: "Welcome!",
        ja: "ようこそ！",
    },
    welcomeMessage: {
        en: "We welcome everyone. Located near the center of Akita City, Homarezushi has provided excellent service with a family touch for over 45 years. Come by and try our famous anago (conger eel) sushi.",
        ja: "昭和47年、秋田市の中心部に店を構えた誉寿司は45年以上にわたりアットホームでお客様に寄り添ったサービスを提供してまいりました。 店主自慢の煮穴子は当店で一番の人気があり、おかげさまで県内外だけにはとどまらず、海外からもお客様を迎えるほどとなりました。 お近くにお越しの際は、是非当店の穴子のにぎり寿司、穴子の棒寿司をご賞味ください。",
    },
    phoneAndFax: {
        en: "Phone and Fax Number",
        ja: "電話とFAX番号",
    },
    businessHours: {
        en: "Business Hours",
        ja: "営業時間",
    },
    address: {
        en: "Akita Prefecture, Akita City, Hodonoteppomachi 2-21",
        ja: "秋田県秋田市保戸野鉄砲町2-21",
    },
    closedNotice: {
        en: "Closed New Year's Day and every Monday.",
        ja: "定休日：元旦・毎週月曜日",
    },
    styleCardTitle: {
        en: "Traditional Style",
        ja: "伝統的なスタイル",
    },
    styleCardMessage: {
        en: "Chef Kenjiro Kakuta has made traditional Edo style sushi for over 40 years. He is uncompromising in his commitment to tradition and excellence.",
        ja: "誉寿司店主は45年以上にわたり、伝統的な江戸前寿司を皆様にお楽しみいただいております。 店主がこだわり続ける江戸前寿司の伝統と卓越性は揺るぎがございません。 満足いただける一品一品を自信を持ってお出ししております。",
    },
    familyCardTitle: {
        en: "Family Touch",
        ja: "アットホームな雰囲気",
    },
    familyCardMessage: {
        en: "Homarezushi is a small, local, family-owned business and the personal touch shines through. People quickly find that they're more than just a customer, they're family.",
        ja: "当店は、家族経営の商売をしております。 専門店は敷居が高いとお感じの方も沢山いらっしゃいますが、そんなことはございません。 当店は、お客様に居心地よく大切な時間を過ごしていただけることを願っておりますので、お気兼ねなく 引き戸を開けてお越しください。 ご来店いただいた多くのお客様からは、「もっと早く来れば良かった」と言っていただいております。",
    },
    freshCardTitle: {
        en: "Fresh Every Day",
        ja: "毎日新鮮なネタ",
    },
    freshCardMessage: {
        en: "All ingredients are bought fresh every day, letting you experience the absolute best taste possible. Homarezushi has consistently supported small businesses by buying locally.",
        ja: "お客様に最高の食材を召し上がっていただくため、店主は毎日早朝にネタの仕入れを自身の目で見定めて仕入れております。 たとえ食材が売られていても、納得のいかない質や鮮度のものは、絶対仕入れません。店主の頑固さがより一層良いネタを 提供する理由の１つです。 また、当店は一貫してローカルで仕入れることで、地元の中小企業を支援しております。",
    },
    contactTitle: {
        en: "Reservations",
        ja: "予約",
    },
    contactText: {
        en: "If you want to eat with a large group, or even have Homarezushi host your party, it is best to contact us ahead of time to make a reservation. Unfortunately, reservations can only be made in Japanese.",
        ja: "ご宴会、出張寿司をご要望の際は、あらかじめ電話でのご予約を承っております。",
    },
    menuHero: {
        en: "Top",
        ja: "トップ",
    },
    menuWelcome: {
        en: "About",
        ja: "詳細",
    },
    menuAbout: {
        en: "Atmosphere",
        ja: "こだわり",
    },
    menuPhotos: {
        en: "Photos",
        ja: "写真",
    },
    menuContact: {
        en: "Reservations",
        ja: "予約",
    },
};

interface ILocalizer {
    lang: string;
    get: Function;
}

export class Localizer implements ILocalizer {
    lang: "ja" | "en";

    constructor(lang: "ja" | "en") {
        this.lang = lang;
    }

    get(group: ILocalizationGroup) {
        return group[this.lang];
    }
}

export function useLocalization(
    lang: "en" | "ja"
): [ILocalizer, typeof strings] {
    const localizer = new Localizer(lang);
    return [localizer, strings];
}
