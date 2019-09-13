
export class MySlider extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['url-list'];
    }

    attributeChangedCallback(name, oldValue, newValue) {

        const list = newValue.split(',');
        this.setElements(list);
    }

    setElements(list) {
        const div = document.createElement('div')
        const fragment = document.createDocumentFragment();
        const img = document.createElement('img');

        list.forEach(item => {
            const clone = img.cloneNode();
            clone.src = item;
            clone.style.cssText = 'width: 640px;height:480px; object-fit: cover;';
            clone.classList.add('my-slider');
            fragment.appendChild(clone);
        })

        div.appendChild(fragment);

        div.style.cssText = `display: flex; width = ${list.length * 640};
        position: relative; transition: all ease 1s; right: 0`;

        this.appendChild(div);
        const leftArrow = document.createElement('p');
        const rightArrow = document.createElement('p');

        leftArrow.innerText = '<';
        rightArrow.innerText = '>';

        leftArrow.style.cssText = `font-size: 80px; font-weight: 700;
         color: white; position: absolute; top: 125px; left: 20px; cursor: pointer`;
        rightArrow.style.cssText = `font-size: 80px; font-weight: 700;
         color: white; position: absolute; top: 125px; right: 20px; cursor: pointer`

        this.appendChild(leftArrow);
        this.appendChild(rightArrow);

        this.style.cssText = `width:640px; height: 480px; margin: 50px auto;position: relative; overflow: hidden;`;

        let position = 0;

        rightArrow.onclick = function () {
            position = position + 640;
            if (position > ((list.length - 1) * 640)) {
                position = 0
            }
            div.style.right = position + 'px';
        };

        leftArrow.onclick = function () {
            position = position - 640;
            if (position < 0) {
                position = ((list.length - 1) * 640)
            };
            div.style.right = position + 'px';
        };
    }
};