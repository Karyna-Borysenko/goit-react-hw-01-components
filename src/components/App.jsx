import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/FriendList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" statistics={statistics} />

      <FriendsList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
};
