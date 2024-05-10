import css from './Profile.module.css';

function Profile({name, tag, location, image, stats}) {
   return (
    <div className={css.card}>     
      <div className={css.photoName}>
               <img
                   className={css.photo}
          src={image}
          alt="User avatar"
        />
              <p className={css.name}>{name}</p>
              <p className={css.text}>@{tag}</p>
              <p className={css.text}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
           <span className={css.statsText}>Followers</span>
            <span className={css.statsData}>{stats.followers}</span>
        </li>
        <li className={css.item}>
            <span className={css.statsText}>Views</span>
            <span className={css.statsData}>{stats.views}</span>
        </li>
        <li className={css.item}>
            <span className={css.statsText}>Likes</span>
            <span className={css.statsData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile