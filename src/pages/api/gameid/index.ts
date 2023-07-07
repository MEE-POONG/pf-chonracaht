import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { method } = req
    switch (method) {
        case 'GET':
            try {
                const data = await prisma.gameid.findMany({});
                res.status(200).json(data)
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

            
            case 'POST':
            const { nameid, passwordid} = req.body;
            try {
                const newgameid = await prisma.gameid.create({
                    data: {
                        nameid,
                        passwordid,
                        
                    },
                });
                res.status(201).json({ success: true, data: newgameid });
            } catch (error) {
                res.status(500).json({ success: true, message: "An error occurred while creating the gameid" });
            }
            break;

            


        default:
            res.setHeader('Allow', ['GET', 'PUT'])
            res.status(405).end(`Method ${method} Not Allowed`)
    }
}


