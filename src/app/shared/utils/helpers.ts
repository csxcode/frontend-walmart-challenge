export class Helpers {
  public static removeEmpty = (obj) => {
    Object.keys(obj || {}).forEach(
      (key) => (obj[key] == null || obj[key] === "") && delete obj[key]
    );
    return obj;
  };
}
