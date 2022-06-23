export function przetworzDaneNaSumeZakupow(json) {
  var jsonDaty = {};
  console.log(json["rachunki"]);
  for (var rachunek of json["rachunki"]) {
    var date = rachunek["date"];
    date = date.substring(0, 7);

    if (!jsonDaty[date]) {
      jsonDaty[date] = [];
    }
    for (var items of rachunek["items"]) {
      if (!jsonDaty[date][items["item"]]) {
        jsonDaty[date][items["item"]] = items["amount"];
      } else {
        jsonDaty[date][items["item"]] += items["amount"];
      }
    }
  }

  return jsonDaty;
}

export function stworzDaneNaSumeZakupow(
  json,
  labels,
  values,
  labelsName,
  datasets
) {
  var dataToShow = przetworzDaneNaSumeZakupow(json);

  var id = 0;

  // ustaw labele i zakupy
  for (var dataZakupu in dataToShow) {
    labelsName[id] = dataZakupu;
    values[id] = [];
    for (var item in dataToShow[dataZakupu]) {
      if (!labels.includes(item)) {
        labels.push(item);
      }
      values[id].push(dataToShow[dataZakupu][item]);
    }
    id += 1;
  }

  // ustaw datasets
  id = 0;
  for (var label of labelsName) {
    datasets[id] = {
      label: label,
      backgroundColor: "rgb(" + getRandomInt(0, 255) + ", 99, 132)",
      borderColor: "rgb(" + getRandomInt(0, 255) + ", 99, 132)",
      data: values[id],
    };
    id += 1;
  }
}

export function przetworzDaneNaSprzedawcowZakupow(json) {
  var jsonDaty = [];
  for (var rachunek of json["rachunki"]) {
    for (var items of rachunek["items"]) {
      if (!jsonDaty[items["item"]]) {
        jsonDaty[items["item"]] = [];
        jsonDaty[items["item"]].push(rachunek["seller"]);
        jsonDaty[items["item"]][rachunek["seller"]] = { ileRazy: 0 };
      }
      if (!jsonDaty[items["item"]][rachunek["seller"]]) {
        jsonDaty[items["item"]][rachunek["seller"]] = { ileRazy: 0 };
      }
      for (var info in jsonDaty[items["item"]]) {
        if (info == rachunek["seller"]) {
          jsonDaty[items["item"]][info]["ileRazy"] += 1;
        }
      }
    }
  }

  return jsonDaty;
}

export function stworzConfigNaSumeZakupowDlaDat(json) {
  var labels = [];
  var datasetsLabels = [];
  var values = [];
  var datasets = [];

  stworzDaneNaSumeZakupow(json, labels, values, datasetsLabels, datasets);

  const data = {
    labels: labels,
    datasets: datasets,
  };
  console.log(data);

  const config = {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  return config;
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function WygenerujWykresy() {
  fetch("http://localhost:8080/getall", { method: "POST", mode: "no-cors" })
    .then((resp) => resp.json())
    .then((resp) => {
      console.log(resp);
      /*const config = stworzConfigNaSumeZakupowDlaDat(resp);
      new Chart(document.getElementById("myChart"), config);
      const daneSprzedawcow = przetworzDaneNaSprzedawcowZakupow(resp);

      for (var rodzajPaliwa in daneSprzedawcow) {
        let table = document.createElement("table");
        table.id = rodzajPaliwa;
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        table.appendChild(thead);
        table.appendChild(tbody);
        let headers = document.createElement("tr");
        headers.id = "headers_" + rodzajPaliwa;
        thead.appendChild(headers);

        let heading = document.createElement("th");
        heading.innerHTML = "Sprzedawca";
        headers.appendChild(heading);
        let heading2 = document.createElement("th");
        heading2.innerHTML = rodzajPaliwa;
        headers.appendChild(heading2);

        document.getElementById("dane").appendChild(table);
      }

      for (var rodzajPaliwa in daneSprzedawcow) {
        let table = document.getElementById(rodzajPaliwa);
        for (var sprzedawca in daneSprzedawcow[rodzajPaliwa]) {
          if (sprzedawca == 0 || sprzedawca == 1) {
            continue;
          }
          let newRow = document.createElement("tr");
          table.appendChild(newRow);
          let tdSeller = document.createElement("td");
          let tdIleRazy = document.createElement("td");
          const ileRazy = daneSprzedawcow[rodzajPaliwa][sprzedawca]["ileRazy"];
          tdSeller.innerHTML = sprzedawca;
          tdIleRazy.innerHTML = ileRazy + " razy";
          newRow.appendChild(tdSeller);
          newRow.appendChild(tdIleRazy);
        }
      }*/
    });
}

export default WygenerujWykresy;
