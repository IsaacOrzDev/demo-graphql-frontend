import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import MusicOff from '@material-ui/icons/MusicOff';

interface Props {}

const EmptyItem = (props: Props) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <MusicOff />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={'The playlist is empty'} />
    </ListItem>
  );
};

export default EmptyItem;
