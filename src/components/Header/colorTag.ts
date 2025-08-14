class ColorTag {
    addClass: string;
    removeClass: string;
    selector: string;

    constructor(addClass: string, removeClass: string, selector: string) {
        this.selector = selector;
        this.addClass = addClass;
        this.removeClass = removeClass;
    }

    addStyle() {
        const elem = document.querySelectorAll(this.selector);
        if (elem) {
            [...elem].map((item) => {
                item.classList.add(this.addClass);
                item.classList.remove(this.removeClass);
            });
        }
    }
    removeAddStyle() {
        const elem = document.querySelectorAll(this.selector);
        if (elem) {
            [...elem].map((item) => {
                item.classList.remove(this.addClass);
                item.classList.add(this.removeClass);
            });
        }
    }
}
const liHeader = new ColorTag(
    'font_white',
    'font_dark',
    '.menu__item:not(:nth-of-type(5))'
);
const liLastHeader = new ColorTag(
    'font_white',
    'li-last_dark',
    '.menu__item:nth-of-type(5)'
);
const pNameCompany = new ColorTag(
    'font_white',
    'p_dark',
    '.name-company__time'
);
const ptextDeliver = new ColorTag(
    'font_white',
    'p_dark',
    '.text-delivery__time'
);
const pTextMinute = new ColorTag('font_white', 'p_dark', '.text-minut__time');
const spanReiting = new ColorTag('font_white', 'p_dark', '.span-reiting__time');
const pDeliverHeader = new ColorTag(
    'font_white',
    'p_dark',
    '.option-deliver-city__paste>p'
);
const h2 = new ColorTag('font_white', 'p_dark', '.h2');
const pLastTitleProduct = new ColorTag(
    'font_white',
    'p_grey',
    '.productDesc_middle p:last-of-type'
);
const pFirstTitleProduct = new ColorTag(
    'font_white',
    'p-title_grey',
    '.productDesc_middle p:first-of-type'
);
const pProductBottom = new ColorTag(
    'font_white',
    'font_dark',
    '.productDesc_bottom p'
);
const pFooterInfo = new ColorTag('font_white', 'font_dark', '.footer__info p');
const pFooterSocial = new ColorTag('font_white', 'font_dark', '.title__social');
const linkSocialList = new ColorTag(
    'font_white',
    'font_dark',
    'ul.list__social_middle li > a'
);
const linkSocialListLeft = new ColorTag(
    'font_white',
    'font_dark',
    'ul.list__social_left li > a'
);
const pSocialMiddle = new ColorTag(
    'font_white',
    'font_dark',
    '.list__social_middle + p '
);
const pMessage = new ColorTag('font_white', 'font_dark', '.message > p ');
const pLastFooterText = new ColorTag('font_white', 'font_dark', '.last__text');
const btnEmail = new ColorTag('font_white', 'font_dark', '.btn__email');
const pAdress = new ColorTag('font_white', 'font_dark', '.adress__contacts p');

export const arrTags = [
    liHeader,
    liLastHeader,
    pNameCompany,
    ptextDeliver,
    pTextMinute,
    spanReiting,
    pDeliverHeader,
    h2,
    pLastTitleProduct,
    pFirstTitleProduct,
    pProductBottom,
    pFooterInfo,
    pFooterSocial,
    linkSocialList,
    linkSocialListLeft,
    pSocialMiddle,
    pMessage,
    pLastFooterText,
    btnEmail,
    pAdress,
];
