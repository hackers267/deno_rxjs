export class Deferred<T> {
  resolve: (value?: T | PromiseLike<T>) => void = null!;
  reject: (reason?: any) => void = null!;
  promise = new Promise<T>((a: any, b) => {
    this.resolve = a;
    this.reject = b;
  });
}
