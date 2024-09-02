import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState, useEffect } from "react";

export const BcraData = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await fetch('https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables')
      
      const json = await response.json()
      const result = json.results

      console.log(json)


      setData(result)
    } catch (e) {
      throw new Error('Error featching data')
    }
  }
  fetchData()
  
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table 
        sx={{ 
            minWidth: 650, 
            '@media (max-width: 600px)': {
              minWidth: '100%', // Ajustar la tabla para pantallas pequeñas
              overflowX: 'auto', // Habilitar desplazamiento horizontal en pantallas pequeñas
            },
            padding: { xs: 1, sm: 2, md: 3, lg: 4 }, // Ajustar padding según el tamaño de la pantalla
          }} 
          aria-label="bcra data">
        
        <TableHead>
          <TableRow>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            data.map((datos, index) => (
              <TableRow
                key={index}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  '@media (max-width: 600px)': {
                    display: 'block', // Cambiar el diseño de la fila para pantallas pequeñas
                    marginBottom: '10px', // Añadir margen entre filas en pantallas pequeñas
                  },
                }}
              >
                <TableCell component="th" scope="row" sx={{ '@media (max-width: 600px)': { display: 'block', textAlign: 'right', paddingRight: 1 } }}>
                  { datos.descripcion }
                </TableCell>
                <TableCell align="center" component="th" scope="row" sx={{ '@media (max-width: 600px)': { display: 'block', textAlign: 'right', paddingRight: 1 } }}>
                  { datos.fecha }
                </TableCell>
                <TableCell align="center" component="th" scope="row" sx={{ '@media (max-width: 600px)': { display: 'block', textAlign: 'right', paddingRight: 1 } }}>
                  { datos.valor }
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>

      </Table>
    </TableContainer>

  );
}