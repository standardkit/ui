import { InputInterface } from './input.interface';

// This serves only as a reference for any parent of inputs that wish to access a generic input
export abstract class InputComponent implements InputInterface {
  private name?: string;

  public setName(name: string): void {
    this.name = name;
  }
}
