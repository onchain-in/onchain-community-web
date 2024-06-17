import { create } from '@web3-storage/w3up-client';

export const uploadMetadata = async (e) => {
	const { files } = e.target;
	console.log(files);
	const client = await create();
	await client.createSpace("hello-joey");
	await client.login('jipkim2@gmail.com');

	const uploadPromises = Array.from(files).map((file: any) => {
		console.log(file);
        return client.uploadFile(file);
    });

    const cids = await Promise.all(uploadPromises);

    cids.forEach((cid, index) => {
        console.log(`CID of uploaded file ${index + 1}:`, cid.toString());
    });


	// const cid = await client.uploadFile(files[0]);
	// console.log("your CID of uploaded data", cid.toString())
}