import React from 'react';
import { List, Grid, Label, Input } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
      <div className="footer-background">
        <Grid container columns="3">
          <Grid.Column>
            NAVIGATION
            <hr />
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <hr />
            <List>
              <List.Item>Mens</List.Item>
              <List.Item>Womens</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            CONNECT
            <hr />
            <List>
              <List.Item>Sign up for the latest updates</List.Item>
              <List.Item>
                <Input placeholder="Enteremail address" />
                <Label color="black">Join</Label>
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
