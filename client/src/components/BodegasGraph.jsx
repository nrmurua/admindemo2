import React from 'react';
import { useGetBodegasByEmpresaQuery } from 'state/api';


const Bar = ({ name, percentage }) => {
  const barColor = percentage >= 80 ? 'bg-red-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-green-500';
  
  return (
    <div className="flex flex-col justify-center items-center w-full mb-4">
      <div className="w-11/12 text-left mb-2">{name}</div>
      <div className="w-11/12 h-4 bg-gray-200 rounded-full">
        <div className={`h-full rounded-full ${barColor}`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

function BodegasGraph({ empresaId }) {
  const { data, isLoading, isError } = useGetBodegasByEmpresaQuery(empresaId);
  const bodegas = data?.bodegas;

  if (isLoading) {
    return <div>Loading bodegas...</div>;
  }

  if (isError) {
    return <div>Error loading bodegas</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      {bodegas.map((bodega) => (
        <div key={bodega._id}>
          <h2 className="text-lg font-medium">{bodega.nombre}</h2>
          <div className="h-4 rounded-full bg-gray-300">
            <div className="h-full rounded-full bg-green-500" style={{ width: `${(bodega.ocupado / bodega.capacidad) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BodegasGraph;