declare global {
  interface Array<T> {
    remove: (item: T) => boolean;
  }

  interface Number {
    toThousandsSeperator(): String;
    toDecimal(): string;
  }

  interface String {
    isEmpty(): boolean;
  }
}

export {};
