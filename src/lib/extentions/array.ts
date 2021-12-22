(function () {
  if (!Array.prototype.remove) {
    Array.prototype.remove = function (item: any): boolean {
      let index = (<Array<any>>this).indexOf(item);
      if (index >= 0) {
        (<Array<any>>this).splice(index, 1);
        return true;
      }
      return false;
    };
  }
})();

export {};
