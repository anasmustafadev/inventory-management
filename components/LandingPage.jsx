import {
  faCamera,
  faReceipt,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Button, Container, Typography } from '@mui/material';
import { Quicksand } from 'next/font/google';

const quickSand = Quicksand({ subsets: ['latin'] });

const LandingPage = () => {
  return (
    <>
      <Box
        py={[4, 8, 16, 16]}
        bgcolor='primary.main'
        color='primary.contrastText'
      >
        <Container>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
          >
            <Typography
              className={quickSand.className}
              fontWeight='bold'
              textAlign='center'
              variant='h2'
            >
              Welcome to <span className='gradient-text'>TrackIt!</span>
            </Typography>
            <Typography textAlign='center' mt={2} mb={4} variant='h4'>
              Your Ultimate Inventory Management Solution!
            </Typography>
            <Button
              variant='contained'
              size='large'
              className={quickSand.className}
              sx={{
                bgcolor: 'secondary.contrastText',
                color: 'primary.dark',
                ':hover': { bgcolor: 'secondary.dark' },
                fontWeight: 'bold',
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
      <Box
        py={[4, 8, 12, 12]}
        bgcolor='primary.contrastText'
        color='primary.dark'
      >
        <Container>
          <Typography
            textAlign='center'
            variant='h3'
            className={quickSand.className}
            fontWeight='bold'
          >
            Our Features
          </Typography>
          <Box
            display='flex'
            mt={3}
            flexDirection={['column', 'column', 'row', 'row']}
            justifyContent='space-around'
            alignItems={'center'}
            gap={[4, 4, 2, 2]}
            color='primary.dark'
          >
            <Box
              bgcolor='secondary.dark'
              boxShadow={2}
              maxWidth={350}
              flexGrow={1}
              height={400}
              borderRadius={8}
              px={2}
              py={8}
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
              >
                <Box
                  width={60}
                  height={60}
                  borderRadius='50%'
                  bgcolor='primary.dark'
                  display='flex'
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FontAwesomeIcon
                    icon={faWarehouse}
                    fontSize={24}
                    color='#EEE'
                  />
                </Box>
                <Typography
                  variant='h5'
                  fontWeight='bold'
                  className={quickSand.className}
                >
                  Effortless Inventory Management
                </Typography>
              </Box>
              <Typography mt={1}>
                Easily store, track, and manage your inventory with our
                user-friendly interface, designed to keep you organized and in
                control
              </Typography>
            </Box>
            <Box
              bgcolor='secondary.dark'
              boxShadow={2}
              maxWidth={350}
              flexGrow={1}
              height={400}
              borderRadius={8}
              px={2}
              py={8}
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
              >
                <Box
                  width={60}
                  height={60}
                  borderRadius='50%'
                  bgcolor='primary.dark'
                  display='flex'
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FontAwesomeIcon
                    icon={faReceipt}
                    fontSize={24}
                    color='#EEE'
                  />
                </Box>
                <Typography
                  variant='h5'
                  fontWeight='bold'
                  className={quickSand.className}
                >
                  AI-Powered Recipe Recommendations
                </Typography>
              </Box>
              <Typography mt={1}>
                Our advanced AI suggests delicious recipes based on the
                ingredients you have, helping you reduce waste and explore new
                culinary adventures
              </Typography>
            </Box>
            <Box
              bgcolor='secondary.dark'
              boxShadow={2}
              maxWidth={350}
              flexGrow={1}
              height={400}
              borderRadius={8}
              px={2}
              py={8}
            >
              <Box
                display='flex'
                flexDirection='column'
                alignItems='flex-start'
              >
                <Box
                  width={60}
                  height={60}
                  borderRadius='50%'
                  bgcolor='primary.dark'
                  display='flex'
                  alignItems={'center'}
                  justifyContent={'center'}
                >
                  <FontAwesomeIcon icon={faCamera} fontSize={24} color='#EEE' />
                </Box>
                <Typography
                  variant='h5'
                  fontWeight='bold'
                  className={quickSand.className}
                >
                  Camera Powered Item Additions
                </Typography>
              </Box>
              <Typography mt={1}>
                Through the power of our AI Classification System Quickly add
                items to your inventory using your camera, making inventory
                management faster and more convenient
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box bgcolor='primary.dark' py={[4, 8, 12, 12]}>
        <Container>
          <Box
            py={4}
            px={8}
            bgcolor='primary.contrastText'
            boxShadow={4}
            maxWidth={900}
            sx={{ mx: 'auto' }}
            borderRadius={8}
          >
            <Typography
              className={quickSand.className}
              textAlign={'center'}
              fontWeight={'bold'}
            >
              Ready to revolutionize the way you manage your inventory? Join the
              TrackIt community today! Experience seamless inventory tracking
              and discover new culinary possibilities with our AI-powered recipe
              recommendations. Say goodbye to clutter and waste, and hello to
              efficiency and creativity. Don’t wait – take control of your
              inventory and start your journey with TrackIt now!
            </Typography>
            <Button
              size='large'
              variant='contained'
              className={quickSand.className}
              sx={{ display: 'block', mx: 'auto', my: 2, fontWeight: '700' }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
