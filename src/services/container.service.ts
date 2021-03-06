import { CryptoService } from '../abstractions/crypto.service';
import { PlatformUtilsService } from '../abstractions/platformUtils.service';

export class ContainerService {
    constructor(private cryptoService: CryptoService,
        private platformUtilsService: PlatformUtilsService) {
    }

    attachToWindow(win: any) {
        if (!win.bitwardenContainerService) {
            win.bitwardenContainerService = this;
        }
    }

    getCryptoService(): CryptoService {
        return this.cryptoService;
    }

    getPlatformUtilsService(): PlatformUtilsService {
        return this.platformUtilsService;
    }
}
