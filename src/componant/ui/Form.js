import React, {useState} from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  SvgIcon,
  Typography,
  TextField,
  FormControlLabel,
  //   Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  //   Switch,
  Select,
  MenuItem,
  Button,
//   FormHelperText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';

// eslint-disable-next-line
import Icon from '@mui/material/Icon';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import ApartmentOutlined from '@mui/icons-material/ApartmentOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: '100%',
    margin: theme.spacing(1, 0),
  },

  inputFieldHalf: {
    width: '50%',
    margin: theme.spacing(1, 0),
  },
}));

const Form = () => {
  const HomeIcon = (props) => {
    return (
      <SvgIcon {...props}>
        <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
      </SvgIcon>
    );
  };

  const classes = useStyles();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container sx={{ py: 8 }} maxWidth='lg'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  align='center'>
                  Contact Us
                </Typography>
                <Typography sx={{ pb: 2 }}>
                  <HomeIcon color='primary' /> Mumbai, India
                </Typography>
                <Typography sx={{ pb: 2 }}>
                  <ApartmentOutlined color='primary' /> Mumbai, India
                </Typography>
                <Typography sx={{ pb: 2 }}>
                  <PhoneAndroidOutlinedIcon color='primary' /> 9110937613
                </Typography>
                <Typography sx={{ pb: 2 }}>
                  <EmailOutlined color='primary' /> gautam.keev@gmail.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Card
              sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <CardContent>
                <Typography variant='h5' sx={{ pb: 3 }} align='center'>
                  Contact Us
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12} lg={12} xl={12}>
                      {/* 1) TextField */}
                      <TextField
                        placeholder='Enter Your Name'
                        label='Name'
                        variant='outlined'
                        fullWidth
                        className={classes.inputField}
                        name='name'
                        {...register('name', { required: true })}
                      />
                      {errors.name && (
                        <Typography variant='caption' color="red" align='center'>
                          This field is required
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      {/* 2) TextField */}
                      <TextField
                        placeholder='Enter Your E-mail Address'
                        label='E-mail'
                        variant='outlined'
                        fullWidth
                        className={classes.inputField}
                        name='email'
                        {...register('email', { required: true })}
                      />
                      {errors.email && (
                        <Typography variant='caption' color="red" align='center'>
                          This field is required
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      {/* 3) TextField */}
                      <TextField
                        placeholder='Enter Your Phone Number'
                        label='Phone'
                        variant='outlined'
                        fullWidth
                        className={classes.inputField}
                        name='phone'
                        sx={{mt: 0}}
                        {...register('phone', { required: true })}
                      />
                      {errors.phone && (
                        <Typography variant='caption' color="red" align='center'>
                          This field is required
                        </Typography>
                      )}
                    </Grid>

                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      {/* Radio Buttons */}
                      <FormControl className={classes.inputField}>
                        <FormLabel>Choose Your Gender</FormLabel>
                        <RadioGroup row name='gender'>
                          <FormControlLabel
                            value='female'
                            control={<Radio />}
                            label='Female'
                          />
                          <FormControlLabel
                            value='male'
                            control={<Radio />}
                            label='Male'
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                      {/* Select */}
                      <FormControl fullWidth className={classes.inputField}>
                        <InputLabel id='demo-simple-select-label'>
                          Select Issue
                        </InputLabel>

                        <Select>
                          <MenuItem value=''>Choose your course</MenuItem>
                          <MenuItem value='Trading'>Trading</MenuItem>
                          <MenuItem value='Stratagy'>Stratagy</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}></Grid>
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} xl={12} align='center'>
                    <Button
                      variant='contained'
                      sx={{ px: 5, mt: 2 }}
                      color='primary'
                      type='submit'>
                      Submit
                    </Button>
                    <Button
                      variant='contained'
                      sx={{ px: 5, ml: 2, mt: 2 }}
                      color='primary'
                      type='submit'
                      onClick={handleClickOpen}>
                      Model
                    </Button>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'>
          <DialogTitle id='alert-dialog-title'>
            {"Use Google's location service?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              Let Google help apps determine location. This means sending
              anonymous location data to Google, even when no apps are running.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Form;
