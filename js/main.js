var headingElement = document.querySelector("#heading");

headingElement.innerText = 'Trang tin VinaEnter Edu';

const ulElement = document.querySelector("#list");

const listNews = [
    {
        id: 1,
        img: 'h1.jpg',
        title: 'Cách phối đồ đi hẹn hò 8/3 đẹp như Quỳnh Anh Shyn',
        content: '8/3 sắp đến rồi, những gợi ý mặc đẹp dưới đây sẽ giúp bạn chọn được bộ đồ ưng ý. Cùng học Quỳnh Anh Shyn một vài cách phối đồ cực hay ho để bạn đi hẹn hò 8/3 nhé!'
    },
    {
        id: 2,
        img: 'h2.jpg',
        title: 'Diện đồ đôi cho teen đi hẹn hò ngày 8/3',
        content: 'Những cặp đôi yêu nhau đã có ý tưởng nên mặc gì trong ngày 8/3 chưa? Những bộ đồ đôi vừa đẹp vừa thoải mái chắc chắn sẽ là gợi ý ăn mặc cho các bạn trẻ. Dưới đây là những bộ đồ đôi đẹp để teen tham ...'
    },
    {
        id: 3,
        img: 'h3.jpg',
        title: 'Hướng dẫn chọn trang phục cho teengirl ngày 8/3',
        content: 'Các teen girl nhà mình hẳn đang rất hào hứng chọn những bộ đồ thật đẹp để đi chơi 8/3. Những gợi ý ăn mặc dưới đây sẽ giúp các nàng có những set đồ thật đẹp để diện trong ngày 8.3 nhé!'
    }
];

// Cách 1:
// listNews.forEach(function (news) {
//     const liElement = document.createElement('li');
//     liElement.innerHTML = `
//         <a href="#"><img src=images/${news.img} alt=${news.img} /></a>
//         <div class="khoiphai">
//             <h2><a href="#">${news.title}</a></h2>
//             <p>${news.content}</p>
//         </div>
//         <div class="clr"></div>
//         `;

//     ulElement.appendChild(liElement);

// })

// Cách 2:
// var htmls = '';
// listNews.forEach(function (news) {
//     htmls += `
//         <li>
//             <a href="#"><img src=images/${news.img} alt=${news.img} /></a>
//             <div class="khoiphai">
//                 <h2><a href="#">${news.title}</a></h2>
//                 <p>${news.content}</p>
//             </div>
//             <div class="clr"></div>
//         </li>
//     `;
// })

// ulElement.innerHTML = htmls;

// Cách 3:
var htmls = listNews.map(function (news) {
    return `
        <li>
            <a href="#"><img src="images/${news.img}" alt="${news.img}" /></a>
            <div class="khoiphai">
                <h2><a href="#">${news.title}</a></h2>
                <p>${news.content}</p>
            </div>
            <div class="clr"></div>
        </li>
    `;
})

ulElement.innerHTML = htmls.join('');