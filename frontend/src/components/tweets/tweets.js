// src/components/tweets/tweets.js

import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TweetBox from './tweet_box';
import { fetchTweets } from '../../store/actions/tweet_actions';

const Tweet = () => {
  const dispatch = useDispatch();
  const [tweets, setTweets] = useState([])

  const alltweets = useSelector(state => state.tweets);
  const alltweetslist =  Object.values(alltweets)

  useEffect(() => {
    dispatch(fetchTweets());
    setTweets(alltweetslist[0])
  },[])

  // componentWillMount() {
  //   this.props.fetchTweets();
  // }

  // componentWillReceiveProps(newState){
  //   this.setState({ tweets: newState.tweets });
  // }


    if (tweets.length === 0) {
      return (<div>There are no Tweets</div>)
    } else {
      return (
        <div>
          <h2>All Tweets</h2>
          {tweets.map((tweet) => (
            <TweetBox key={tweet._id} text={tweet.text} />
          ))}
        </div>
      );
    }

}

export default withRouter(Tweet);
