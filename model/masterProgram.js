const {pool} = require('../db/db')

const addProgram = async (dat) => {
    try {
      let query = `INSERT INTO public."MAS_PROGRAM" 
        ("PROGRAM_ID", "NAME", "DESCRIPTION","PATH", "ICONNAME", "CREATE_DATE", "CREATE_USER", "MODIFY_DATE", "MODIFY_USER") 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`
      const {rows} = await pool.query(query, dat.PROGRAM_ID, dat.NAME, dat.DESCRIPTION, dat.PATH, dat.ICONNAME, dat.CREATE_DATE, dat.CREATE_USER, dat.MODIFY_DATE, dat.MODIFY_USER);
      if (rows.length > 0) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return error;
    }
}

const searchProgram = async (dat) => {
  try {
    let searchQuery = `SELECT * FROM public."MAS_PROGRAM"`
    const {rows} = await pool.query(searchQuery);
    if (rows.length > 0) {
      return rows
    } else {
      return false;
    }
  } catch (error) {
    return error
  }
}

const updateProgram = async (dat) => {
  try {
    let updateQuery = `UPDATE public."MAS_PROGRAM" SET "NAME" = $1, "DESCRIPTION" = $2, "PATH" = $3, "ICONNAME" = $4, "MODIFY_DATE" = $5, "MODIFY_USER" = $6 WHERE "PROGRAM_ID" = $7 RETURNING *`
    const {rows} = await pool.query(updateQuery, dat.NAME, dat.DESCRIPTION, dat.PATH, dat.ICONNAME, dat.MODIFY_DATE, dat.MODIFY_USER, dat.PROGRAM_ID);
    if (rows.length > 0) {
      return rows.data;
    } else {
      return false;
    }
  }catch (error) {
    return error
  }

}

const deleteProgram = async (dat) => {
  try {
    let deleteQuery = `DELETE FROM public."MAS_PROGRAM" WHERE "PROGRAM_ID" = $1`
    const {rows} = await pool.query(deleteQuery, dat.PROGRAM_ID);
    if (rows) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return error;
  }
}

const searchProgramByRole = async (dat) => {
  try {
    let searchQuery = `
    SELECT p."PROGRAM_ID", p."ROLE_ID", m."NAME", m."PATH", m."DESCRIPTION", m."ICONNAME"
    FROM public."MAS_PERMISSION_USER" as p
    LEFT JOIN public."MAS_PROGRAM" as m
    ON m."PROGRAM_ID" = p."PROGRAM_ID"
    WHERE p."ROLE_ID" = '${dat.ROLE_ID}'
    `
    const {rows} = await pool.query(searchQuery);
    console.log(rows);
    if (rows.length > 0) {
      return rows;
    }
    else {
      return false;
    }
  } catch (error) {
    return error;
  }
}
module.exports = {
  addProgram,
  searchProgram,
  updateProgram,
  deleteProgram,
  searchProgramByRole,
}