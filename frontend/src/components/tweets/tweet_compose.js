// src/components/tweets/tweet_compose.js

import React,{useState} from 'react';
import TweetBox from './tweet_box';
import {composeTweet} from '../../store/actions/tweet_actions'
const TweetCompose = () => {
    const [text, setText] = useState("")
    const [newTweet, setNewTweet] = useState("")

  // componentWillReceiveProps(nextProps) {
  //     this.setState({newTweet: nextProps.newTweet.text});
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    let tweet = text
    setNewTweet(tweet)
    composeTweet(tweet);
    setText('')
  }

  const updateText = (e) => {
    setText(e.target.value)
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="textarea"
                        value={text}
                        onChange={updateText}
                        placeholder="Write your tweet..."
                    />
                    <input type="submit" value="Submit" />
                </div>
            </form>
            <br />
            <TweetBox text={newTweet} />
        </div>
    )
}

export default TweetCompose;
