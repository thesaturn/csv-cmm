// Fetch all posts (in /pages/api/posts.ts)
import { PrismaClient, Registro,aggregates } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import nextConnect from 'next-connect';

const prisma = new PrismaClient()

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
    const agg = await prisma.aggregates.findMany({
      
    })
  /*
const count = await prisma.registro.count({
    where: {
        
        institucion: "Universidad de Chile",
        },
    })
    

    const count_a = await prisma.registro.count({
      where: {
          
          name: "Lina",
          },
      })
*/

    res.status(200).json(agg);
});

export default apiRoute;