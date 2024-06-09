import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


const ACCESS_PRIVATE_LINKS = 'accessPrivateLinks';

export const privateLinksGuard: CanActivateFn = (route, state) => {
	const isAccessPrivateLinks = !!localStorage.getItem(ACCESS_PRIVATE_LINKS);
	if (!isAccessPrivateLinks) {
		inject(Router).navigate(['/']); 
		return false;
	}
	return isAccessPrivateLinks;
};
