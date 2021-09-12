import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import MusicModel from '../../../types/MusicModel';

interface Props {
  data: MusicModel;
  onSelectPlaying: (id: number) => void;
}

const MusicItem = (props: Props) => {
  const clickPlaying = () => {
    if (!props.data?.isPlaying && props.onSelectPlaying) {
      props.onSelectPlaying(props.data?.id);
    }
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <MusicNoteIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={props.data?.title}
        secondary={`${props.data?.signer} - (${props.data?.duration})`}
      />

      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={clickPlaying}>
          {/* <DeleteIcon /> */}
          {props.data?.isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MusicItem;
