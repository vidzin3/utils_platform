<script setup>
import CardListView from "@/components/CardListView.vue";

const contents = [
  {
    title: "{ } / _ Utils Platform",
    description:
      "This website i make it up for note or store something like [ code, documents, file, list, detail, image, event, structure, architecture, design, ... ].",
    is_content: false,
    content: "",
    raw_html: "",
  },
  // {
  //   title: "Planning budget",
  //   description: "",
  //   is_content: true,
  //   content: `
  //     1 - Get 400$ salary bonus add to saving money up to 1000$

  //     2 - month 7/8 birthday sister and brother
  //       Gifts:
  //         - sister: Keyboard (budget: 20-40$) 
  //         - brother: Watch (budget: 10-20$)

  //     3 - salary month-5: 200$
  //       saving: 100$ as possible, if not (saving = saving - 50$) { return spending += 50$}
  //       spending: 100$ as possible, will increase 50$ (150$/month)
        
  //     4 - Buy new watch (smart watch or Casio watch)
  //       Casio: [ f91w, a158, a168 ] (budget: 10-15$)
  //       Smart watch: [
  //         (cmf watch pro 2, 60-70$),
  //         (amafit, 50-100$),
  //         (apple watch, 50-100$)
  //       ]
  //   `,
  //   raw_html: "",
  // },
  {
    title: "Planning budget",
    description: "",
    is_content: false,
    content: ``,
    raw_html: `
      <div class="max-w-4xl mx-auto space-y-6">
        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center font-bold">
              1
            </div>
            <h2 class="text-xl font-semibold">Savings Goal</h2>
          </div>
          <div class="bg-zinc-800/60 rounded-xl p-4 border border-zinc-700">
            <div class="flex justify-between items-center">
              <p class="text-zinc-300">
                Get <span class="text-green-400 font-semibold">$400</span> salary bonus
                and add it to savings until reaching
                <span class="text-cyan-400 font-semibold">$1000</span>.
              </p>
              <div class="flex g-2 items-center px-2 border border-green-500 bg-green-400/15 rounded-full">
                <div class="rounded-full w-[10px] h-[10px] mr-2 bg-green-500"></div>
                <span>done</span>
              </div>
            </div>
            <div class="mt-4">
              <div class="flex justify-between text-sm mb-2 text-zinc-400">
                <span>Progress</span>
                <span>$1100 / $1000</span>
              </div>
              <div class="w-full h-3 bg-zinc-700 rounded-full overflow-hidden relative">
                <div class="absolute h-full w-[100%] bg-gradient-to-r from-green-400 to-red-400 rounded-full"></div>
                <div class="absolute h-full w-[100%] bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold">
              2
            </div>
            <h2 class="text-xl font-semibold">Birthday Gifts (Month 7/8)</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg">🎹 Sister</h3>
                <span class="text-sm bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                  $20 - $40
                </span>
              </div>
              <p class="mt-3 text-zinc-300">
                Buy a keyboard as a birthday gift.
              </p>
            </div>

            <div class="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
              <div class="flex items-center justify-between">
                <h3 class="font-semibold text-lg">⌚ Brother</h3>
                <span class="text-sm bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">
                  $10 - $20
                </span>
              </div>
              <p class="mt-3 text-zinc-300">
                Buy a watch as a birthday gift.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center font-bold">
              3
            </div>
            <h2 class="text-xl font-semibold">Monthly Budget Plan</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-5">

            <div class="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
              <p class="text-zinc-400 text-sm mb-2">Monthly Salary</p>
              <h3 class="text-3xl font-bold text-green-400">$200</h3>
            </div>

            <div class="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
              <p class="text-zinc-400 text-sm mb-2">Savings Target</p>

              <div class="space-y-2">
                <div class="flex justify-between">
                  <span>Preferred</span>
                  <span class="text-cyan-400 font-semibold">$100</span>
                </div>

                <div class="flex justify-between">
                  <span>Minimum</span>
                  <span class="text-yellow-400 font-semibold">$50</span>
                </div>
              </div>
            </div>

          </div>

          <div class="mt-5 bg-zinc-800 rounded-xl p-5 border border-zinc-700">
            <h4 class="font-semibold mb-3 text-lg">Spending Rules</h4>

            <div class="space-y-2 text-zinc-300">
              <div class="flex justify-between">
                <span>Normal Spending</span>
                <span>$100/month</span>
              </div>

              <div class="flex justify-between">
                <span>Max Spending</span>
                <span class="text-orange-400">$150/month</span>
              </div>

              <div class="mt-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700 text-sm text-zinc-400">
                If savings cannot reach <span class="text-cyan-400">$100</span>,
                reduce savings by <span class="text-yellow-400">$50</span>
                and increase spending budget by <span class="text-orange-400">$50</span>.
              </div>
            </div>
          </div>
        </div>

        <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg">
          <div class="flex items-center gap-3 mb-5">
            <div class="w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
              4
            </div>
            <h2 class="text-xl font-semibold">New Watch Wishlist</h2>
          </div>

          <div class="grid lg:grid-cols-2 gap-5">
            <div class="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-lg">⌚ Collected Watches</h3>
                <span class="text-sm bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                  $10 - $15
                </span>
              </div>

              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200">F91W (Selected)</span>
                <span class="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200">Poedagar (Selected)</span>
                <span class="px-3 py-2 rounded-lg bg-zinc-700 text-zinc-200">Casio MTP-B145D-2A1 (Selected)</span>
              </div>
            </div>

            <div class="bg-zinc-800 rounded-xl p-5 border border-zinc-700">
              <div class="flex items-center justify-between mb-4">
                <h3 class="font-semibold text-lg">📱 Smart Watches</h3>
                <span class="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                  $50 - $100
                </span>
              </div>

              <div class="space-y-3">

                <div class="flex items-center justify-between bg-zinc-700/60 rounded-lg p-3">
                  <span>CMF Watch Pro 2</span>
                  <span class="text-cyan-300">$60 - $70</span>
                </div>

                <div class="flex items-center justify-between bg-zinc-700/60 rounded-lg p-3">
                  <span>Amazfit</span>
                  <span class="text-cyan-300">$50 - $100</span>
                </div>

                <div class="flex items-center justify-between bg-zinc-700/60 rounded-lg p-3">
                  <span>Apple Watch (S3,S4,S5,S6)</span>
                  <span class="text-cyan-300">$50 - $100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
  {
    title: "C++ API Server",
    description:
      "Make C++ http server to request and response as api web service. it may write hard then php/python.",
    is_content: true,
    content: `#include "crow.h"
              int main() {
                crow::SimpleApp app;

                // Define a GET route
                CROW_ROUTE(app, "/")([](){
                    return "Hello, C++ Backend!";
                });

                // Define a JSON response
                CROW_ROUTE(app, "/json")([](){
                    crow::json::wvalue x;
                    x["message"] = "Success";
                    x["status"] = 200;
                    return x;
                });

                app.port(18080).multithreaded().run();
              }`,
    raw_html: "",
  },
  {
    title: "UI framework collection for Vue 3",
    description: "",
    is_content: false,
    content: ``,
    raw_html: `
      <div class="flex items-center gap-3 mb-2">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="https://cdn.vuetifyjs.com/docs/images/logos/v.svg">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Vuetify</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">A complete design system that works.</div>
        </div>
      </div>
      <div class="flex items-center gap-3 mb-2">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAb1BMVEX///+4ubkAAAYcICQABw+en6C8vb5qbG8vMjY2OT1zdXjHyMnp6ekHEBYNExgZHSEUGB2Ji4zz8/MVGh+mpqfQ0dFHSk1VWFrW19iys7QhJirBwcKqq6xPUlRfYmSTlJYAAAsAAAAmKi+Bg4Q+QkWgLj4NAAAA10lEQVR4AZ3SBXLEMAxAUWVNQcsQZrr/GTvLrE77hwwvHDgWHNglLgBAqjCKE7j2CtI404jaWPcFWIPHEXrxEeRFac5DU9UfQcPwPMS2+wh6fR1n8n9nqAdzHuqx/vwU0/UEPXwAs4B0WI7vYYndHTTL4djM+XJ6kyNbVQJ/LxUqWib4lkuiRftZwJdq6831a37cHzUyArjNI6OAjDyjgNsyRoKi9DToGNIg4IwGMvsFdC3SoBg8DZzVNIBu9zRwFpEEkMYGSQBu0oYAx+qd/GGOBduwvoEf0Z0O6TBr0qwAAAAASUVORK5CYII=">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Radix UI</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">An open source component library optimized for fast development, easy maintenance, and accessibility.</div>
        </div>
      </div>
      <div class="flex items-center gap-3 mb-2">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Tailwind CSS</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">Build your next idea even faster. Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</div>
        </div>
      </div>
      <div class="flex items-center gap-3 mb-2">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAgCAMAAAA7dZg3AAAAh1BMVEX///+u2ppYugy03KCRznJSuABfvCF+x1hfvSFnvzH7/PpxwkJrwDjz+fCg1IfO6ML4/PZcuxlLtgCs2ZeazYFMqACBsWmCyF5YrR9AkQBup05MlxdHlQdcnjRhvSXq8ebf6toyjQDU483H275jsjO807G/4q5npEV0qlh3xEyMxm+Jy2eW0Hn4mdDpAAAA0klEQVR4AXXSRYLDMAwFUAWsMDPzYO9/vobckP23zygJ2BFEiSMyQcI2hSCqGgN0Q8SZTJhj2c6ZJIKUXE/0hRMFIiVX9RBJyCAXZ0E1ip+ULIJqmuU30kDFjYqy0m9UUyrKwuLQbFnDoTlZ+yG8UdH1PJpteNCYUZukK4lfU7dblm7/qSlJMFB7EvQdl6DNuARNWfII3KLkEehVSUm9EcB3tpGoPAh+ooXEX6B0Go4/gkgSYBHYvi8DpdusOg5QWk5mRJ2F/LMEBILkBewERGDDG5X+GkkkTngAAAAAAElFTkSuQmCC">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Naive UI 幼稚的</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">A Vue 3 Component Library Fairly Complete, Theme Customizable, Uses TypeScript, Fast Kinda Interesting.</div>
        </div>
      </div>
      <div class="flex items-center gap-3 mb-2">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEWRC/6ICvuHCvuCCvp9Cvh5CfeFAPt7APh2APd1Cfaqa/fo2vzr3fzh0fqgZ/SfU/f////SvPPDo/K9nvHMtfOQTvHPsfhnB/LGq/XfzflzCfXcyfiROfiWR/ZqB/PWwvf48P27j/V5DOeDLOuHOeure/SuiPLw5fuQOfF4A+2VWe+IJu/68/2da+tqAO92JOr++f5YAOicZ++IRezCo/ftjRgzAAABbUlEQVR4AX3S1XaEMBRA0UFiWLGSwQLj7vP/39ab4LXzulc8sz5N03TIkJkQQmhk0NTQ1AZEA2IZUdEmaawxy3Yce5Tr0Q7xhx+Eo6Io9j8pYg0mNsOwFDFhWjmCcXdOWYcp1jUdy5rdZPmAcU50HRclZFKJokoEY5nCPMaaTmxfljA4Bk0qwTKJmlkvsK6TtF6u1oG/oYDbHW8QF/6+wYyQgx9KXPsrKhGbro10hZzSjX8ERNxNOc1muKzrEww0aH5OU+d8uYIxetvt1gJwdy6wbgDWURTad08en65qB1DDh9wmCndXll3d3VXdQvUQgBo+wYYkyg2J5H6FgWv/JhRqaLcgzUiEvNoGFFuHN6iTIFF4lzlrCjiPFcpDzANA8vmEXjCOZSIOm5GAYUXhvpuHRhJ5EPUj36lQoBIQzzs0cHmP35OS+0u0aJBjMC0+cjl+BgbKsiy7tnFISOOzyUdVu8kykAb/sQbHNsYvjA0vKuhfMkMAAAAASUVORK5CYII=">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Bootstrap</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">Build fast, responsive sites with Bootstrap Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAIAAAD9b0jDAAAAUElEQVR4Ae3RAQbAQAxE0QXYM4e5Ro7zrxQUgJRCoFCiaPMO8A2zxnhKErAamVlmuvsUf1vcewPNG49LczEiPlmU1FUswO3XVewC1NcvG+MEvqR7x4wP3WYAAAAASUVORK5CYII=">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Shadcn UI</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">The Foundation for your Design System A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.</div>
        </div>
      </div>
    `,
  },
  {
    title: "Laravel 12 Setup Auth, Middleware",
    description: "",
    is_content: true,
    content: `Laravel 12
              - auth
                - provider injection
                  + RouteServiceProvider 	: add configureRatelimiting -> function configureRatelimiting
                        : add route->(Route::middleware()->group()->prefix())
                  + Register provider -> app.php
                  
                  - run command: php artisan vendor:publish --provider="package" // for publish provider service
                - config
                  + auth.php
                    - 'guard' => 'api' => 'provider' => 'user' and 'driver' => 'jwt'
                    - 'provider' => 'user' => 'driver' => eloquent
                  + app.php
                  + passport.php // for passport
                    - boot(): // option passport
                  + jwt.php // for jwt
                    - boot(): 'ttl' => 60, // minutes
                        'refresh_ttl' => 20160, // 14 days
                        'blacklist_enabled' => true,
                  - run command: php artisan config:passport or jwt // for enable config publish
                - Kernel/Bootstrap
                  - Register Middleware Route with protected auth => authentication
                    - auth : authentication
                      + authentication: redirectTo: expectedJson => route('login')
                  - Register Middleware Group
                    - api => protected gateways(\Illuminate\Routing\Middleware\SubstituteBindings::class,)
                    - web => protected gateways(\Illuminate\Routing\Middleware\SubstituteBindings::class,)

                  - for jwt without passport or santum
                    - alias(['jwt.auth' => 'jwt package/[Authenticate or RefreshToken]']) // for Laravel 11,12
                - model
                  + User: extends Authenticateble and implements JWTSubject(if Jwt without passport or santum )
                    - use: HasApiTokens // for Laravel passport, remove it if jwt
                    - function : getJWTIdentifier() => getKey();
                        : getJWTCustomClaims() => [];`,
    raw_html: "",
  },
  {
    title: "Laravel 10 Decrypt Request Methods",
    description:
      "Decrypt Request Payload from client-side that Encrypt Security for sensitive data.",
    is_content: true,
    content: `// php artisan make:middleware DecryptRequest 
      <?php

      namespace App\Http\Middleware;

      use Closure;
      use Illuminate\Http\Request;

      class DecryptRequest
      {
        public function handle(Request $request, Closure $next)
        {
          if ($request->has('payload')) {
            try {
              $encrypted = $request->input('payload');

              $key = env('CRYPTO_KEY');
              $iv = env('CRYPTO_IV');

              $decrypted = openssl_decrypt(
                base64_decode($encrypted),
                'AES-256-CBC',
                $key,
                OPENSSL_RAW_DATA,
                $iv
              );

              $data = json_decode($decrypted, true);

              if (is_array($data)) {
                // Replace request input globally
                $request->merge($data);
              }
            } catch (\Exception $e) {
              return response()->json(['error' => 'Invalid encrypted payload'], 400);
            }
          }

          return $next($request);
        }
      }
      
      // Use Middleware for route gateway
      protected $middleware = [
        // other middleware...
        // injected middleware DecryptRequest::class
      ];

      // controller 
      public function Controller(Request $request)
      {
        // just use request normally because $request is already decrypt in middleware
      }`,
    raw_html: "",
  },
  {
    title: "Version of System DEF Pursat",
    description: "",
    is_content: true,
    content: `
    1.0.0: Initial project System
    1.1.0: Restructure project (rebuild whole system)
    1.2.0: Update system features
    2.0.0: System finished and released
    2.0.2: Update revenue and finance flow
    2.0.3: Update feature approved
    2.0.3.1: Fix save transaction error when network interrupted
    2.0.3.2: Update search and filter on list letter (in,out)
    2.0.4: Update users security
    2.0.4.1: Add encryption user data
    2.0.5: Add agreement feature
    2.0.6: Update workplan feature
    2.0.7: Changed approved action on list letter
    2.0.8: Update Letter (short hand send transaction)
            selected user in list and send as send by
            clear by form by change tab working flow
            fix transaction controller and auto approved when send to boss
    2.0.9: Update notifications
            ui design update
            data reduced loaded
            recreate router when route path changed
            fix navigation notification link
    2.1.0: Update Letter Report
            fix report letter invalid date in end date not end in times
            fix UI report event
            fix calendar event status
            add no data available to report table
    2.1.1: Update Event
            add Card when hover on event forward
            fix formatting datetime
            add direct to event show in card event by month dashboard
            change title employee by position report
    2.1.2: Update all Report
            fix responsive template
            fix width cell in each table report
            fix not border print on pdf export
    2.1.3: Update menu layout
            add option layout for mobile breakpoint
            alt report workplan text when work not done
            add office filter to list all letter
            list letter by sending(to) but if other employees are in same office also can view too.
    2.1.4: Update report exported
            fix font excel from khmer mef1,2 to (khmer os moul, siem reap)
            auto adjusting cell height when text wrapping
            fix broken cell width
            update letter procurement export excel
    2.1.5: Update Form fix transaction
            add descript detail of fix transaction
            add backup database function
    2.1.6: Update User
            add disable user feature
            add retrieved all users information
    2.1.7: Update Event report
	          add location field to event report
    2.1.8: Update letter out
            improvement performance load data ref letter in
            fix bugs
    2.1.9: Update Send letter Transaction
            fix calculated stage user by position with permission to find by user stage model
            fix update (fix transaction) in show letter do not to force refetch api
            fix bugs `,
    raw_html: "",
  },
  // {
  //   title: "Planning Finishing System DEF",
  //   description: "",
  //   is_content: true,
  //   content: ``,
  //   raw_html: ""
  // },
  {
    title: "BeforeUnmounted by vanilla javascript",
    description: "",
    is_content: true,
    content: `
    1. Manual Cleanup Method
    When removing a component/element, call a cleanup function first to remove event listeners or clear timers.
    function cleanup() {
      window.removeEventListener('resize', handleResize);
      clearInterval(timerId);
      console.log('Component cleaned up');
    }
    // When you need to remove the component
    function destroyComponent(element) {
      cleanup(); // Perform cleanup before removal
      element.remove();
    }
      
    2. Using MutationObserver
    You can observe the parent element to detect when a child is removed from the DOM, allowing you to run cleanup logic automatically.
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
          if (node.id === 'my-component') {
            console.log('Component removed, running cleanup...');
            // Perform cleanup here
            observer.disconnect(); // Stop observing if necessary
          }
        });
      });
    });
    // Observe the parent
    observer.observe(document.getElementById('parent'), { childList: true });
    
    3. Page Unload EventIf the "unmount" is for the entire page, use beforeunload.
    window.addEventListener('beforeunload', (event) => {
      // Perform final cleanup (limited actions possible)
      event.preventDefault();
      event.returnValue = '';
    });`,
    raw_html: "",
  },
  {
    title:
      "How to detect a click outside of an element with vanilla JavaScript",
    description:
      "A simple way to detect a click outside of an element with vanilla JavaScript",
    is_content: true,
    content: `
    index.html
    <button>Toggle box</button>

    <div class="box">
      <form action="">
        <input type="text">
        <button type="button">Search</button>
      </form>
    </div>
    
    script.js
    // Example
    const button = document.querySelector('button')
    const box = document.querySelector('.box');

    const toggle = event => {
      event.stopPropagation(); // to targeted the main element that clicked! like click on child but in parent el
      
      if (!event.target.closest('.box')) {  <--- <button type="button">Search</button>
        console.log('Click outside');

        box.classList.toggle('active');

        box.classList.contains('active')
          ? document.addEventListener('click', toggle)
          : document.removeEventListener('click', toggle);

      } else { <--- <button>Toggle box</button>
        console.log('Click inside'); 
      }
    }

    button.addEventListener('click', toggle);
    
    style.css
    .box {
      position: absolute;
      display: none;
      margin-top: 8px;
      padding: 20px;
      background: lightgray;
      
      &.active {
        display: block;
      }
    }`,
    raw_html: "",
  },
  {
    title: "How to create link to download excels",
    description: "",
    is_content: true,
    content: `
      format header content
      {
        "Content-Type":"application/vnd.ms-excel", // excel accepted header content type
        responseType:"blob"
      }
      // it accepted header if it multiple file, excel content, word, pdf
      // and responseType must be blob

      + create Url data
      let fileUrl = window.URL.createObjectURL() // generate URL by blob
                      new Blob([<data response>]) // read raw data and convert into a readableStream (byte data)
      - combine blob in to createObjectURL(new Blob([<data response>]));

      + after that we need to create element to trigger download
      let fileLink = document.createElement('a')
      fileLink.href = fileUrl
      fileLink.setAttribute('download', 'title.xlsx');
      
      add element to body
      document.body.appendChild(fileLink)
      fileLink.click(); // on click auto
      
      then remove element from body
      document.body.removeChild(fileLink)
      window.URL.revokeObjectURL(fileURL); // if link is releases an existing object URL which was previously created by calling URL.createObjectURL().`,
    raw_html: "",
  },
  {
    title: "rollback after git pull",
    description: "",
    is_content: true,
    content: `To rollback after a git pull, use the command git reset --hard ORIG_HEAD.
      This works because Git automatically saves your previous state in a special reference called ORIG_HEAD before performing a pull or merge.

      1. The Quick Fix (Deletes Local Changes)If you just want to go back exactly to how things were before the pull and don't care about any unsaved work:
      git reset --hard ORIG_HEAD

      2. The Safe Way (Keep Local Changes)If you had local work you want to preserve while undoing the pull:
      git reset --merge ORIG_HEAD (This resets your branch but tries to keep your local modifications)

      3. Using the Reflog (Most Precise)If you have done other things since the pull and ORIG_HEAD no longer points to the right spot:
        1. View history action
        git reflog

        2. Find the state before the pull (usually labeled HEAD@{1})

        3. Reset to that specific point:
        git reset --hard HEAD@{1}

      If You Have Merge Conflicts
      If the pull resulted in conflicts and you haven't finished the merge yet, you can simply abort:
      git merge --abort (This returns the repository to the state it was in before you started the git pull)
      
      Key Terms to Know
      1. ORIG_HEAD: A backup pointer created by commands like pull or merge to help you undo them
      
      2. --hard: A flag that resets the staging area and working directory to match a commit.
      
      3. reflog: A local log that records every time the HEAD of a branch moves, allowing you to find "lost" commits`,
    raw_html: "",
  },
  {
    title: "Cracking License microsoft (Window, Office)",
    description: "",
    is_content: false,
    content: ``,
    raw_html: `
      <div class="flex flex-col gap-2">
        <div>1. Open WindowPowerShell</div>
        <div>2. Enter the commnad below</div>
        <div class="rounded-l-sm rounded-r-lg w-full bg-red-500 relative h-[50px]">
          <div class="flex items-center pl-2 w-full absolute rounded-l-sm rounded-r-md dark:bg-black left-[2px] h-full">
            <span class="text-white font-bold text-md">irm https://get.activated.win | iex</span>
          </div>
        </div>
        <div>
          3. Having trouble (Blocked by ISP or Old Windows)
        </div>
        <div>
          Enter the command below
        </div>
        <div class="rounded-l-sm rounded-r-lg w-full bg-red-500 relative h-[50px]">
          <div class="flex items-center flex-wrap pl-2 w-full absolute rounded-l-sm rounded-r-md dark:bg-black left-[2px] h-full text-wrap" style="word-wrap: break-word;">
            <span class="text-white font-bold text-md">[Net.ServicePointManager]::SecurityProtocol=[Net.SecurityProtocolType]::Tls12</span>
          </div>
        </div>
        <div>After Off Security Protocol then enter command below</div>
        <div class="rounded-l-sm rounded-r-lg w-full bg-red-500 relative h-[50px]">
          <div class="flex items-center pl-2 w-full absolute rounded-l-sm rounded-r-md dark:bg-black left-[2px] h-full">
            <span class="text-white font-bold text-md">irm https://get.activated.win | iex</span>
          </div>
        </div>
      </div>
    `,
  },
  {
    title: "Auto adjust height in cell for laravel excel",
    description: "",
    is_content: true,
    content: `
      AfterSheet::class => function(AfterSheet $event) {
        $sheet = $event->sheet->getDelegate();
        $highestRow = $sheet->getHighestRow();

        // Auto height manually
        for ($row = 11; $row <= $highestRow; $row++) {

            $sheet->getStyle('A1:Z' . $heighestRow)
              ->getAlignment()
              ->setWrapText(true);

            // after apply style wrap text to in each cell then
            // Description column starts around M
            $text = $sheet->getCell('M' . $row)->getValue();

            // Estimate line count
            $length = mb_strlen($text);

            // adjust this value to your column width
            $lines = ceil($length / 40);

            // minimum height
            $height = max(30, $lines * 18);

            $sheet->getRowDimension($row)
                ->setRowHeight($height);
        }
      }

      Or applyStyle to template blade
      style="overflow-wrap: break-word;word-wrap: break-word;"
    `,
    raw_html: "",
  },
];
</script>

<template>
  <div>
    <template v-for="(item, index) in contents" :key="index">
      <CardListView
        :title="item.title"
        :description="item.description"
        :content="item.content"
        :is-content="item.is_content"
        :raw_html="item.raw_html"
      />
    </template>
  </div>
</template>
