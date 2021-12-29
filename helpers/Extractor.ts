class Extractor {
  static extractAuthData(mutations: any) {
    if (Object.keys(mutations).length) {
      const authDataKey = Object.keys(mutations);
      const data = mutations[authDataKey[0]]?.data;
      return data || null;
    }
  }
}
export default Extractor;
