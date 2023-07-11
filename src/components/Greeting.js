import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchMessage } from '../store/feature/message/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.message.data)

  useEffect(() => {
    dispatch(fetchMessage())
  }, []);

  return (
    <div>
      <center>
        <h1>{message}</h1>
      </center>
    </div>
  );
};

export default Greeting;
