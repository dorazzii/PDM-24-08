self.addEventListener("install", event => {

    console.log("Service Worker instalado");

});

self.addEventListener("activate", event => {

    console.log("Service Worker ativado");

});

self.addEventListener("fetch", event => {

    console.log("Requisição:", event.request.url);

    if (event.request.url.endsWith("/teste-sw")) {

        event.respondWith(
            new Response("Resposta criada pelo Service Worker!")
        );

    }

});