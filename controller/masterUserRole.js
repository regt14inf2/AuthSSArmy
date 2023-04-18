const { addUserRole, searchUserRole, updateUserRole, deleteUserRole } = require('../model/masterUserRole');
exports.addNewUserRoles = async (req, res) =>{
  try {
    const role = await addUserRole(req.body);
    res.status(200).json({
      success: true,
      message: "User Role added successfully",
      data: role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

exports.getUserRoles = async (req, res) =>{
  try {
    const role = await searchUserRole(req.body);
    res.status(200).json({
      success: true,
      message: "User Role fetched successfully",
      data: role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

exports.updateUserRoles = async (req, res) =>{
  try {
    const role = await updateUserRole(req.body);
    res.status(200).json({
      success: true,
      message: "User Role updated successfully",
      data: role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

exports.deleteUserRoles = async (req, res) =>{
  try {
    const role = await deleteUserRole(req.body);
    res.status(200).json({
      success: true,
      message: "User Role deleted successfully",
      // data: role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
