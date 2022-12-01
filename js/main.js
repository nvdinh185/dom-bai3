var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Trang tin VinaEnter Edu';

const ulElement = document.querySelector("#list");

const listNews = [
    {
        id: 1,
        img: 'images/h1.jpg',
        title: 'Cách phối đồ đi hẹn hò 8/3 đẹp như Quỳnh Anh Shyn',
        content: '8/3 sắp đến rồi, những gợi ý mặc đẹp dưới đây sẽ giúp bạn chọn được bộ đồ ưng ý. Cùng học Quỳnh Anh Shyn một vài cách phối đồ cực hay ho để bạn đi hẹn hò 8/3 nhé!'
    },
    {
        id: 2,
        img: 'images/h2.jpg',
        title: 'Diện đồ đôi cho teen đi hẹn hò ngày 8/3',
        content: 'Những cặp đôi yêu nhau đã có ý tưởng nên mặc gì trong ngày 8/3 chưa? Những bộ đồ đôi vừa đẹp vừa thoải mái chắc chắn sẽ là gợi ý ăn mặc cho các bạn trẻ. Dưới đây là những bộ đồ đôi đẹp để teen tham ...'
    },
    {
        id: 3,
        img: 'images/h3.jpg',
        title: 'Hướng dẫn chọn trang phục cho teengirl ngày 8/3',
        content: 'Các teen girl nhà mình hẳn đang rất hào hứng chọn những bộ đồ thật đẹp để đi chơi 8/3. Những gợi ý ăn mặc dưới đây sẽ giúp các nàng có những set đồ thật đẹp để diện trong ngày 8.3 nhé!'
    }
];

listNews.forEach(function (news) {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.href = 'http://google.com/';
    const imgElement = document.createElement('img');
    imgElement.src = news.img;
    imgElement.alt = news.img;
    aElement.appendChild(imgElement);
    liElement.appendChild(aElement);

    const divElement = document.createElement('div');
    divElement.className = 'khoiphai';

    const h2Element = document.createElement('h2');
    const a2Element = document.createElement('a');

    a2Element.href = 'http://google.com/';
    a2Element.innerText = news.title;
    h2Element.appendChild(a2Element);

    const pElement = document.createElement('p');
    pElement.innerText = news.content;

    divElement.appendChild(h2Element);
    divElement.appendChild(pElement);
    liElement.appendChild(divElement);

    const div2Element = document.createElement('div');
    div2Element.className = 'clr';
    liElement.appendChild(div2Element);

    ulElement.appendChild(liElement);

})