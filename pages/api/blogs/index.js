import dbConnect from "../../../utils/dbConnect";
import Blogs from '../../../models/blogsModel';

dbConnect();

export default  async (req, res) => {
    if (req.method === 'GET'){
        const blogs = await Blogs.find({})
        res.status(200).json({ success: true, data: blogs })
    }
}