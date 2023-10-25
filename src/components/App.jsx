import { Profile } from "./Profile.js/Profile";
import user from '../data/user.json'
import { Statistics } from "./Statistics.js/Statistics";
import data from '../data/data.json'
import { FriendList } from "./FriendList.js/FriendList";
import friends from '../data/friends.json'
import { TransactionHistory } from "./TransactionHistory.js/TransactionHistory";
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      
      <Statistics
        title="hi"
        stats={data} />
      
      <FriendList
        friends={friends} />
      
      <TransactionHistory items={transactions} />
      

      React homework template
    </div>
  );
};
