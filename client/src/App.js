import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import Movimientos from "scenes/movimientos";
import Clientes from "scenes/clientes";
import Ordenes from "scenes/ordenes";
import Bodegas from "scenes/bodegas";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return <div className="app">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Navigate to="/dashboard" replace />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/bodegas" element={<Bodegas />} />
                        <Route path="/movimientos" element={<Movimientos />} />
                        <Route path="/clientes" element={<Clientes />} />
                        <Route path="/ordenes" element={<Ordenes />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </div>;
}

export default App;