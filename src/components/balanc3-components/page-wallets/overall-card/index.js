import React from 'react';
import { Header, Card, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { getTotalBalance } from '../logic';

const GroupSummaryItem = styled('div')`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const GroupSummary = ({ group }) => {
  return (
    <GroupSummaryItem>
      <div> {group.wallet.name} </div>
      <div> {`$${getTotalBalance(group.addresses)}`} </div>
    </GroupSummaryItem>
  );
};

const OverallCard = ({ groups, addresses }) => (
  <Card fluid>
    <Card.Content>
      <div style={{ textAlign: 'center' }}>
        <Header size="large" style={{ margin: 0 }}>
          {`$${getTotalBalance(addresses)}`}
        </Header>
        <p>Overall Balance</p>
      </div>
      <Divider />
      {groups &&
        groups.map(group => (
          <GroupSummary key={group.wallet._id || 'catch all'} group={group} />
        ))}
      <div />
    </Card.Content>
  </Card>
);

export default OverallCard;
