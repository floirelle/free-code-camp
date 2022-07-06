import React from 'react';
import './App.css'

const QuoteComponent = (props) => {
    const [quotes, setQuotes] = React.useState([]);
    const [colors, setColors] = React.useState([]);
    const [color, setColor] = React.useState(0);
    const [quote, setQuote] = React.useState(0);

    const getRandomQuoteIdx = () => {
        setQuote(
            quotes.length === 0 ? 0 : Math.floor(Math.random() * (quotes.length - 1))
        );
    };

    const getRandomColorIdx = () => {
        setColor(
            colors.length === 0 ? 0 : Math.floor(Math.random() * (colors.length - 1))
        );
    };
    const getAllQuotes = async () => {
        const endpoint =
            "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
        const response = await fetch(endpoint);
        const result = await response.json();
        return result.quotes;
    };

    const getAllColors = async () => {
        const endpoint =
            "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
        const response = await fetch(endpoint);
        return await response.json();
    };

    function randomize() {
        getRandomColorIdx();
        getRandomQuoteIdx();
    }
    React.useEffect(() => {
        getAllQuotes().then((x) => {
            setQuotes(x);
            getRandomQuoteIdx();
            console.log(quote);
        });
        getAllColors().then((x) => {
            const allColors = [];
            for (const [key, value] of Object.entries(x)) {
                allColors.push(value.color);
            }
            setColors(allColors);
            getRandomColorIdx();
        });
    }, []);

    const bgColor = {
        backgroundColor: colors[color]
    };
    const textColor = {
        color: colors[color]
    };
    return (
        <div className="box-wrapper" style={bgColor}>
            <div id="quote-box">
                <h1 id="text" style={textColor}>
                    {quotes[quote] && quotes[quote].quote}
                </h1>
                <p id="author" style={textColor}>
                    - {quotes[quote] && quotes[quote].author}
                </p>
                <div className="button-wrapper">
                    <div className="intent-wrapper">
                        <a
                            id="tweet-quote"
                            href={
                                `https://twitter.com/intent/tweet?text=` +
                                encodeURIComponent(`${quotes[quote] && quotes[quote].quote}`)
                            }
                            target="_top"
                        >
                            {" "}
                            <i className="icon fa-brands fa-twitter-square" style={textColor} />
                        </a>
                        <i className="icon fa-brands fa-tumblr-square" style={textColor} />
                    </div>
                    <button id="new-quote" onClick={randomize}>
                        Next Quote
                    </button>
                </div>
            </div>
        </div>
    );
};
export default QuoteComponent;
