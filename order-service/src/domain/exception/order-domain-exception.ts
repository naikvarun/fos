import { DomainException } from '@fos/common';

export class OrderDomainException extends DomainException {
  constructor(message: string, cause?: Error) {
    super(message, cause);
  }
}
