const { addNewPermissions, searchPermissions, updatePermissions, deletePermissions } = require('../model/masterUserPermission');
exports.addNewPermission = async (req, res) => {
    try {
        const permission = await addNewPermissions(req.body);
        res.status(200).json({
            success: true,
            message: "Permission added successfully",
            data: permission
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getPermission = async (req, res) => {
    try {
        const permission = await searchPermissions(req.body);
        res.status(200).json({
            success: true,
            message: "Permission fetched successfully",
            data: permission
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.updatePermission = async (req, res) => {
    try {
        const permission = await updatePermissions(req.body);
        res.status(200).json({
            success: true,
            message: "Permission updated successfully",
            data: permission
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.deletePermission = async (req, res) => {
    try {
        const permission = await deletePermissions(req.body);
        res.status(200).json({
            success: true,
            message: "Permission deleted successfully",
            // data: permission
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
