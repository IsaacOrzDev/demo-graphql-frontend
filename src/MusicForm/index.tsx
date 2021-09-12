import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styles from './styles.module.scss';
import { Button, Grid, InputAdornment } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import TimelapseIcon from '@material-ui/icons/Timelapse';

interface Props {
  onSubmit: (data: { title: string; signer: string; duration: string }) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

export default function MusicForm(props: Props) {
  const classes = useStyles();
  const [title, setTitle] = useState<string>('');
  const [signer, setSigner] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value as any);
  };

  const handleSignerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSigner(event.target.value as any);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value as any);
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    if (props.onSubmit) {
      props.onSubmit({
        title,
        signer,
        duration,
      });
      setTitle('');
      setSigner('');
      setDuration('');
    }
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitForm}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className={styles.form}>
            <TextField
              id="outlined-multiline-flexible"
              label="Title"
              placeholder="Title"
              multiline
              maxRows={4}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MusicNoteIcon />
                  </InputAdornment>
                ),
              }}
              value={title}
              variant="outlined"
              onChange={handleTitleChange}
            />
            <TextField
              id="outlined-textarea"
              label="Singer"
              placeholder="Singer"
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleSignerChange}
              value={signer}
            />
            <TextField
              id="outlined-multiline-static"
              label="Duration"
              placeholder="Duration"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TimelapseIcon />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleDurationChange}
              value={duration}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" color="primary" type="submit">
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
