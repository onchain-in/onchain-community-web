import { useMemo } from 'react';
import * as anchor from "@coral-xyz/anchor";
import { PublicKey } from '@solana/web3.js';
import idl from "../../idl/onchain_community.json";
import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react';

const programId = new PublicKey(idl.metadata.address);

const useConnectOnchain = () => {
	const anchorWallet = useAnchorWallet();
	const { connection } = useConnection();

	const { provider, program } = useMemo(() => {
		if (anchorWallet) {
		  const provider = new anchor.AnchorProvider(
			connection,
			anchorWallet,
			anchor.AnchorProvider.defaultOptions()
		  );
		  const program = new anchor.Program(idl as anchor.Idl, programId, provider);
		  return { provider, program };
		}
		return {};
	  }, [connection, anchorWallet]);

  const requestCreateComment = async (url: string, content: string) => {
    const commentKeypair = anchor.web3.Keypair.generate();
    if (program) {
      const tx = await program.methods
      .createComment(
        url,
        content
      ).accounts({
        comment: commentKeypair.publicKey,
        authority: provider.wallet.publicKey,
      }).signers([commentKeypair])
      .rpc();
    }
  }

	return {
		connection,
		program,
		provider,
    requestCreateComment
	}
}

export default useConnectOnchain;
