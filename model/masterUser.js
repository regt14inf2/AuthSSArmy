const {pool} = require('../db/db')

const searchUser = (dat) =>{
  try {
    let queryString = ''
    if(dat){
      queryString = `SELECT "USERID", "ROLE", "DETP", "PASSWORD" FROM public."MAS_USER" 
      WHERE "USERID" = '${dat.USERID}'`
    }else{
      queryString = `SELECT "USERID", "ROLE", "DETP" FROM public."MAS_USER"`
    }

    const {rows} = pool.query(queryString)
    if (rows.leght > 0) {
      return rows
    } else {
      return false
    }
  } catch (error) {
    return error
  }
}

// const updateUser = async (dat) => {
//   try {
//     let queryString = ``

//   } catch (error) {
    
//   }

module.exports = {searchUser}