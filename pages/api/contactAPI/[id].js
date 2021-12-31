import dbConnect from "../../../utils/dbConnect";
import Contact from '../../../models/contactModel';

dbConnect();

export default  async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const contact = await Contact.findById(id)
                if (!contact){
                    return res.status(400).json({ success: false })
                } else {
                    res.status(200).json({ success: true, data: contact })
                }
            } catch (e) {
                res.status(400).json({ success: false })
            }
            break;

        case 'PUT':
            try {
                const contact = await Contact.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!contact){
                    return res.status(400).json({ success: false })
                } else {
                    res.status(200).json({ success: true, data: contact })
                }
            } catch (e) {
                res.status(400).json({ success: false })
            }
            break;

        case 'DELETE':
            try {
                const deleteContact = await Contact.deleteOne({ _id: id })
                if (!deleteContact){
                    return res.status(400).json({ success: false })
                } else {
                    res.status(200).json({ success: true, data: {} })
                }
            } catch (e) {
                res.status(400).json({ success: false })
            }
            break;

        default:
            res.status(400).json({ success: false })
            break;
    }
}