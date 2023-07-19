import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import Header from 'components/Header';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';
import { useGetBodegasByEmpresaQuery, useGetUserQuery } from 'state/api';
import { useSelector } from 'react-redux';
import BodegasGraph from 'components/BodegasGraph';




const Bodegas = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);
  const { data: user, isLoading, isError } = useGetUserQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading user data</div>;
  }

  const empresaId = user?.empresa;

  return (
    <div>
      <Box m="1.5rem 2.5rem">
        <BodegasGraph empresaId={empresaId} />      
      </Box>
    </div>
  );

};

export default Bodegas;
