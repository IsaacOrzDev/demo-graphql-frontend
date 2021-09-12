import React from 'react';
import styles from './styles.module.scss';
import MusicCard from '../MusicCard';
import MusicForm from '../MusicForm';
import MusicList from '../MusicList';
import { makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import {
  useQuery as useApolloQuery,
  gql,
  useMutation as useApolloMutation,
} from '@apollo/client';
import { useQuery as useReactQuery } from 'react-query';
import { request, gql as _gql } from 'graphql-request';

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

  const playlistQuery = useApolloQuery(gql`
    query GetPlaylist {
      getPlaylist {
        id
        title
        signer
        duration
        isPlaying
      }
    }
  `);

  const playingQuery = useReactQuery('playing', () =>
    request(
      endPoint,
      _gql/* GraphQL */ `
        query getPlaying {
          getPlaying {
            title
            signer
            duration
          }
        }
      `
    )
  );

  const [addMusic, addMusicMutation] = useApolloMutation(gql`
    mutation AddMusic($music: AddMusicInput) {
      addMusic(music: $music) {
        id
        title
        signer
        duration
        isPlaying
      }
    }
  `);

  const [setPlaying, setPlayingMutation] = useApolloMutation(gql`
    mutation SetPlayingMutation($id: Int!) {
      setPlaying(id: $id) {
        id
        title
        signer
        duration
      }
    }
  `);

  const clickAddMusic = async (data: {
    title: string;
    signer: string;
    duration: string;
  }) => {
    await addMusic({ variables: { music: { ...data } } });
    playlistQuery.refetch();
  };

  const clickPlaying = async (id: number) => {
    await setPlaying({ variables: { id } });
    playlistQuery.refetch();
    playingQuery.refetch();
  };

  const playlistData = playlistQuery.data?.getPlaylist || [];
  const playingData = playingQuery.data?.getPlaying;

  console.log('playlistQuery.data', playlistQuery.data);
  console.log('playingData', playingQuery.data);

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
