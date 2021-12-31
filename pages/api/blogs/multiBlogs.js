import dbConnect from "../../../utils/dbConnect";
import multiBlog from '../../../models/multiBlogsModel'

dbConnect();

export default  async (req, res) => {
    if (req.method === 'GET'){
        const multiBlogData = await multiBlog.find({})
        res.status(200).json({ success: true, data: multiBlogData })
    }
}