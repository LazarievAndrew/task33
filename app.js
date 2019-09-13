// Создать веб компонент - слайдер
// 1) Компонент должен принимать список ссылок на картинки через атрибут,
//  и реагировать на изменение списка
// 2) Визуальная часть должна быть в виде слайдера


const imgsForSlider = [
    'https://klike.net/uploads/posts/2018-10/1539499416_1.jpg',
    'https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg',
    'http://marmazov.ru/wp-content/uploads/2017/05/kotiki.jpg',
    'https://s11.stc.all.kpcdn.net/share/i/12/10896223/inx960x640.jpg',
    'https://i.pinimg.com/originals/34/4c/2f/344c2fa88bd2cc145c0f04e862c4e4ad.jpg',
    'https://i.ytimg.com/vi/M-XtB0R3ri4/maxresdefault.jpg'
];

function setSlider(list) {
    const listElement = document.querySelector('my-slider');
    listElement.setAttribute('url-list', list);
};

setSlider(imgsForSlider);