import user from 'Data/user.json';
import dataStats from 'Data/data.json';
import friends from 'Data/friends.json';
import { ProfileCard } from 'components/Profile/ProfileCard';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/FriendList';


export const App = () => {
  return (
   <>
        <ProfileCard
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={dataStats} />
      <FriendList friends={friends} />;
    </>
  );
};
