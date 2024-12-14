'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github, Loader2 } from 'lucide-react';
import {Checkbox} from '@/components/ui/checkbox'
import { signIn, signUp } from './actions';
import { ActionState } from '@/lib/auth/middleware';
import Image from 'next/image';

export function Login({ mode = 'signin' }: { mode?: 'signin' | 'signup' }) {
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect');
  const priceId = searchParams.get('priceId');
  const inviteId = searchParams.get('inviteId');
  const [state, formAction, pending] = useActionState<ActionState, FormData>(
    mode === 'signin' ? signIn : signUp,
    { error: '' }
  );

  return (
    <section className='grid items-center h-screen lg:grid-cols-2 relative'>
      {/* Banner Image */}
      <Image className='hidden h-screen w-full object-cover lg:block' alt='Login hero image' width={0} height={0} src={"http://source.unsplash.com/hq4O36SzdU8"}/>

        <div className="absolute hidden h-full flex-col p-10 lg:flex">
          <Link href={"/"}  className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc
          </Link>
        </div>
      
      <div className="my-auto text-left p-8 sm:p-10 md:p-20 xl:px-32 xl:py-20">
        <h3 className='block mb-6 text-3xl leading-snug font-semibold tracking-normal antialiased'>
          {mode === 'signin'
            ? 'Sign in '
            : 'Sign up'}
        </h3>
        <p className='block mb-10 text-base font-normal leading-relaxed antialiased'>
            {
              mode === 'signup'
                ? 'Already have an account?'
                : 'Don\'t have an acount yet?'
            }
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                redirect ? `?redirect=${redirect}` : ''
              }${priceId ? `&priceId=${priceId}` : ''}`}
              className="font-bold ml-1 hover:underline underline-offset-4"
            >
              {mode === 'signin'
                ? 'Sign up'
                : 'Sign in'}
            </Link>
        </p>

        <form className="grid gap-8 text-left " action={formAction}>
          <input type="hidden" name="redirect" value={redirect || ''} />
          <input type="hidden" name="priceId" value={priceId || ''} />
          <input type="hidden" name="inviteId" value={inviteId || ''} />

          {
            mode === 'signup'
                ? <>
          <div className="relative">
            <Label
              htmlFor="username"
              className="sr-only"
            >
              Your name
            </Label>
              <input type="text" id="username" name='username' autoComplete="name" required
               maxLength={50}
                className="block py-2.5 px-0 min-w-[200px] w-full text-sm placeholder:text-muted-foreground bg-transparent border-0 border-b-2 border-input appearance-none  focus-visible:outline-none focus-visible:ring-0 focus:border-ring"
                 placeholder="Your Name" />
          </div>

          <div className="relative">
            <Label
              htmlFor="email"
              className="sr-only"
            >
              Email
            </Label>
              <input type="email" id="email" name='email' autoComplete="email" required
               maxLength={50}
                className="block py-2.5 px-0 min-w-[200px] w-full text-sm placeholder:text-muted-foreground bg-transparent border-0 border-b-2 border-input appearance-none  focus-visible:outline-none focus-visible:ring-0 focus:border-ring"
                 placeholder="Email" />
          </div>


          <div className="relative">
            <Label
              htmlFor="number"
              className="sr-only"
            >
              Mobile number
            </Label>
              <input type="tel" id="number" name='number' autoComplete='tel' required
               maxLength={50}
                className="block py-2.5 px-0 min-w-[200px] w-full text-sm placeholder:text-muted-foreground bg-transparent border-0 border-b-2 border-input appearance-none  focus-visible:outline-none focus-visible:ring-0 focus:border-ring"
                 placeholder="Mobile number*" />
          </div>
                </>
                : <>
          <div className="relative">
            <Label
              htmlFor="identifier"
              className="sr-only"
            >
              Mobile number
            </Label>
              <input type="text" id="identifier" name='identifier' autoComplete='tel' required
                maxLength={50}
                className="block py-2.5 px-0 min-w-[200px] w-full text-sm placeholder:text-muted-foreground bg-transparent border-0 border-b-2 border-input appearance-none  focus-visible:outline-none focus-visible:ring-0 focus:border-ring"
                placeholder="Your Email or Mobile number" 
                pattern="^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$"
                 />
          </div>
 
                </>
          }


          <div className="relative">
            <Label
              htmlFor="password"
              className="sr-only"
            >
              Password
            </Label>
              <input type="password" id="password" name='password' autoComplete={
                  mode === 'signin' ? 'current-password' : 'new-password'
              } required
               maxLength={50}
                className="block py-2.5 px-0 min-w-[200px] w-full text-sm placeholder:text-muted-foreground bg-transparent border-0 border-b-2 border-input appearance-none  focus-visible:outline-none focus-visible:ring-0 focus:border-ring" 
                placeholder="Password" />
          </div>

          {
            mode === 'signup'
                ? <>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms"  className='border-muted-foreground shadow-none'/>
                    <label
                      htmlFor="terms"
                      className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree with <Link href={'/sign-up'} className='font-bold text-foreground hover:underline underline-offset-4'>Policy Privacy</Link> and <Link href={'/sign-up'} className='font-bold text-foreground hover:underline underline-offset-4'>Terms of use</Link>
                    </label>
                  </div>
                </>
                : <>
                  <div className='flex wrap items-center justify-between gap-2'>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" className='border-muted-foreground shadow-none'/>
                      <label
                        htmlFor="remember"
                        className="text-sm text-muted-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Remember me
                      </label>
                    </div>
                    
                    <Link href={"/forgot-password"} className='block text-sm font-semibold leading-relaxed antialiased hover:underline'>Forgot Password?</Link>
                  </div>
                </>
            
          }

          {state?.error && (
            <div className="text-red-500 text-sm">{state.error}</div>
          )}

          <Button className='h-14 text-base' disabled={pending} type='submit'>
              {pending ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Loading...
                </>
              ) : mode === 'signin' ? (
                'Signin'
              ) : (
                'Signup'
              )}
          </Button>

{/* 
          <div className="mt-6">
            <Link
              href={`${mode === 'signin' ? '/sign-up' : '/sign-in'}${
                redirect ? `?redirect=${redirect}` : ''
              }${priceId ? `&priceId=${priceId}` : ''}`}
              className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              {mode === 'signin'
                ? 'Create an account'
                : 'Sign in to existing account'}
            </Link>
          </div> */}


          <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" disabled={false}>
<svg xmlns="http://www.w3.org/2000/svg"  className='mr-1.5' viewBox="1 0 48 48" width="20px" height="20px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              
              {/* {isLoading ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Icons.gitHub className="mr-2 h-4 w-4" />
              )}{" "} */}
              Google
            </Button>

          <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>

       </form>

      </div>

    </section>
  );
}
