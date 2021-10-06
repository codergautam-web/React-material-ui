import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Drawer,
} from '@material-ui/core';

const DrawerComponent = (props) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const sideList = () => (
    <div
      role='presentation'
      onClick={props.toggleDrawerHandler}
      onKeyDown={props.toggleDrawerHandler}
      sx={{ width: '280px' }}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
      {sideList()}
    </Drawer>
  );
};

export default DrawerComponent;
