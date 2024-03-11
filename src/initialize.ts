import { registerWallet } from './register.js';
import { SpiralSafeWallet } from './wallet.js';
import type { SpiralSafe } from './window.js';

export function initialize(spiralSafe: SpiralSafe): void {
    registerWallet(new SpiralSafeWallet(spiralSafe));
}
