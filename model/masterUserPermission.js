const {pool} = require('../db/db')
const addNewPermissions = async (dat) => {
  try {
    let queryString = `INSERT INTO public."MAS_PERMISSION"(
      "ROLE_ID",
      "PROGRAM_ID",
      "CREATE_USER",
      "CREATE_DATE",
      "MODIFY_USER",
      "MODIFY_DATE")
      VALUES ('${dat.ROLE_ID}','${dat.PROGRAM_ID}','${dat.CREATE_USER}','${dat.CREATE_DATE}','${dat.MODIFY_USER}','${dat.MODIFY_DATE}')`
    
      const {rows} = await pool.query(queryString)
      if (rows.length > 0) {
        return true
      }else{
        return false
      }
  } catch (error) {
    return error
  }
}

const searchPermissions = async (dat) => {
  try {
    const queryString = ``
    if (dat) {
      queryString = `SELECT * FROM public."MAS_PERMISSION" WHERE "ROLE_ID" = '${dat.ROLE_ID}'`
    } else {
      queryString = `SELECT * FROM public."MAS_PERMISSION"`
    }

    const {rows} = await pool.query(queryString)
    if (rows.length > 0) {
      return rows
    }
    else{
      return false
    }
  } catch (error) {
    return error
  }
}

const updatePermissions = async (dat) => {
  try {
    let queryString = `
    UPDATE public."MAS_PERMISSION"
    SET "ROLE_ID"='${dat.ROLE_ID}', "PROGRAM_ID"='${dat.PROGRAM_ID}', "MODIFY_USER"='${dat.MODIFY_USER}', "MODIFY_DATE"='${dat.MODIFY_DATE}'`

    const {rows} = await pool.query(queryString)
    if (rows.length > 0) {
      return rows
    }
    else{
      return false
    }
  } catch (error) {
    return error
  }
}

const deletePermissions = async (dat) => {
  try {
    let queryString = `DELETE FROM public."MAS_PERMISSION" WHERE "ROLE_ID" = '${dat.ROLE_ID}'`
    const {rows} = pool.query(queryString)
    if (rows.length > 0) {
      return rows
    }
    else{
      return false
    }
  } catch (error) {
    return error
  }
}

module.exports = { addNewPermissions, searchPermissions, updatePermissions, deletePermissions }