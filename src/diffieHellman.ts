export class DiffieHellman {
  private p: number;
  private g: number;

  constructor(p: number, g: number) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('p and g must be prime');
    }
    this.p = p;
    this.g = g;
  }

  getPublicKey(privateKey: number): number {
    if (privateKey <= 1 || privateKey >= this.p) {
      throw new Error('Invalid private key');
    }
    return (this.g ** privateKey) % this.p;
  }

  getSecret(theirPublicKey: number, myPrivateKey: number): number {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }

  private isPrime(n: number): boolean {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }
}
