const fs = require("fs");
const yaml = require("js-yaml");

const config = {
  kovan: {
    v1FactoryAddress: "0x0C60Cd59f42093c7489BA68BAA4d7A01f2468153",
    v1FactoryStartBlock: 14980875,
    v2FactoryAddress: "0xB47778d3BcCBf5e39dEC075CA5F185fc20567b1e",
    v2FactoryStartBlock: 16845360,
  },
  rinkeby: {
    v2FactoryAddress: "0xcC71d8Ff0375F20Bce1690494Ac1Ed69084A5B42",
    v2FactoryStartBlock: 6494329,
  },
  xdai: {
    v1FactoryAddress: "0x9232DeA84E91b49feF6b604EEA0455692FC27Ba8",
    v1FactoryStartBlock: 10733005,
    v2FactoryAddress: "0x124F707B3675b5fdd6208F4483C5B6a0B9bAf316",
    v2FactoryStartBlock: 10733005,
  },
  mainnet: {
    v1FactoryAddress: "0x2840d12d926cc686217bb42b80b662c7d72ee787",
    v1FactoryStartBlock: 8625240,
    v2FactoryAddress: "0x1782a13f176e84Be200842Ade79daAA0B09F0418",
    v2FactoryStartBlock: 9484660,
  },
  matic:{
    v2FactoryAddress: "0x6690C139564144b27ebABA71F9126611a23A31C9",
    v2FactoryStartBlock: 9484660
  }   
};

const network = process.argv.slice(2)[0];
console.log(process.argv.slice(2)[0]);


try {
  let fileContents = fs.readFileSync("./subgraph-template.yaml", "utf8");
  let data = yaml.safeLoad(fileContents);

  data.dataSources[0].network = network;
  data.dataSources[0].source.address = config[network].v1FactoryAddress;
  data.dataSources[0].source.startBlock = config[network].v1FactoryStartBlock;

  data.dataSources[1].network = network;
  data.dataSources[1].source.address = config[network].v2FactoryAddress;
  data.dataSources[1].source.startBlock = config[network].v2FactoryStartBlock;

  data.templates[0].network = network;
  data.templates[1].network = network;

  if (network !== "mainnet") {
    data.dataSources.splice(2, 1);
  }

  let yamlStr = yaml.safeDump(data);
  fs.writeFileSync("subgraph.yaml", yamlStr, "utf8");

  console.log("Generated subgraph.yaml for " + network);
} catch (e) {
  console.log(e);
}
