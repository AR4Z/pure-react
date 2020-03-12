import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface Tweet {
    message: string;
    gravatar: string;
    author: {
        handle: string;
        name: string;
    };
    likes: number;
    retweets: number;
    timestamp: string;
}

function Avatar({ hash }: { hash: string }) {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return(
        <img
            src={ url }
            className="avatar"
            alt="avatar"/>
    );
}

function Message({ text } : { text: string }) {
    return(
        <div className="message">
            { text }
        </div>
    );
}

function Author({ author } : { author: { handle: string, name: string }} ) {
    return(
        <span className="author">
            <span className="name">
                {author.name}
            </span>
            <span className="handle">
                @{author.handle}
            </span>
        </span>
    );
}

const Time = ({timestamp}: {timestamp: string}) => (
<span className="time">{timestamp}</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

const RetweetButton = () => (
    <i className="fa fa-retweet retweet-button"/>
);

const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);

const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

function Tweet( { tweet }: { tweet: Tweet }) {
    return(
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className="content">
                <Author author={tweet.author}/><Time timestamp={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton/>
                    <RetweetButton/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

const testTweet: Tweet = {
    message: "somthing about lambda world <3",
    gravatar: "xyz",
    author: {
        handle: "lambdaperson",
        name: "lambda Person"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};


ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
);
