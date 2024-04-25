"use client"

import { ReactElement } from "react";
import { useForm, ValidationError } from "@formspree/react"

const Contacts = (): ReactElement => {
  const [state, handleSubmit] = useForm("moqzorbr");

  if (state.succeeded) {
    return (
      <div className="pt-12 md:pt-28 mb-16 md:mb-32">
        <p className="mx-auto w-fit text-xl md:text-2xl border-solid border-l-8 pl-2 border-yellow-500" >
          Děkuji za zprávu. Brzy se ozvu.
        </p>
      </div> 
    )

  }

  return (
    <section id="contacts" className="pt-12 md:mt-24 mb-16 md:mb-32 max-w-[720px] mx-auto" >
      <h2 className="w-fit mx-auto text-2xl md:text-4xl font-bold mb-3 md:mb-9 border-solid border-l-8 pl-2 border-yellow-500">
        Kontakt
      </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2 text-black">
          <div className="flex flex-row gap-2 md:gap-4">
            <input type='text' name="name" placeholder="Jméno" required className="placeholder:italic placeholder:text-slate-400 block
             bg-neutral-50 w-full rounded-md py-2 pl-3 pr-3 shadow-sm border-2 border-gray-300
             focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm" 
            />
            <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
            />
            <input type='email' name="email" placeholder="E-mail" required className="placeholder:italic placeholder:text-slate-400 block
             bg-neutral-50 w-full rounded-md py-2 pl-3 pr-3 shadow-sm border-2 border-gray-300
             focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm" 
            />
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
          </div>
          <div>
            <textarea name="message" placeholder="Zpráva" required className="placeholder:italic placeholder:text-slate-400 block
            bg-neutral-50 w-full rounded-md h-32 resize-none py-2 pl-3 pr-3 shadow-sm border-2 border-gray-300
              focus:outline-none focus:border-yellow-500 focus:ring-yellow-500 focus:ring-1 sm:text-sm md:mt-3" 
            >
            </textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
          </div>
          <button type="submit"  className="mt-4 md:mt-6 m px-6 py-3 bg-neutral-900 text-neutral-100 rounded-lg border border-neutral-50
            hover:border-yellow-500">
            Odeslat
          </button>
        </form>
    </section>
  )
}

export default Contacts