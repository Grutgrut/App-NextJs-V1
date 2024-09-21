import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

import { logo, logo1, slider, raclette, fondue, tartare, quenelle, chevreChaud, burger, stars } from "@/assets/images/images";
import { Link } from '@/navigation';
import Image from 'next/image';

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    /*     <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
          <section className='flex flex-col items-center justify-center py-24'>
            <h1 className='text-center text-7xl font-extrabold leading-tight'>
              {t('An')}{' '}
              <span className='bg-span-bg bg-clip-text text-transparent'>
                {t('Booster')}
              </span>
              <br />
              {t('to_Your_NextJS_Apps')}
            </h1>
            <div className='my-6 px-20 text-center text-2xl text-text-secondary'>
              {t(
                'An_approachable_performant_and_versatile_boilerplate_for_building_SSR_applications'
              )}
            </div>
            <div className='mt-4 flex flex-row gap-4'>
              <a
                href='https://github.com/new?template_name=nextjs-template&template_owner=yahyaparvar'
                target='_blank'
              >
                <Button rounded size='large'>
                  {t('Use_Template')}
                </Button>
              </a>
              <a
                href='https://github.com/yahyaparvar/nextjs-template'
                target='_blank'
              >
                <Button rounded size='large' variant='secondary'>
                  {t('Learn_More')}
                </Button>
              </a>
            </div>
          </section>
          <section className='bg-background-secondary py-20 max-lg:py-10'>
            <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
              <div className='text-center'>
                <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
                <p className='text-text-secondary max-lg:max-w-[500px]'>
                  {t(
                    'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
                  )}
                </p>
              </div>
              <div className='text-center'>
                <h2 className='mb-3 text-xl font-semibold'>{t('Versatile')}</h2>
                <p className='text-text-secondary max-lg:max-w-[500px]'>
                  {t(
                    'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
                  )}
                </p>
              </div>
              <div className='text-center'>
                <h2 className='mb-3 text-xl font-semibold'>{t('Performant')}</h2>
                <p className='text-text-secondary max-lg:max-w-[500px]'>
                  {t(
                    'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
                  )}
                </p>
              </div>
            </div>
          </section>
        </main> */
    <div className="flex min-h-full flex-1 flex-col justify-center _px-6 _py-12 _lg:px-8">
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <img
            src={slider}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center md:object-center"
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff6900] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-mono">La Plank des Gones</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                {t('home1')}
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0">
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <a
                  href="/carte"
                  className="text-center rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-secondary shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Voir la carte
                </a>
                <a
                  href="/reservation"
                  className="text-center rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Réserver une table
                </a>
                {/* <a href="/reservation" className="text-sm font-semibold leading-6 text-white-900">
                            Réserver <span aria-hidden="true">→</span>
                        </a> */}
              </div>
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>

      {/* <div className="container relative mx-auto  px-5 py-2 lg:px-32 hidden xl:block ">
        <div className="absolute bottom-20 right-36 z-50 w-96">

            <Calendar
                value={selectedDayHome}
                onChange={handleSelectedDay}
                disabledDays={disabledD} // here we pass them
                onDisabledDayError={handleDisabledSelect} // handle error
                colorPrimary="#1c2747" // added this
                shouldHighlightWeekends={false}
                calendarClassName="responsive-calendar" // added this
                locale={myCustomLocale} // custom locale object
                renderFooter={() => (
                    <div className="flex justify-center !text-3xl !pb-6">
                        <button type="button" onClick={() => navigate('/reservation')} className="rounded-md bg-orange-600 !px-3.5 !py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">
                            Je réserve
                        </button>
                    </div>
                )}
            />
        </div>
    </div> */}
      {/*                 <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white-900">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-white-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-white-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white-900 hover:bg-white-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
            <img
                src={slider}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
            />
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff6900] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white-600 ring-1 ring-white-900/10 hover:ring-white-900/20">
                        Announcing our next round of funding.{' '}
                        <a href="#" className="font-semibold text-orange-600">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white-900 sm:text-6xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white-600">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                        fugiat veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white-900">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    </div> */}

      <div className="container mx-auto  px-5 py-2 lg:px-32 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Découvrez</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Notre Cuisine</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Voici quelques exemples de nos plats</p>
        </div>
        <div className="-m-1 flex flex-wrap _md:-m-2 mt-8">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={burger} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={raclette} />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={fondue} />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={tartare}
                width={500}
                height={500}
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={quenelle} />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src={chevreChaud} />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  px-5 py-2 lg:px-32 lg:pt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-600">Découvrez</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Les Avis de nos clients</p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p>
         */}
        </div>
        <section className="font-barlow my-16 mx-0 max-w-6xl grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          <h1 className="sr-only">Testimonials</h1>
          <article className="px-8 pt-6 pb-8 rounded-lg bg-orange bg-background-quote bg-no-repeat text-white shadow-xl md:col-span-2">
            <div className="flex justify-start items-center mb-4">
              <span className="flex h-8 w-8 justify-center items-center rounded-full border-2 border-marine-600 bg-marine-600 mr-2">
                <span className="text-white-500">C</span>
              </span>
              <div>
                <h2 className="p-0 m-0 text-sm leading-tight">Camille Mauclaire</h2>
                {/* <p className="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p> */}
                <img src={stars} className=" h-4"></img>
              </div>
            </div>
            <p className="mb-10 md:mb-4 text-xl leading-6 font-semibold">De la carte des vins, aux planches de charcuteries / fromages et en passant par le limoncello, tout y est excellent.</p>
            <p className="text-sm leading-5 opacity-70">“ De passage à Lyon pour 3 jours, nous avons découvert ce petit resto incroyable. De la carte des vins, aux planches de charcuteries / fromages et en passant par le limoncello, tout y est excellent.
              Nous avons passé un très bon moment entre amis juste avant les vacances bien méritées pour les propriétaires de cette adresse.
              Des produits frais, des découpes finement tranchées, des saveurs incroyables, nous recommandons les yeux fermés. ”</p>
          </article>
          <article className="px-8 pt-6 pb-8 rounded-lg bg-gray-600 text-white shadow-xl lg:col-start-3">
            <div className="flex justify-start items-center mb-4">
              <span className="flex h-8 w-8 justify-center items-center rounded-full border-2 border-indigo-400 bg-indigo-400 mr-2">
                <span className="text-white-500">LV</span>
              </span>
              <div>
                <h2 className="p-0 m-0 text-sm leading-tight">Laurent Vivert</h2>
                {/* <p className="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p> */}
                <img src={stars} className=" h-4"></img>
              </div>
            </div>
            <p className="mb-4 text-xl leading-6 font-semibold">En bon lyonnais, vous y trouverez de bonne lyonnaiserie!</p>
            <p className="text-sm leading-5 opacity-70">“ Je suis venu me restaurer à midi pendant ma pause déjeuner.

              Le cadre est sympa, l'accueil très chaleureux.

              Les plats sont élaborés à base de produits frais.
              Le goût est au rendez-vous.
              En bon lyonnais, vous y trouverez de bonne lyonnaiserie!
              Les desserts sont maisons.

              Au plaisir de renouveler cette expérience culinaire ! ”</p>
          </article>
          <article className="px-8 pt-6 pb-8 rounded-lg bg-white text-gray-600 shadow-xl lg:row-start-2 lg:col-start-1">
            <div className="flex justify-start items-center mb-4">
              <span className="flex h-8 w-8 justify-center items-center rounded-full border-2 border-cement-500 bg-cement-500 mr-2">
                <span className="text-white-500">CV</span>
              </span>
              <div>
                <h2 className="p-0 m-0 text-sm leading-tight">Charles Vocanson</h2>
                {/* <p className="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p> */}
                <img src={stars} className=" h-4"></img>
              </div>
            </div>
            <p className="mb-4 text-xl leading-6 font-semibold">la fondue était exceptionnellement bonne!!!</p>
            <p className="text-sm leading-5 opacity-70">“ Endroit chaleureux où nous avons été unanimes pour dire que la fondue était exceptionnellement bonne!!!
              Les vins ne sont pas en reste et cerise sur le gâteau, le service est au top.
              On reviendra pour goûter les côtes de bœuf bien appétissantes. ”</p>
          </article>
          <article className="px-8 pt-6 pb-8 rounded-lg bg-gray-900 text-white shadow-xl md:col-span-2 lg:col-start-2">
            <div className="flex justify-start items-center mb-4">
              <span className="flex h-8 w-8 justify-center items-center rounded-full border-2 border-indigo-500 bg-indigo-500 mr-2">
                <span className="text-white-500">M</span>
              </span>
              <div>
                <h2 className="p-0 m-0 text-sm leading-tight">Melanie Carson</h2>
                {/* <p className="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p> */}
                <img src={stars} className=" h-4"></img>
              </div>
            </div>
            <p className="mb-4 text-xl leading-6 font-semibold">l'os à moelle est succulent 🤤 et alors la côte de bœuf elle est à tomber.</p>
            <p className="text-sm leading-5 opacity-70">“ Allez-y les yeux fermés ! On a passé une super soirée ! Un couple accueillant, passionné, authentique, un lieu sympa où on se sent bien et où on mange comme des rois (produit français, local et saisonnier, avec des propositions de plats franchement intéressantes : l'os à moelle est succulent 🤤 et alors la côte de bœuf elle est à tomber !), bref une valeur sûre si vous cherchez une bonne adresse ! 😉
              PS : petite mention spéciale pour les patrons, un duo de choc avec qui on a passé un super moment, on reviendra ça c'est certain !
              Bonne continuation, changez rien !! ”</p>
          </article>
          <article className="px-8 pt-6 pb-8 rounded-lg bg-white text-gray-600 shadow-xl md:row-start-2 md:col-span-3 lg:row-start-1 lg:col-start-4 lg:col-span-1 lg:row-span-2">
            <div className="flex justify-start items-center mb-4">
              <span className="flex h-8 w-8 justify-center items-center rounded-full border-2 border-orange-700 bg-orange-700 mr-2">
                <span className="text-white-500">A</span>
              </span>
              <div>
                <h2 className="p-0 m-0 text-sm leading-tight">Alexia Corsain</h2>
                {/* <p className="p-0 m-0 text-xs leading-tight opacity-50">Verified Graduate</p> */}
                <img src={stars} className=" h-4"></img>
              </div>
            </div>
            <p className="mb-4 text-xl leading-6 font-semibold">On se sent bien à la plank des gones et on a envie de vite revenir (pour tester la fondue notamment 🙂)</p>
            <p className="text-sm leading-5 opacity-70">“Merci aux deux adorables propriétaires de la Plank des gones ! Nous avons passé une super soirée à l'étage privatisé pour les 35 ans de mon mari hier soir. La qualité des planches de charcuterie et fromage est vraiment exceptionnelle et généreuse ! Excellent pâté croute et tapenade ! On se sent bien à la plank des gones et on a envie de vite revenir (pour tester la fondue notamment 🙂) Encore merci pour vos attentions et à bientôt ! Alexia ”</p>
          </article>
        </section>
      </div>

      {/*                 <div>
        <h1 className="text-3xl font-sans underline bg-marine">
            Hello world!
        </h1>
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload test {test1 === true ? 'trouve' : 'pas trouvé'}.
                </p>


                {test.map((item, idx) => {
                    return (
                        <div key={idx} id={idx}>
                            {item.id}

                        </div>

                    )
                })}
                *
                <button type="submit" className="flex _w-full justify-center rounded-md bg-marine px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" onClick={handleButton}>Handle button</button>
                <div className="container">
                    <div className="row"></div>
                </div>
            </header>
        </div>

    </div> */}

    </div>
  )
}
