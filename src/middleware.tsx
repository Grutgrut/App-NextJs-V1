//next-Intl
import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'
import { localePrefix, useRouter } from './navigation'
import { redirect } from '@/navigation'
//next-Intl Fin

import { NextRequest, NextResponse } from 'next/server'
import { getSession, logout, updateSession } from "./lib/authProvider/authProvider";
import { log } from 'console'
//https://nextjs.org/docs/app/building-your-application/authentication

//Possible solution pour la redirection dans le middleware
//https://github.com/amannn/next-intl/issues/247
//https://github.com/amannn/next-intl/discussions/256
//https://stackoverflow.com/questions/77040517/how-to-rewrite-request-after-next-intl-middleware-receives-it

//next-Intl
type CustomMiddleware = (req: NextRequest) => Promise<NextResponse>

const customMiddleware: CustomMiddleware = async req => {
    console.log('Custom middleware executed before next-intl')
    await updateSession(req);
    return NextResponse.next()
}

const customMiddlewareNotProtected: CustomMiddleware = async req => {
    console.log('Custom middleware executed before next-intl')
    await updateSession(req);
    //console.log('req1', req.nextUrl.pathname);
    const locale = req.nextUrl.pathname.split('/')[1];
    const url = '/' + locale + '/signin'
    return NextResponse.redirect(new URL(url, req.nextUrl))
};

const intlMiddleware = createMiddleware({
    locales,
    defaultLocale: 'en',
    localePrefix
})
//next-Intl Fin

// 1. Specify protected and public routes
const publicRoutes = ['/signin', '/signup', '/']
const protectedRoutes = ['/dashboard', '/dashboardTest']


export default async function middleware(
    req: NextRequest
): Promise<ReturnType<typeof intlMiddleware>> {
    // 2. Check if the current route is protected or public

    const path = req.nextUrl.pathname
    const pathWithoutLocale = path.substring(3);
    const isProtectedRoute = protectedRoutes.includes(pathWithoutLocale)
    const isPublicRoute = publicRoutes.includes(pathWithoutLocale)

    const publicPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${publicRoutes
            .flatMap((p) => (p === '/' ? ['', '/'] : p))
            .join('|')})/?$`,
        'i'
    );
    const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

    const protectedPathnameRegex = RegExp(
        `^(/(${locales.join('|')}))?(${protectedRoutes
            .flatMap((p) => (p === '/' ? ['', '/'] : p))
            .join('|')})/?$`,
        'i'
    );
    const isProtectedPage = protectedPathnameRegex.test(req.nextUrl.pathname);


    const match = path.split("/").slice(0, 3).join("/");//On récupère le premier dossier (/fr/dashboard/products/4) et on en exrait /fr/dashboard
    const isProtectedPageByMatch = protectedPathnameRegex.test(match);//On teste suivant le regex

    /*     console.log('match', match)
    
        console.log('isPublicPage', isPublicPage);
        console.log('isProtectedPage', isProtectedPage);
    
        console.log('pass midddleware')
        console.log('path', path);
        console.log('pathWithoutLocale', pathWithoutLocale);
        console.log('is protected routes', isProtectedRoute);
        console.log('req', req);
        console.error('fin log middleware'); */

    //console.log(locales);


    // 3. Decrypt the session from the cookie
    const session = await getSession();

    // 5. Redirect to /login if the user is not authenticated
    if (isProtectedPageByMatch && session === null) {
        //console.log('not autorized');
        //const nextRequest = req

        return await customMiddlewareNotProtected(req)
    } else {
        //console.log('autorized');
        await customMiddleware(req)
        return intlMiddleware(req)
    }

    // 6. Redirect to /dashboard if the user is authenticated
    if (
        isPublicRoute &&
        session?.user?.id &&
        !req.nextUrl.pathname.endsWith('/dashboard')
    ) {
        return NextResponse.redirect(new URL('/dashboardtest', req.nextUrl))
    }

    console.log('passe par ici');

}


// Routes Middleware should not run on
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)', '/(fr|en|ja|de|ru|es|fa|ar)/:path*'],
}
