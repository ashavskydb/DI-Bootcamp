import { useSelector, useDispatch } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/ageSlice';
import logo from '../assets/react.svg';

const AgeCounter = () => {
  const age = useSelector((state) => state.age.value);
  const loading = useSelector((state) => state.age.loading);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Age: {age}</h1>
      <button onClick={() => dispatch(ageUpAsync())}>Age Up</button>
      <button onClick={() => dispatch(ageDownAsync())}>Age Down</button>
      {loading && <img src={logo} alt="Loading..." />}
    </div>
  );
};

export default AgeCounter;
