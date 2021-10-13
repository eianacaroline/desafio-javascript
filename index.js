const promiseStations = fetch(`https://private-3923c4-santandercoders809.apiary-mock.com/stations`);

const separateStationsLine = () => {
    promiseStations
        .then((data) => data.json())
        .then(result => {
            const stations = result.estacoes.estacao;
            const stationsList = stations.reduce((acc, station) => {
                const regexLine = /\d+-[^-. (\s]*|\D+/g;
                const line = regexLine.exec(station['_linha']);
                if (!acc[line]) acc[line] = [];     
                acc[line].push(station);
                return acc;            
            }, {});
            console.log(stationsList)
        })
        .catch(() => console.log("Algo deu errado.."));
}

separateStationsLine();