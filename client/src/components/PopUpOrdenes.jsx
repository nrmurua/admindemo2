import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";


const PopUpOrdenes = ({ open, onClose, onAdd }) => {
  const [nombre, setNombre] = useState("");
  const [rut, setRut] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [region, setRegion] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { nombre, rut, correo, direccion, ciudad, region, telefono };
    onAdd(data);
    setNombre("");
    setRut("");
    setCorreo("");
    setDireccion("");
    setCiudad("");
    setRegion("");
    setTelefono("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ "& .MuiPaper-root": { borderRadius: 3 } }}>
      <DialogTitle>Agregar Cliente</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            type="text"
            fullWidth
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <TextField
            margin="dense"
            label="RUT"
            type="text"
            fullWidth
            value={rut}
            onChange={(e) => setRut(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Correo"
            type="email"
            fullWidth
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Dirección"
            type="text"
            fullWidth
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Ciudad"
            type="text"
            fullWidth
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Región"
            type="text"
            fullWidth
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Teléfono"
            type="text"
            fullWidth
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={onClose} color="primary" variant="contained">
            Cancelar
          </Button>
          <Button type="submit" color="primary" variant="contained">
            Agregar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default PopUpOrdenes;
