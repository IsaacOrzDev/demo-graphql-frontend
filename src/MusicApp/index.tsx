import React from 'react';
import styles from './styles.module.scss';
import MusicCard from '../MusicCard';
import MusicForm from '../MusicForm';
import MusicList from '../MusicList';
import { makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import { useQuery as useReactQuery } from 'react-query';
import { API, graphqlOperation } from 'aws-amplify';
import { listMusic } from '../graphql/queries';
import { createMusic } from '../graphql/mutations';
import { onCreateMusic } from '../graphql/subscriptions';
import { CreateMusicInput } from '../APIModels';

const endPoint = 'http://localhost:4000/graphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  })
);

function MusicApp() {
  const classes = useStyles();

  const playlistQuery = useReactQuery('playlist', () =>
    API.graphql(graphqlOperation(listMusic))
  );

  const createLister: any = API.graphql(graphqlOperation(onCreateMusic));
  createLister.subscribe({
    next: (data: any) => {
      const newMusic = data?.value?.data?.onCreateMusic;
      playlistQuery.refetch();
    },
  });

  const clickAddMusic = async (data: {
    title: string;
    signer: string;
    duration: string;
  }) => {
    const input: CreateMusicInput = {
      ...data,
    };
    await API.graphql(graphqlOperation(createMusic, { input }));
  };

  const clickPlaying = async (id: number) => {};

  const playlistData = playlistQuery.data?.data?.listMusic?.items || [];
  const playingData = null;

  console.log('playlistQuery.data', playlistQuery.data);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Typography variant="h6" className={classes.title}>
          Music PLaylist
        </Typography>
        <MusicList data={playlistData} onSelectPlaying={clickPlaying} />
        {playingData && (
          <>
            <Typography variant="h6" className={classes.title}>
              Playing
            </Typography>
            <MusicCard data={playingData} />
          </>
        )}
        <Typography variant="h6" className={classes.title}>
          Add to playlist
        </Typography>
        <MusicForm onSubmit={clickAddMusic} />
      </div>
    </div>
  );
}

export default MusicApp;
