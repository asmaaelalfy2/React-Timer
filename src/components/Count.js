import { useEffect, useState } from 'react';

const Count = (props) => {
  const [counter, setCounter] = useState();

  useEffect(() => {
    setCounter(props.Countstate * 60);
  }, [props.Countstate]);

  useEffect(() => {
    if (counter === 0) props.setCount(0);
    // eslint-disable-next-line 
  }, [counter, props.setCount]);

  useEffect(() => {
    const IncDec = (prev) => {
      console.log(prev);
      return prev- 1;
    };
    const countDecrease = setInterval(() => {
      setCounter(IncDec);
    }, 1000);

    return () => {
      clearInterval(countDecrease);
    };
  }, []);

  return <h3>{`${counter} seconds`}</h3>;
};

export default Count;
