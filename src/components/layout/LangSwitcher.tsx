'use client'
import { capitalize } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useSelectedLayoutSegments } from 'next/navigation'
import React, { useState } from 'react'
import { FiGlobe } from 'react-icons/fi'
/* import Button from './Button' */
import { Button } from '@/components/ui/button'

const LangSwitcher: React.FC = () => {
  interface Option {
    country: string
    code: string
  }
  const pathname = usePathname()
  const locale = pathname.split('/')[1];
  const urlSegments = useSelectedLayoutSegments()

  const [isOptionsExpanded, setIsOptionsExpanded] = useState(false)
  const options: Option[] = [
    { country: 'English', code: 'en' }, // Native name is the same
    /*     { country: 'Deutsch', code: 'de' }, */
    { country: 'Français', code: 'fr' },
    /*     { country: 'Español', code: 'es' },
        { country: 'Русский', code: 'ru' },
        { country: '日本語', code: 'ja' },
        { country: 'العربية', code: 'ar' },
        { country: 'فارسی', code: 'fa' } */
  ]

  return (
    <div className='flex items-center justify-center'>
      <div className='relative'>
        <Button
          variant="ghost"
          className=' h-9 w-9 rounded-md border'
          size='icon'
          onClick={() => setIsOptionsExpanded(!isOptionsExpanded)}
          onBlur={() => setIsOptionsExpanded(false)}
        >
          {/*  Language */}
          <FiGlobe />
        </Button>
        {isOptionsExpanded && (
          <div className='absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-secondary shadow-lg'>
            <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {options.map(lang => {
                return (
                  <Link
                    key={lang.code}
                    href={`/${lang.code}/${urlSegments.join('/')}`}
                  >
                    <button
                      lang={lang.code}
                      onMouseDown={e => {
                        e.preventDefault()
                      }}
                      className={`block w-full px-4 py-2 text-left text-sm hover:bg-primary hover:text-secondary ${locale === `${lang.code}`
                        ? 'bg-secondary-foreground text-secondary hover:bg-selected'
                        : 'text-primary'
                        }`}
                    >
                      {capitalize(lang.country)}
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div >
  )
}

export default LangSwitcher
