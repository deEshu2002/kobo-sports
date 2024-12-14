import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight, CreditCard, Database } from 'lucide-react';
import { Terminal } from './terminal';
import { Input } from '@/components/ui/input';
import Link from 'next/link';


export default function HomePage() {
  return (
    <main className='bg-background'>
      <div className='grid gap-8 mx-auto max-w-screen-xl'>
        <section className="h-96 bg-red-200">
        </section>

        <section className="bg-background grid grid-cols-3 gap-6">
          <div className="h-60 bg-red-200"></div>
          <div className="h-60 bg-red-200"></div>
          <div className="h-60 bg-red-200"></div>
        </section>

      <section className="px-6">
        <h2 className="text-lg font-semibold ">
          Categories
        </h2>

        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <div className="p-4">
              <div className='border rounded-full'>
                <div className="flex aspect-square items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0'/>
    </Carousel>

      </section>

      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Best Sellers
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>

        <section className="h-60 bg-red-200">
        </section>

      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Sports Gears
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>
      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Sports Gears
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>

      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Sports Gears
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>

      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Sports Gears
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>
      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Sports Gears
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>
      <section className="px-6">
        <div className='w-full flex items-center justify-between'>
          <h2 className="text-lg font-semibold ">
            Sports Gears
          </h2>
          <Link href="#" className="underline underline-offset-4 font-semibold">See all</Link>
        </div>
        {/* <p className="mt-2 text-muted-foreground">Explore different range of products as categories</p> */}
        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-screen-xl mt-6 group/items"
        >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/6">
            <a className="p-3 group/item relative block overflow-hidden" href='#' >

  <button
    className="invisible group-hover/item:visible absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

                <div className="flex aspect-square overflow-hidden items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1628202926206-c63a34b1618f?q=80&w=2574&auto=format&fit=crop"
                    alt=""
                    className="size-fit object-cover transition duration-500 group-hover/item:scale-105 sm:h-72"
                  />
                </div>

  <div className="relative bg-white">
    <h3 className="mt-1.5 text-sm font-medium text-gray-900">Wireless Headphones</h3>
    <p className="text-sm font-bold">
      $49.99
      <span className="text-muted-foreground line-through ml-1">$80</span>
    </p>
    </div>
            </a>

          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-0'/>
      <CarouselNext className='right-0 opacity-0 transition-opacity group-hover/items:opacity-100'/>
    </Carousel>

      </section>

      </div>

      {/* Newsletter */}
  <section className="bg-muted w-full mt-9">
  <div className="mx-auto px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-2xl font-extrabold sm:text-5xl">
        Join Our Newsletter
      </h1>

      <p className="mt-4 sm:text-base/relaxed">
        Lorem ipsum dolor sit amet consectetur.
        <Link href={"/blog-posts"} className='ml-1 inline-flex items-center bg-muted hover:underline underline-offset-4'>
          Explore
          <ArrowRight className="size-4 ml-1"/>
        </Link>
 
      </p>

  
                        <form className="mt-6 relative flex-grow mx-4">
                          <svg className='size-5 left-0 top-3.5 absolute' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></g></svg>

                            <Input name='email' type="text" className="pl-8 pr-20 h-12 rounded-none shadow-none border-0 border-b-2 focus-visible:ring-0 focus-visible:border-foreground" placeholder="Email address"/>
                            <Button aria-label="clear search bar" variant={"ghost"} type="submit" className=" px-3 hover:bg-muted absolute right-0 bottom-1.5 font-semibold">
                              Signup
                                </Button>
                       </form>
    </div>
  </div>
</section>
    </main>
  );
}
