const MoodContractAddress = "0x189D6807030b09D86CA4c61c8bfE22DDcA4A682E";
const MoodContractABI = [
  {
    inputs: [],
    name: "getmood",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_mood",
        type: "string",
      },
    ],
    name: "setmood",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
let MoodContract;
let signer;

const provider = new ethers.providers.Web3Provider(window.ethereum, "goerli");

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

async function getmood() {
  const getMoodPromise = MoodContract.getmood();
  const Mood = await getMoodPromise;
  console.log(Mood);
}

async function setmood() {
  const mood = document.getElementById("mood").value;
  const setMoodPromise = MoodContract.setmood(mood);
  await setMoodPromise;
}
