import './Profile.css';

function Profile({name, tag, location, image, stats}) {
   return (
    <div className='card'>     
      <div className='photoName'>
               <img
                   className='photo'
          src={image}
          alt="User avatar"
        />
              <p className='name'>{name}</p>
              <p className='text'>@{tag}</p>
              <p className='text'>{location}</p>
      </div>
      <ul className='list'>
        <li className='item'>
            <span className='statsText'>Followers</span>
            <span className='statsData'>{stats.followers}</span>
        </li>
        <li className='item'>
            <span className='statsText'>Views</span>
            <span className='statsData'>{stats.views}</span>
        </li>
        <li className='item'>
            <span className='statsText'>Likes</span>
            <span className='statsData'>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile