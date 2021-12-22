(function () {
  Number.prototype.toThousandsSeperator = function (): string {
    return Number(this)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  Number.prototype.toDecimal = function (num = 2): string {
    return new Number(this).toFixed(num);
  };
})();

export {};
