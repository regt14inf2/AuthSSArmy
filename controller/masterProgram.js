const { addProgram, searchProgram, updateProgram, deleteProgram, searchProgramByRole } = require('../model/masterProgram');
exports.addNewProgram = async (req, res) => {
    try {
        const program = await addProgram(req.body);
        res.status(200).json({
            success: true,
            message: "Program added successfully",
            data: program
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getProgram = async (req, res) => {
    try {
        const program = await searchProgram();
        res.status(200).json({
            success: true,
            message: "Program fetched successfully",
            data: program
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.updateProgram = async (req, res) => {
    try {
        const program = await updateProgram(req.body);
        res.status(200).json({
            success: true,
            message: "Program updated successfully",
            data: program
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.deleteProgram = async (req, res) => {
    try {
        const program = await deleteProgram(req.body);
        res.status(200).json({
            success: true,
            message: "Program deleted successfully",
            // data: program
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

exports.getProgramByRole = async (req, res) => {
    try {
        const program = await searchProgramByRole(req.body);
        console.log("sss",program);
        if(program){
            res.status(200).json({
                success: true,
                message: "Program fetched successfully",
                data: program
            });
        } else {
            res.status(400).json({
                success: false,
                message: "Program not found",
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
