const quotes = [
    {
        quote : "잠은 인생의 낭비이다.",
        author : "직",
    },
    {
        quote : "시간의 밀도는 상대적이다.",
        author : "직",
    },
    {
        quote : "귀찮음은 발전의 원동력이다.",
        author : "직",
    },
    {
        quote :"무지를 인지 못하는것 또한 무지이다",
        author : "직",
    },
    {
        quote :"실패도 의미는 있다.",
        author : "직",
    },
    {
        quote :"코딩을 할 수 있게 된다면 앉은 자리에서 무언가를 만들어 낼 수 있고, 아무도 당신을 막을 수 없을 것입니다.",
        author : "마크 저커버그",
    },
    {
        quote :"코딩은 분야에 상관없이 새로운 문제를 해결할 수 있는 힘을 길러 줄 것입니다",
        author : "빌 게이츠",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]
console.log(todaysQuote)
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;