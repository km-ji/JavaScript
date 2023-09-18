const quotes = [
    {
        quote : "The way to get started is to quit taling and begin doing.",
        author : "Walt Disney",
    },
    {
        quote : "Life is what happends when you're busy making other plans.",
        author : "John Lennon",
    },
    {
        quote : "Third comment",
        author : "third man",
    },
    {
        quote : "Fourth comment",
        author : "fourth man",
    },
    {
        quote : "Fifth comment",
        author : "fifth man",
    },
    {
        quote : "Sixth comment",
        author : "sixth man",
    },
    {
        quote : "Seventh comment",
        author : "seventh man",
    },
    {
        quote : "Eigth comment",
        author : "eigth man",
    },
    {
        quote : "Nineth comment",
        author : "nineth man",
    },
    {
        quote : "Tenth comment",
        author : "tenth man",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;