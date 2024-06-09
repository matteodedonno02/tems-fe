import {range} from "rxjs";

export function fromListToListOfPair(data: any[]): any[][] {
  const pairs: number[][] = [];
  for (let i = 0; i < data.length; i += 2) {
    pairs.push([data[i], data[i + 1]]);
  }
  return pairs;
}
