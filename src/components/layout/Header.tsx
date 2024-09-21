import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import { Link } from '@/navigation'
import SwitchIsLogged from '@/components/layout/SwitchIsLogged'
import { MobileSidebar } from './mobile-sidebar'
import { Boxes } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'
interface Props {
  locale: string
}
export const Header: FC<Props> = ({ locale }) => {
  /*   const isClientComponent = typeof window !== 'undefined';
    console.log('is client component', isClientComponent) */
  const t = useTranslations('')
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link
          href={"/"}
          className="hidden items-center justify-between gap-2 md:flex"
        >
          <Boxes className="h-6 w-6" />
          <h1 className="text-lg font-semibold">La Plank des Gones</h1>
        </Link>
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* <ThemeSwitch /> */}
          <LangSwitcher />
          <SwitchIsLogged></SwitchIsLogged>
        </div>
      </nav>
    </div>
    /*     <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
          <Link lang={locale} href='/'>
            <div className='flex flex-row items-center'>
              <div className='mb-2 h-14 w-14'>
                <LogoIcon />
                div>
              <strong className='mx-2 select-none'>Template</strong>
              div>
            Link>
          <div className='flex flex-row items-center gap-3'>
            <nav className='mr-10 inline-flex gap-5'>
              <Link lang={locale} href={`/about`}>
                {t('About')}
                Link>
              <a href=''>{t('Support')}</a>
              <a href=''>{t('Other')}</a>
              nav>
            <ThemeSwitch />
            <LangSwitcher />
            <a
              href='https://github.com/yahyaparvar/nextjs-template'
              target='_blank'
              
              <div className='size-8'>
                <GithubIcon />
                div>
              a>
            <div>
              <SwitchIsLogged></SwitchIsLogged>
              div>
            div>
          div> */
  )
}
