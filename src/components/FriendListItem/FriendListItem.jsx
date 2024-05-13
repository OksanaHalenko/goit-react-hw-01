import css from './FriendListItem.module.css';
import clsx from 'clsx';

function FriendListItem({avatar, name, isOnline}) {
    return (
        <div className={css.friend}>
            <img className={css.avatar} src={
                avatar
  } alt="Avatar" width="48" />
            <p className={css.name}>{name}</p>
            <p className={clsx(css.state, isOnline ? css.isOnline : css.isOffline)}>
                {isOnline ? "Online" : "Offline"}
            </p>
</div>
    )
    
}
export default FriendListItem