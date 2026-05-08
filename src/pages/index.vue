<script setup>
import CardListView from '@/components/CardListView.vue';

const contents = [
  {
    title: "{ } / _ Utils Platform",
    description: "This website i make it up for note or store something like [ code, documents, file, list, detail, image, event, structure, architecture, design, ... ].",
    is_content: false,
    content: "",
    raw_html: ""
  },
  {
    title: "C++ API Server",
    description: "Make C++ http server to request and response as api web service. it may write hard then php/python.",
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
    raw_html: ""
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
      <div class="flex items-center gap-3">
        <img class="h-10 w-10 object-cover border border-zinc-200 dark:border-zinc-700 p-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEWRC/6ICvuHCvuCCvp9Cvh5CfeFAPt7APh2APd1Cfaqa/fo2vzr3fzh0fqgZ/SfU/f////SvPPDo/K9nvHMtfOQTvHPsfhnB/LGq/XfzflzCfXcyfiROfiWR/ZqB/PWwvf48P27j/V5DOeDLOuHOeure/SuiPLw5fuQOfF4A+2VWe+IJu/68/2da+tqAO92JOr++f5YAOicZ++IRezCo/ftjRgzAAABbUlEQVR4AX3S1XaEMBRA0UFiWLGSwQLj7vP/39ab4LXzulc8sz5N03TIkJkQQmhk0NTQ1AZEA2IZUdEmaawxy3Yce5Tr0Q7xhx+Eo6Io9j8pYg0mNsOwFDFhWjmCcXdOWYcp1jUdy5rdZPmAcU50HRclZFKJokoEY5nCPMaaTmxfljA4Bk0qwTKJmlkvsK6TtF6u1oG/oYDbHW8QF/6+wYyQgx9KXPsrKhGbro10hZzSjX8ERNxNOc1muKzrEww0aH5OU+d8uYIxetvt1gJwdy6wbgDWURTad08en65qB1DDh9wmCndXll3d3VXdQvUQgBo+wYYkyg2J5H6FgWv/JhRqaLcgzUiEvNoGFFuHN6iTIFF4lzlrCjiPFcpDzANA8vmEXjCOZSIOm5GAYUXhvpuHRhJ5EPUj36lQoBIQzzs0cHmP35OS+0u0aJBjMC0+cjl+BgbKsiy7tnFISOOzyUdVu8kykAb/sQbHNsYvjA0vKuhfMkMAAAAASUVORK5CYII=">
        <div class="flex flex-col">
          <div class="font-semibold text-sm text-zinc-900 dark:text-zinc-50">Bootstrap</div>
          <div class="text-xs text-zinc-600 dark:text-zinc-400">Build fast, responsive sites with Bootstrap Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</div>
        </div>
      </div>
    `
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
    raw_html: ""
  },
  {
    title: "Laravel 10 Decrypt Request Methods",
    description: "Decrypt Request Payload from client-side that Encrypt Security for sensitive data.",
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
    raw_html: ""
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
            add no data available to report table`,
    raw_html: ""
  },
]
</script>

<template>
  <div>
    <template v-for="(item,index) in contents" :key="index">
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
