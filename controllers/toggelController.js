const Status = require('../models/ToggelModel')
exports.saveStatus = async (req, res) => {
    try {
        const { id } = req.body; // document _id

        // Find the existing status document
        const existingStatus = await Status.findById(id);

        if (!existingStatus) {
            return res.status(404).json({ message: 'Status not found' });
        }

        // Toggle the status (if true → false, if false → true)
        existingStatus.status = !existingStatus.status;

        await existingStatus.save();

        res.status(200).json({
            message: 'Status toggled successfully',
            data: existingStatus
        });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
};

