import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import current from '../../services/Services';
import { useStore } from '../../zustand/useStore';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const { weatherDetails, setWeatherDetails } = useStore((state) => ({
    weatherDetails: state.weatherDetails,
    setWeatherDetails: state.setWeatherDetails,
  }));

  const getData = async (query) => {
    try {
      const response = await current(query);
      console.log('Response for query', query, ':', response?.data?.location);
      setWeatherDetails(response?.data); // Update Zustand state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchIconClick = () => {
    getData(searchQuery);
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      getData(searchQuery);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ gap: 3 }}>
        <Toolbar sx={{ gap: 3 }}>
          <LightModeIcon />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Weather Wise
          </Typography>
          <Search>
            <SearchIconWrapper onClick={handleSearchIconClick}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={handleChange}
              onKeyDown={handleSearch}
            />
          </Search>
        </Toolbar>
      </AppBar>
     
    </Box>
  );
}
