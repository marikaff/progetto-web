import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'light' | 'dark' = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(isDarkMode ? 'dark' : 'light');
    this.watchSystemThemeChanges();
  }

  private watchSystemThemeChanges() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      this.setTheme(e.matches ? 'dark' : 'light');
    });
  }

  setTheme(theme: 'light' | 'dark') {
    this.currentTheme = theme;
    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }

  toggleTheme() {
    this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
  }
}