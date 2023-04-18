const { registerController } = require("./userController");
const { searchUser } = require("../model/masterUser");

exports.addNewUser = async (req, res) => {
    try {
        const user = await registerController(req.body);
        res.status(200).json({
            success: true,
            message: "User added successfully",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getUser = async (req, res) => {
  try {
    const user = await searchUser(req.body);
    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

// exports.updateUser = async (req, res) => {
//   try {
//     const user = await updateUser(req.body);
//     res.status(200).json({
//       success: true,
//       message: "User updated successfully",
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// }

// exports.deleteUser = async (req, res) => {
//   try {
//     const user = await deleteUser(req.body);
//     res.status(200).json({
//       success: true,
//       message: "User deleted successfully",
//       // data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// }

