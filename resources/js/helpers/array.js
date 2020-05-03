const deepArray = {
  getProperty(obj, prop) {
    var parts = prop.split('.');

    if (Array.isArray(parts)) {
      var last = parts.pop(),
          l = parts.length,
          i = 1,
          current = parts[0];

      while((obj = obj[current]) && i < l) {
        current = parts[i];
        i++;
      }

      if(obj) {
        return obj[last];
      }
    } else {
      throw 'parts is not valid array';
    }
  }
}

export default deepArray
