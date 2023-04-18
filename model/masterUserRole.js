const {pool} = require('../db/db')

const addUserRole = async (dat) => {
  try {
    let queryString = `INSERT INTO public."USER_ROLE"(
      "ROLE_ID",
      "ROLE_NAME",
      "CREATE_USER",
      "CREATE_DATE",
      "MODIFY_USER",
      "MODIFY_DATE")
      VALUES ('${dat.ROLE_ID}','${dat.ROLE_NAME}','${dat.CREATE_USER}','${dat.CREATE_DATE}','${dat.MODIFY_USER}','${dat.MODIFY_DATE}')`
    
      const {rows} = pool.query(queryString)
      if (rows.length > 0) {
        return true
      }else{
        return false
      }
  } catch (error) {
    return error
  }
}

const searchUserRole = async (dat) => {

  try {
    let queryString = ''
  if(dat){
    queryString = `SELECT "USERID", "ROLE", "DETP", "PASSWORD" FROM public."MAS_USER" 
    WHERE "USERID" = '${dat.USERID}'`
  }else{
    queryString = `SELECT "USERID", "ROLE", "DETP" FROM public."MAS_USER"`
  }

  const { rows } = pool.query(queryString)
  if (rows.leght > 0) {
    return rows
  }
  else {
    return false
  }
  } catch (error) {
    return error
  }
}

const updateUserRole = async (dat) => {
  try {
    let queryString = `
    UPDATE public."USER_ROLE"
    SET "ROLE_ID"='${dat.ROLE_ID}', "ROLE_NAME"='${dat.ROLE_NAME}', "MODIFY_USER"='${dat.MODIFY_USER}', "MODIFY_DATE"='${dat.MODIFY_DATE}'`

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

const deleteUserRole = async (dat) => {
  try {
    let queryString = `DELETE FROM public."USER_ROLE" WHERE "ROLE_ID" = '${dat.ROLE_ID}'`
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

module.exports = {addUserRole, searchUserRole, updateUserRole, deleteUserRole}