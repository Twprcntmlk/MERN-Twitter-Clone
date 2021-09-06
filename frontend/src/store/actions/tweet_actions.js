// src/actions/tweet_actions.js
import axios from 'axios';
// import { getTweets, getUserTweets, writeTweet } from '../util/tweet_api_util';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const RECEIVE_USER_TWEETS = "RECEIVE_USER_TWEETS";
export const RECEIVE_NEW_TWEET = "RECEIVE_NEW_TWEET";

export const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const receiveUserTweets = tweets => ({
  type: RECEIVE_USER_TWEETS,
  tweets
});

export const receiveNewTweet = tweet => ({
  type: RECEIVE_NEW_TWEET,
  tweet
})

export const fetchTweets = () => async (dispatch) => {
  try{
    const res = await axios.get('/api/tweets')
    dispatch(receiveTweets(res))
  } catch (errors) {
    console.log(errors)
  }
};

export const fetchUserTweets = (id) => async (dispatch) => {
  try{
    const res = await axios.get(`/api/tweets/user/${id}`)
    dispatch(receiveTweets(res))
  } catch (errors) {
    console.log(errors)
  }
};

export const composeTweet = (data) => async (dispatch) => {
  try{
    const res = await axios.post('/api/tweets/', data)
    dispatch(receiveTweets(res))
  } catch (errors) {
    console.log(errors)
  }
};
