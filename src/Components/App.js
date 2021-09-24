import React from "react";
import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendList/FriendList";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import user from "../data/user.json";
import statistic from "../data/statistical-data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import colors from "../data/colors.json";

const App = () => {
    return (
        <>
            <Profile
                name={user.name}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={statistic} colors={colors}/>
            <FriendList friends={friends}/>
            <TransactionHistory items={transactions}/>
        </>

    )
};

export default App;