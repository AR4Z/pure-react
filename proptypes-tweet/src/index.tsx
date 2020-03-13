import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

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

Author.propTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};


const Time = ({timestamp}: {timestamp: string}) => (
<span className="time">{timestamp}</span>
);

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);

function Count({ count }: {count: number}) {
    if(count > 0) {
        return(
            <span className="retweet-count">
                { count }
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }: { count: number }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet"/>
        <Count count={count}/>
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number
}

const LikeButton = ({ count }: { count: number}) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 && 
            <span className="like-count">
                {count}
            </span>}
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
}


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
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}

const testTweet: Tweet = {
    message: "something about lambda world <3",
    gravatar: "xyz",
    author: {
        handle: "lambdaperson",
        name: "lambda Person"
    },
    likes: 2,
    retweets: 3,
    timestamp: "2016-07-30 21:24:37"
};


ReactDOM.render(
    <Tweet tweet={testTweet}/>,
    document.querySelector('#root')
);
