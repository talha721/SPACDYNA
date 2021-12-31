import dbConnect from "../../../utils/dbConnect";
import Contact from '../../../models/contactModel';

dbConnect();

export default  async (req, res) => {
    if (req.method === 'POST'){
        const contact = await Contact.create(req.body)
        res.status(201).json({ status: true, data: contact })
    } else if (req.method === 'GET') {
        const contacts = await Contact.find({})
        res.status(200).json({ status: true, data: contacts })
    } else {
        res.status(400).json({ status: false })
    }
}