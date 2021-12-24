import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search">We could not find this.</Icon>
        <Segment.Inline>
          <Button as={Link} to="/activities" primary>
            Return to activities page
          </Button>
        </Segment.Inline>
      </Header>
    </Segment>
  );
}
