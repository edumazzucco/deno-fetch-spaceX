import * as log from "https://deno.land/std/log/mod.ts";

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG"),
  },
  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
  },
});

async function downloadLaunchData() {
  log.info("Starting to download launch data");
  const response = await fetch("https://api.spacexdata.com/v3/launches/", {
    method: "GET",
  });

  if (!response.ok) {
    log.warning("Problem downloading launch data");
    throw new Error("Problem downloading launch data");
  }

  const launchData = await response.json();
  console.log(launchData);
}

async function elonPost() {
  log.info("Starting to post Elon user");
  const response = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Elon Musk",
      job: "Billionaire",
    }),
  });

  if (!response.ok) {
    log.warning("Problem posting Elon user");
    throw new Error("Problem posting Elon user");
  }

  const data = await response.json();
  console.log(data);
}

// downloadLaunchData();
elonPost();
