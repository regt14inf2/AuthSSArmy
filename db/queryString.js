const _multiInsert = (arrOfValues) => {
  // removes lastCharacter
  const _remLastChar = (str) => str.slice(0, str.length - 1);

  let foramttedQuery = "";

  arrOfValues.forEach((row) => {
    let newRow = "";
    for (const val of Object.values(row)) {
      let newValue = "";
      if (typeof val === "string") newValue = `'${val}',`;
      else if (val === undefined || val === "") newValue = `NULL,`;
      else newValue = `${val},`;
      newRow = newRow.concat(newValue);
    }

    foramttedQuery = foramttedQuery.concat(`(${_remLastChar(newRow)}),`);
  });

  return _remLastChar(foramttedQuery);
};

const _columnInsert = (arrOfValues) => {
  try {
    const _remLastChar = (str) => str.slice(0, str.length - 1);
  let foramttedQuery = "";
  //object keys to query
  if(Object.keys(arrOfValues[0])){
    for (const key of Object.keys(arrOfValues[0])) {
      foramttedQuery = foramttedQuery.concat(`"${key}",`);
    }
  }else{
    for (const key of Object.keys(arrOfValues)) {
      foramttedQuery = foramttedQuery.concat(`"${key}",`);
    }
  }
  return _remLastChar(foramttedQuery);
  } catch (error) {
    return error
  }
};

module.exports = {_multiInsert, _columnInsert}