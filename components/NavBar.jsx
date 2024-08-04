import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Container, Typography } from '@mui/material';
import { Quicksand } from 'next/font/google';

const quickSand = Quicksand({ subsets: ['latin'] });

const NavBar = () => {
  return (
    <Box pt={4} pb={4} bgcolor='primary.contrastText'>
      <Container>
        <Box display={'flex'} alignItems={'center'} color='primary.dark'>
          <FontAwesomeIcon
            icon={faBoxesStacked}
            fontSize={36}
          ></FontAwesomeIcon>
          <Typography
            ml={2}
            variant='h4'
            fontWeight={'700'}
            className={quickSand.className}
            visibility={{ xs: 'hidden', sm: 'visible' }}
          >
            TrackIt
          </Typography>
          <Button
            variant='contained'
            sx={{ ml: 'auto', fontWeight: '700' }}
            className={quickSand.className}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NavBar;
