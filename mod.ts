async function downloadLaunchData() {
  const response = await fetch("https://api.spacexdata.com/v3/launches/", {
    method: "GET",
  });

  const launchData = await response.json();
  console.log(launchData);
}

async function elonPost() {
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
  const data = await response.json();
  console.log(data);
}

// downloadLaunchData();
elonPost();
