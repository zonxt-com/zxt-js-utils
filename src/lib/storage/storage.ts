export default class Storage {
  private prefixKey: string;
  private storage: any;
  private cacheTime: number;

  constructor(prefixKey: string = "", storage: any, cacheTime: number) {
    this.prefixKey = prefixKey;
    this.storage = storage;
    this.cacheTime = cacheTime;
  }

  private getKey(key: string) {
    return `${this.prefixKey}${key}`.toUpperCase();
  }

  /**
   * @description Set cache
   * @param {string} key cache key
   * @param {*} value cache value
   * @param expire cache expire time
   */
  set(key: string, value: any) {
    const stringData = JSON.stringify({
      value,
      expire:
        this.cacheTime !== null
          ? new Date().getTime() + this.cacheTime * 1000
          : null,
    });
    this.storage.setItem(this.getKey(key), stringData);
  }

  /**
   * get cache
   * @param {string} key cache key
   * @param {any} def default value
   */
  get(key: string, def: any = null) {
    const item = this.storage.getItem(this.getKey(key));
    if (item) {
      try {
        const data = JSON.parse(item);
        const { value, expire } = data;
        // return not expired
        if (expire === null || expire >= Date.now()) {
          return value;
        }
        this.remove(this.getKey(key));
      } catch (e) {
        return def;
      }
    }
    return def;
  }

  /**
   * Remove from cache
   * @param {string} key
   */
  remove(key: string) {
    this.storage.removeItem(this.getKey(key));
  }
}
