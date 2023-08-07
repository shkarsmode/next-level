import { InjectionToken } from '@angular/core';

export const BASE_PATH_API = new InjectionToken<string>('basePathAPI');
export const GEO_PATH_API = new InjectionToken<string>('geoPathAPI');
export const GEO_API_KEY = new InjectionToken<string>('geoApiKey');