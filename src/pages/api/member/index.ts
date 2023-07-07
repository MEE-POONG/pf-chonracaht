import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.member.findMany({});
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
            
            case 'POST':
            const { userAG, originAG, percent, commission, overdue, adjustPercentage, pay, customerCommission, recommender } = req.body;
            try {
                const newPartner = await prisma.partner.create({
                    data: {
                        userAG,
                        originAG,
                        percent,
                        commission,
                        overdue,
                        adjustPercentage,
                        pay,
                        customerCommission,
                        recommender
                    },
                });
                res.status(201).json({ success: true, data: newPartner });
            } catch (error) {
                res.status(500).json({ success: true, message: "An error occurred while creating the member" });
            }
            break;

            


        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}


