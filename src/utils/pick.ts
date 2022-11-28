const pick = (object: any, keys: string[]) => {
  return keys.reduce((obj: any, token: string) => {
    if (object) {
      obj[token] = object[token];
    }
    return obj;
  }, {});
};

export default pick;
