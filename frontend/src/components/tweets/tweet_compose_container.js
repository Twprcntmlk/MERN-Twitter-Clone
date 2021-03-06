// src/components/tweets/tweet_compose_container.js

import { connect } from 'react-redux';
import { composeTweet } from '../../store/actions/tweet_actions';
import TweetCompose from './tweet_compose';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
    newTweet: state.tweets.new
  };
};

const mapDispatchToProps = dispatch => {
  return {
    composeTweet: data => dispatch(composeTweet(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TweetCompose);
