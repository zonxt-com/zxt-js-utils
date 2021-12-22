(function () {
  String.prototype.isEmpty = function (): boolean {
    return !this.trim();
  };
})();

export {};
