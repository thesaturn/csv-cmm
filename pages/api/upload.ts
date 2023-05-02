import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';
import Papa from 'papaparse';
import { PrismaClient, Registro } from '@prisma/client';

const prisma = new PrismaClient();

const apiRoute = nextConnect({
  onError(error, req: NextApiRequest, res: NextApiResponse) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  },
  onNoMatch(req: NextApiRequest, res: NextApiResponse) {
    res.status(405).json({ message: 'Metodo no permitido.' });
  },
});

apiRoute.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // 
  if (!req.body) {
    return res.status(400).json({ message: 'No existe body en este request.' });
  }

  try {
    // quita boundary string
    const csvData = req.body.replace(/^(.+)\r\n\r\n/, '');

    // Parse
    const results = Papa.parse(csvData, { header: true });

    // Convierte datos en un array
    const registros = results.data.map((row: any) => ({
      // datos del csv
      name: row.name,
      institucion: row.institucion,
      cargo: row.cargo,
      pais: row.pais,
      rol: row.rol,
      idioma: row.idioma,
      topicos_sesion1: row.topicos_sesion1,
      otros_sesion1: row.otros_sesion1,
      topicos_sesion2: row.topicos_sesion2,
      otros_sesion2: row.otros_sesion2,
      topicos_sesion3: row.topicos_sesion3,
      otros_sesion3: row.otros_sesion3,
      topicos_sesion4: row.topicos_sesion4,
      otros_sesion4: row.otros_sesion4
    }));

    // Inserta registros en potsgres utilizando prisma
    await prisma.registro.createMany({
      data: registros,
    });

    res.status(200).json({ message: 'Datos CSV insertados.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de inserción.' });
  }
});

export default apiRoute;
