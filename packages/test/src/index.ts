import { SKIP } from "serializr";

/**
 * asd
 */
type Skipped = typeof SKIP;

export const deserializeArray = (): Skipped => {
  throw new Error("");
};

export const serializeArray = (): Skipped => {
  throw new Error("");
};

export class ActionState {
  private _messageFormatter: ((message: string) => string) | undefined;

  setMessageFormatter(val: ((message: string) => string) | undefined): void {}
}

export class SomeType {
  response!: string & { data?: object };
}
