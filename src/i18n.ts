import { Locale } from 'date-fns'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { es, enGB, fr, de, ru, ja, ar, faIR } from "date-fns/locale";

export const locales = ['en', 'fr', 'ja', 'de', 'ru', 'es', "fa", "ar"]

export const i18nLocales = [
  { code: 'en', fns: enGB, ietf: 'en-GB' },
  { code: 'fr', fns: fr, ietf: 'fr-FR' },
  { code: 'es', fns: es },
  { code: 'de', fns: de },
  { code: 'ru', fns: ru },
  { code: 'ja', fns: ja },
  { code: 'ar', fns: ar },
  { code: 'fa', fns: faIR },
]
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  /* if (!locales.includes(locale as any)) notFound() */
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./lib/messages/${locale}.json`)).default
  }
})
