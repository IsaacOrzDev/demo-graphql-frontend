import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import MusicItem from './components/MusicItem';
import EmptyItem from './components/EmptyItem';
import { Divider } from '@material-ui/core';
import MusicModel from '../types/MusicModel';

interface Props {
  data: Array<MusicModel>;
  onSelectPlaying: (id: number) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default function MusicList(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className={classes.demo}>
            <List>
              {props.data.length > 0 &&
                props.data.map((x) => (
                  <div key={x.id}>
                    <MusicItem
                      data={x}
                      onSelectPlaying={props.onSelectPlaying}
                    />
                    <Divider />
                  </div>
                ))}
              {props.data.length === 0 && <EmptyItem />}
              {/* <MusicItem />
              <Divider />
              <MusicItem />
              <Divider />
              <MusicItem />
              <Divider />
              <MusicItem />
              <Divider />
              <MusicItem />
              <Divider /> */}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
