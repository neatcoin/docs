---
title: Atomic swap
---

Atomic swap allows users on two different blockchains to exchange
tokens in a trustless way. Neatcoin supports atomic swap. It should in
theory work with any other blockchains that support smart
contracts. However, the code is currently only tested with Kulupu.

## Process

This document describes the process of atomic swap on Neatcoin. Let's
say Alice and Bob want to exchange between Neatcoin and Kulupu. Alice
wants to send Bob `100 NEAT`, in exchange for `200 KLP`. The process
is as follows.

### Initiator and counterparty

First, Alice and Bob select who will be the "initiator" and the
"counterparty". They can be chosen arbitrarily. Let's say Alice has
decided to be the initiator, and Bob has decided to be the
counterparty.

### Initiator to generate a secret

The initiator first needs to generate a secret. This is a secret that
only the initiator knows, but will be revealed to the counterparty at
the end of the atomic swap. There are not much requirements for the
secret other than it is less than 1024 bytes in size.

For example, let's say Alice has decided on the secret
`thisisasupersecret`.

### Initiator to create a pending atomic swap

The initiator then proceeds to create a pending atomic swap. To do
this, go to [Neatcoin wallet](https://wallet.neatcoin.org) and select
the source blockchain, under tab "account" - "atomic swap". Choose
action "declare as initiator". Parameters are described below:

* **Source**: the sender's account. In our example, this is Alice's
  Neatcoin account.
* **Target**: the receiver's account. In our example, this is Bob's
  Neatcoin account.
* **Secret**: enter the secret that has been decided in the previous
  step. In our example, this is `thisisasupersecret`.
* **Value**: the amount of money to send in the source blockchain. In
  our case, this is `100 NEAT`.
* **Duration**: how long (in block numbers) the atomic swap is valid
  for. A recommended value is 14400 (one day).
  
The initiator then copies the "secret hash" and let the counterparty
know this value. The initiator then submits the extrinsic on-chain.

### Counterparty to create the counter pending atomic swap

The counterparty then should go to the source blockchain under the
same location in the wallet, to check that all parameters in the
pending atomic swap are correct. The counterparty can then go to the
target blockchain's atomic swap tab, and choose action "declare as
counterparty". Parameters are described as below:

* **Source**: the sender's account. In our example, this is Bob's
  Kulupu account.
* **Target**: the receiver's account. In our example, this is Alice's
  Kulupu account.
* **Secret hash**: enter the secret hash that has been received from
  Alice. In our example, this is
  `0x4e3148ec40dca4e4e2a9fa3e4601dc3591be5ad3a345d78165637eaeb803d773`.
* **Value**: the amount of money to send in the target blockchain. In
  our case, this is `200 KLP`.
* **Duration**: this should be slightly longer than the duration of
  the initiator. A recommended value is 21600 (one and a half day).
  
The counterparty then submits the extrinsic on-chain.

### Initiator to claim the swap and to reveal the secret

The initiator should then go to the target blockchain and check that
all parameters submitted by the counterparty is correct. The initiator
then select the pending atomic swap, and choose action "claim". The
initiator then enters the secret, which will reveal it on-chain (as
well as to the counterparty).

During this time, the counterparty should watch the network events
(under "network" - "explorer") in the wallet. An event with type
`atomicSwap.SwapClaimed` should appear, which has the secret revealed
in the `proof` parameter.

### Counterparty to finish claiming the swap

The counterparty then uses the secret obtained from the last step to
finish claiming the swap, by choose the pending atomic swap, and
choose action "claim". The atomic swap is now finished.
