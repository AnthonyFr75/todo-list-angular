import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class WorkIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this._registerIcons();
  }

  private _registerIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'ellipse',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/ellipse.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'permission-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/permission-icon.svg'
      )
    );
  }
}
