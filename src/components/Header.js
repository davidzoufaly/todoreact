import React from "react";

class Header extends React.Component {
  state = {
    headerQuotes: [
      {
        text: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
      },
      {
        text: "Just do it",
        author: "Anonym"
      },
      {
        text: "The secret of getting ahead is getting started",
        author: "Mark Twein"
      },
      {
        text: "Art is the elimination of the unnecessary",
        author: "Pablo Picasso"
      },
      {
        text:
          "The only way you are going to have success is to have lots of failures first",
        author: "Sergey Brin"
      }
    ]
  };
  
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const randomQuote = state => Math.floor(Math.random() * state.length);
    const quote = randomQuote(this.state.headerQuotes);

    return (
      <div className="header section">
        <h1>{this.state.headerQuotes[quote].text}</h1>
        <p>- {this.state.headerQuotes[quote].author} -</p>
      </div>
    );
  }
}

export default Header;
