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
import { useTranslation } from "react-i18next";

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
  const { weatherDetails, setWeatherDetails, language, setLanguage } = useStore((state) => ({
    weatherDetails: state.weatherDetails,
    setWeatherDetails: state.setWeatherDetails,
    language: state.language,
    setLanguage: state.setLanguage,
  }));
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng); // Update the i18n instance
  };

  const handleSearchIconClick = () => {
    getData(searchQuery);
  };

  const getData = async (query) => {
    try {
      const response = await current(query);
      console.log('Response for query', query, ':', response?.data?.location);
      setWeatherDetails(response?.data); // Update Zustand state with fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
            {t("title")}
          </Typography>
          <div className="relative inline-block w-64 text-black">
            <select 
              onChange={(e) => changeLanguage(e.target.value)} 
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="ar">Arabic</option>
              <option value="it">Italian</option>
              <option value="ja">Japanese</option>
              <option value="de">German</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"/></svg>
            </div>
          </div>
          <Search>
            <SearchIconWrapper onClick={handleSearchIconClick}>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("searchCity")}
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
