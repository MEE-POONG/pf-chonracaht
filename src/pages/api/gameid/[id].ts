import { gameid, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

type Data = {
    success: boolean;
    message?: string;
    data?: any;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { method } = req;
    const { id } = req.query;

    switch (method) {
        case 'GET':
            try {
                const gameid: gameid | null = await prisma.gameid.findUnique({
                    where: {
                        id: String(id),
                    },
                });

                if (!gameid) {
                    return res.status(404).json({ success: false, message: 'gameid not found' });
                }

                res.status(200).json({ success: true, data: gameid });
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, message: "An error occurred while fetching the gameid" });
            }
            break;
        case 'PUT':
            const { nameid,passwordid } = req.body;

            try {
                const gameid: gameid = await prisma.gameid.update({
                    where: { id: String(id) },
                    data: {
                       nameid,
                       passwordid,
                    },
                });

                res.status(200).json({ success: false, data: gameid });
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, message: 'An error occurred while updating the gameid' });
            }
            break;
        case 'DELETE':
            try {
                const gameid: gameid = await prisma.gameid.delete({
                    where: { id: String(id) },
                });

                res.status(200).json({ success: false, message: 'gameid deleted successfully', data: gameid });
            } catch (error) {
                console.error("67 ",error);
                res.status(500).json({ success: false, message: 'An error occurred while deleting the gameid' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}