import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useFetch } from "./hooks/useFetch";

export const BcraData = () => {

  const { data, hasError, isLoading } = useFetch('https://api.bcra.gob.ar/estadisticas/v2.0/principalesvariables')
  
  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (hasError) {
    return <div>Error al cargar los datos</div>;
  }

  return (
    <TableContainer component={Paper} sx={{maxWidth: '1500px', margin: 'auto', marginBottom: '1rem'}}>
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
        
        <TableHead
          sx={{
            '@media (max-width: 600px)': {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px'
            }
          }}
        >
          <TableRow
            sx={{
              display: 'contents', // Se utiliza "contents" para que el grid afecte a las celdas, no a la fila
            }}
          >
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">Fecha</TableCell>
            <TableCell align="center">Valor</TableCell>
          </TableRow>
        </TableHead>  

        <TableBody>
          {
            data.results.map((datos, index) => (
              <TableRow
                key={index}
                sx={{ 
                  '&:last-child td, &:last-child th': { border: 0 },
                  '@media (max-width: 600px)': {
                    display: 'grid', // Cambiar el diseño a grid en pantallas pequeñas
                    gridTemplateColumns: 'repeat(3, 1fr)', // Tres columnas de igual tamaño
                    gap: '10px', // Espacio entre columnas
                    marginBottom: '10px',
                  },
                }}
              >
                <TableCell 
                  component="th" 
                  scope="row" 
                  sx={{ 
                    '@media (max-width: 600px)': {
                      textAlign: 'left', 
                    } 
                  }}>
                  { datos.descripcion }
                </TableCell>
                <TableCell
                  align="center" 
                  sx={{ 
                    '@media (max-width: 600px)': {
                      textAlign: 'center', 
                    } 
                  }}>
                  { datos.fecha }
                </TableCell>
                <TableCell
                  align="center" 
                  sx={{ 
                    '@media (max-width: 600px)': {
                      textAlign: 'center', 
                    } 
                  }}>
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