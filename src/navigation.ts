/* 'use client' */
import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation'
import { locales } from './i18n'

export const localePrefix = 'always'

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/signin': '/signin',
  '/signup': '/signup',
  '/dashboard': '/dashboard',
  '/dashboardTest': '/dashboardTest',
  '/dashboard/produits/[id]': '/dashboard/produits/[id]',
  '/reservation': '/reservation'
} satisfies Pathnames<typeof locales>

/* const isClientComponent = typeof window !== 'undefined';
console.log('is client component navigation', isClientComponent) */


/* Voir cette adresse si vous voulez des nom de route suivant la localisation */
/*https://next-intl-docs.vercel.app/docs/routing/navigation */

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames })
