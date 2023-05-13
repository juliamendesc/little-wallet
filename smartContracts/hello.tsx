import { useEffect } from "react";
import { ethers } from "ethers";

function Home() {
  const contractAddress = "0x982155d5763f3fa18a62cb9780abc747899566f3";
  const contractABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "getHelloWorld",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];
  const provider = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com/");
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const helloWorld = await contract.getHelloWorld();
      console.log(helloWorld);
    } catch (error) {
      console.error("Error calling getHelloWorld:", error);
    }
  }

  return <h1>Hello, World!</h1>;
}

export default Home;
