import React from "react";
import { useEffect } from "react";

function Main(props) {
  useEffect(() => {
    // Update the document body class when class_theme changes
    document.body.className = props.class_theme;
  }, [props.class_theme]);
  return (
    <div>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div class="bg-card_bg relative px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <div class="divide-y divide-gray-300/50">
              <div class="text-card_text space-y-6 py-8 text-base leading-7">
                <p>
                  An advanced online playground for Tailwind CSS, including
                  support for things like:
                </p>
                <ul class="space-y-4">
                  <li class="flex items-center">
                    <svg
                      class="stroke-card_bg h-6 w-6 flex-none fill-card_text stroke-2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <circle cx="12" cy="12" r="11" />
                      <path
                        d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                        fill="none"
                      />
                    </svg>
                    <p class="ml-4">Code completion with instant preview</p>
                  </li>
                </ul>
                <p>
                  Perfect for learning how the framework works, prototyping a
                  new idea, or creating a demo to share online.
                </p>
              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-card_text">Want to dig deeper into Tailwind?</p>
                <p>
                  <a
                    href="https://tailwindcss.com/docs"
                    class="text-card_text hover:text-card_text/5"
                  >
                    Read the docs &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
