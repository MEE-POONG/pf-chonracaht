import { Partner, PrismaClient } from "@prisma/client";
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
                const Partner: Partner | null = await prisma.partner.findUnique({
                    where: {
                        id: String(id),
                    },
                });

                if (!Partner) {
                    return res.status(404).json({ success: false, message: 'Partner not found' });
                }

                res.status(200).json({ success: true, data: Partner });
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, message: "An error occurred while fetching the Partner" });
            }
            break;
        case 'PUT':
            const {  userAG,originAG ,percent,commission,overdue, adjustPercentage,pay, customerCommission, recommender,createdAt,updatedAt,deleted_at,memberId,member } = req.body;

            try {
                const Partner: Partner = await prisma.partner.update({
                    where: { id: String(id) },
                    data: {
                       userAG,
                       originAG,
                       percent,
                       commission,
                       overdue,
                       adjustPercentage,
                       pay,
                       customerCommission,
                       recommender,
                       createdAt,
                       updatedAt,
                       deleted_at,
                       memberId,
                       member
                    },
                });

                res.status(200).json({ success: false, data: Partner });
            } catch (error) {
                console.error(error);
                res.status(500).json({ success: false, message: 'An error occurred while updating the Partner' });
            }
            break;
        case 'DELETE':
            try {
                const Partner: Partner = await prisma.partner.delete({
                    where: { id: String(id) },
                });

                res.status(200).json({ success: false, message: 'Partner deleted successfully', data: Partner });
            } catch (error) {
                console.error("67 ",error);
                res.status(500).json({ success: false, message: 'An error occurred while deleting the Partner' });
            }
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}