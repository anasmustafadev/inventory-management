'use client';
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@mui/material';
import {
  addProduct,
  getProducts,
  removeProduct,
  updateProduct,
} from '@utils/dbHelpers';
import { useSession } from 'next-auth/react';
import { Quicksand } from 'next/font/google';
import { useCallback, useEffect, useState } from 'react';

const quickSand = Quicksand({ subsets: ['latin'] });

const Inventory = () => {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [inventory, setInventory] = useState([]);

  const updateInventory = useCallback(async () => {
    const i = await getProducts(session?.user.email);
    setInventory(i);
  }, [session?.user.email]);

  useEffect(() => {
    updateInventory();
  }, [updateInventory]);

  console.log('hello');

  return (
    <Box>
      <Container>
        <Typography
          py={3}
          variant='h2'
          className={quickSand.className}
          fontWeight={'bold'}
          textAlign={'center'}
        >
          Welcome to TrackIt
        </Typography>
        <Box>
          <Typography
            py={3}
            variant='h3'
            className={quickSand.className}
            fontWeight={'bold'}
            textAlign={'center'}
          >
            Add Products
          </Typography>
          <Box
            py={3}
            display={'flex'}
            gap={3}
            flexDirection={['column', 'row', 'row', 'row']}
            justifyContent={'flex-start'}
            alignItems={'center'}
          >
            <TextField
              variant='outlined'
              label='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <TextField
              variant='outlined'
              label='Quantity'
              type='number'
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            ></TextField>
            <Button
              size='large'
              variant='contained'
              sx={{ ml: { sm: 'auto' }, fontWeight: '700' }}
              className={quickSand.className}
              onClick={() => {
                addProduct(session?.user.email, {
                  name: name,
                  quantity: quantity,
                });
                setName('');
                setQuantity('');
                updateInventory();
              }}
            >
              Add Product
            </Button>
          </Box>

          <Box py={6}>
            <Typography
              py={3}
              variant='h3'
              className={quickSand.className}
              fontWeight={'bold'}
              textAlign={'center'}
            >
              Inventory
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Add</TableCell>
                    <TableCell>Remove</TableCell>
                    <TableCell>Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {inventory.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        <Button
                          color='success'
                          variant='contained'
                          size='small'
                          onClick={() => {
                            updateProduct(session?.user.email, item.id, {
                              quantity: (
                                parseInt(item.quantity) + 1
                              ).toString(),
                            });
                            updateInventory();
                          }}
                        >
                          +
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          color='error'
                          variant='contained'
                          size='small'
                          onClick={() => {
                            updateProduct(session?.user.email, item.id, {
                              quantity: (
                                parseInt(item.quantity) - 1
                              ).toString(),
                            });
                            updateInventory();
                          }}
                        >
                          -
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          color='warning'
                          variant='contained'
                          size='small'
                          onClick={() => {
                            removeProduct(session?.user.email, item.id);
                            updateInventory();
                          }}
                        >
                          Delete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Inventory;
