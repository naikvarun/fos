import { DomainException } from '@fos/common';

export class OrderDomainException extends DomainException {
  constructor(message: string) {
    super(message);
  }
}
