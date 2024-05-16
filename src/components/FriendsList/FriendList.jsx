import css from './FriendList.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';

function FriendsList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map(item => (
        <li key={item.id}>
          <FriendListItem
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
