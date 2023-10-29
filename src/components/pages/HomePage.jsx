import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MyGroup from "../MyGroup.jsx";
import walletConnectFcn from "../hedera/walletConnect.js";
import { Button, useToast } from '@chakra-ui/react'

import "../../styles/App.css";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from '@chakra-ui/react'


const HomePage = () => {
    const toast = useToast();
	const navigate = useNavigate();
    const [walletData, setWalletData] = useState();
	const [account, setAccount] = useState();
	const [network, setNetwork] = useState();
	const [contract, setContract] = useState();
	const [sPartName, set_sPartName] = useState();
	const [sPartAmount, set_sPartAmount] = useState();
	const [gPartName, set_gPartName] = useState();

	const [connectText, setConnectText] = useState("");
	const [deployText, setDeployText] = useState("");
	const [setterGroupText, setSetterGroupText] = useState("Store a part name and corresponding amount on-chain");
	const [getterGroupText, setGetterGroupText] = useState("Check amount available for a given part");
	const [amountText, setAmountText] = useState("");

	const [connectLink, setConnectLink] = useState("");
	const [deployLink, setDeployLink] = useState("");
	const [setterGroupLink, set_setterGroupLink] = useState("");

	async function connectWallet() {
		if (account !== undefined) {
			setConnectText(`🔌 Account ${account} already connected ⚡ ✅`);
		} else {
			const wData = await walletConnectFcn();

			let newAccount = wData[0];
			let newNetwork = wData[2];
			if (newAccount !== undefined) {
                toast({
                    title: 'Wallet Connected!',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
				setConnectText(`🔌 Account ${newAccount} connected ⚡ ✅`);
				setConnectLink(`https://hashscan.io/${newNetwork}/account/${newAccount}`);
				setWalletData(wData);
				setAccount(newAccount);
				setNetwork(newNetwork);
				setDeployText();

				setTimeout(()=>{
					navigate("/booking");
				},2000);
			}
		}
	}



	//=====================

	return (
		<div className="App bg-blur">
            <Slide direction="left" in={4}> 
			<h1 className="header">DIGIRAILS</h1>
            </Slide>
            
            <Slide direction="right" in={3} >
			<div className="stickAtBottom">
                
			    <MyGroup fcn={connectWallet} buttonLabel={"Connect Wallet"}  link={connectLink} hideConnectButton = {account}/>
 
            </div>
            </Slide>
            
		</div>
	);
}

export default HomePage