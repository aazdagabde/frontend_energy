// src/app/core/services/theme.service.ts
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private storageKey = 'theme';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  initTheme(): void {
    const saved = localStorage.getItem(this.storageKey);
    const useDark = saved === 'dark'
      ? true
      : (!saved && window.matchMedia('(prefers-color-scheme: light)').matches);

    this.setDark(useDark);
  }

  toggleTheme(): void {
    this.setDark(!this.isDark());
  }

  isDark(): boolean {
    return this.document.documentElement.classList.contains('dark');
  }

  private setDark(dark: boolean): void {
    const root = this.document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem(this.storageKey, 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem(this.storageKey, 'light');
    }
  }
}
