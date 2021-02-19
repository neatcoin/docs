---
id: mimblewimble
title: Mimblewimble Privacy Transaction
---

This article describes specific aspects of how Mimblewimble might be incoperated in Neatcoin.

## Status

Things on this page has not yet been implemented.

## Crypto library

The project does not aim at writing any base-level crypto
libraries. We use whatever is available at hands. This means:

* Curve25519 for all Mimblewimble transaction handlings.
* Bls12_381 for proof-of-stake pairing operations.

Readers may notice that we do not use the same crypto as in Grin
(which uses secp256k1). Thanks to the dalek and schnorrkel project in
Rust, curve25519 has already got sufficient support for running
operations needed for Mimblewimble.

## Mimblewimble

The transaction format and all mimblewimble operations will mostly
resemble what looks like in Grin.

## Proof-of-stake

The `Coinbase` output and kernel feature is removed. In replacement,
we introduce two new features `Stake` and `Reward`.

All proof-of-stake data structures live in a place outside of
Mimblewimble. We can think of them as a **validator set** with a *BLS
public key* and *current rewards*.

Both the `Stake` and `Reward` kernel feature will have a reference to
a *BLS public key*.

If an output contains the `Stake` feature, it initiates an intention
to validate. It reveals the staker's BLS public key, but does not
reveal the amount. In addition to the normal rangeproof to make sure
the amount is a non-negative value, an additional rangeproof is
carried out to make sure the amount is greater than *64
NEAT*. Otherwise, the block is considered invalid.

All `Stake` outputs are immediately forbidden to be used as inputs. At
the end of the block, their validator keys are added to the
proof-of-stake validator set. We use the same strategy as in eth2 to
give all validators the same voting rights.

From this point on, the proof-of-stake functions exactly the same as
Eth2's beacon chain proof-of-stake specifications.

The proof-of-stake algorithm will accumate rewards. Upon reaching a
threshold, validators can send `Reward` inputs on the Mimblewimble
side to mint those coins to be usable.

The proof-of-stake side has specific transactions for sending
attestations and handling slashing reportings. Those transactions are
not in any way related to Mimblewimble transactions.

Either voluntarily or forced, a validator can exit staking. In this
case, the validator set state maintains the data until the exit
period. After that, `Stake`-featured outputs are re-allowed to be used
as other transaction's inputs.

## Slashing

A validator can be slashed if it malfunctions. In this case, rewards
can go negative. The `Stake`-featured outputs will continue to be
forbidden to be used even when the validator exits.