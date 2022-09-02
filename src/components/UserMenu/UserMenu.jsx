import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();

  return (
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jI5nNj_3Wocu5DpUuozDKmzb9zYcrq-gbZr3GqWFsI1x5wJ28cYhKaj-d7l6fqRfFng&usqp=CAU"
        alt="userPhoto"
      />
      <p>email@dfgfg.dfgd</p>
      <button
        type="button"
        onClick={() => {
          dispatch(authOperations.logOut());
        }}
      >
        Logout
      </button>
    </div>
  );
}
