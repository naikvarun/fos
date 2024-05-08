export abstract class DomainException extends Error {
  constructor(message: string, cause?: Error) {
    super(message, { cause });
  }
}
