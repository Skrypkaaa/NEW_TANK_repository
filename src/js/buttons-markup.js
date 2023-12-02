import icons from '../img/icons-tank.svg'

export class PaginationButtons {
    constructor() {}
    numBtnCreateMarkUp(num) {
        return `<li class="buttons-item">
            <button class="pagin-btn num-btn" type="button" data-button-id="${num}">${num}</button>
        </li>`;
    }
    numBtnSetActive(num) {}
    numBtnSetInactive(num) {}
    numBtnChangeNum() {}

    intervalBtnCreateMarkUp() {
        return `<li class="buttons-item">
            <button class="pagin-btn interval-btn" type="button" data-button-id="interval">...</button>
        </li>`;
    }
    intervalBtnShow() {}
    intervalBtnHide() {}

    prevBtnCreateMarkUp() {
        return `<li class="buttons-item">
            <button class="pagin-btn prev-btn" type="button" data-button-id="prev-btn" aria-label="Previous">
                <svg class="icon-shopping-cart" width="24" height="24">
                    <use href="${icons}#icon-left-side" class="pagination-arrows" />
                </svg>
            </button>
        </li>`;
    }
    nextBtnCreateMarkUp() {
        return `<li class="buttons-item">
            <button class="pagin-btn next-btn" type="button" data-button-id="next-btn" aria-label="Next">
                <svg class="icon-shopping-cart" width="24" height="24">
                    <use href="${icons}#icon-right-side" class="pagination-arrows" />
                </svg>
            </button>
        </li>`;
    }
    prevBtnSetActive(num) {}
    prevBtnSetInactive(num) {}
    nextBtnSetActive(num) {}
    nextBtnSetInactive(num) {}
}