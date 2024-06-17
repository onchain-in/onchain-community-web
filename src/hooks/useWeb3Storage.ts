import { create } from '@web3-storage/w3up-client';
import { useState, useEffect } from 'react';

const useWeb3Storage = () => {
  const [client, setClient] = useState(null);
  const [space, setSpace] = useState(null);
  const [myAccount, setMyAccount] = useState(null);
  const [recovery, setRecovery] = useState(null);

	useEffect(() => {
		initStorage();
	});
	const initStorage = async () => {
    const client = await create();
    const space = await client.createSpace("hello-joey");

    const myAccount = await client.login('jipkim2@gmail.com');

    while (true) {
      const res = await myAccount.plan.get();
      if (res.ok) break;
      console.log("Waiting for payment plan to be selected...");
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    await myAccount.provision(space.did());
    await space.save();
    await client.setCurrentSpace(space.did());
    const recovery = await space.createRecovery(myAccount.did())
    await client.capability.access.delegate({
      space: space.did(),
      delegations: [recovery],
    });
		setClient(client);
		setSpace(space);
		setMyAccount(myAccount);
		setRecovery(recovery);
	}
	return { client, space, myAccount, recovery };
}

export default useWeb3Storage;