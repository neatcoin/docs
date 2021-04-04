---
title: Bootstrap procedure
sidebar_label: Procedure
description: Launch procedure for Neatcoin's bootstrap process.
---

Once the genesis balance allocation is determined and the genesis block is
launched. The following will be the actual bootstrap procedure.

Note that because the procedure relies on Neatcoin's on-chain democracy, the
actual process is likely to take up weeks.

## Procedure

### Start the genesis block

The genesis block will contain all the genesis balance allocations, together
with 3-6 PoA validator keys so that it can generate blocks.

### Transition to PoS

The first referendum we do then is to transition to PoS. Validators will signal their
intention on-chain to vote, and nominators can vote for validators they like. A
democracy referendum is expected to be submitted to do the actual switching.
Because the referendum will have to go through three phrases each lasting around
a week, the earliest possible date the transition to PoS will happen is 22 days
after genesis block.

### Setup technical committee and initial identity registrars

The next referendum is likely to be about setting up the technical committee and
the initial identity registrars. A proper technical committee is important for
the blockchain to handle emergency situations, so we likely do it first before
other DNS setups. The earliest possible date for this to complete will be 29
days after genesis block.

### Input existing ICANN TLDs

Neatcoin's DNS component, Nomo, works and combines existing TLDs, but put them
to be on-chain governed. To handle the basics, we then put forward a democracy
referendum to input existing ICANN TLDs on-chain. After this, the DNS resolver
of Neatcoin will be able to handle normal queries. The earliest possible date
for this to complete will be 36 days after genesis block.

### Allocate a Neatcoin-specific TLD

Neatcoin's initial runtime module contains a first-come-first-served on-chain
domain registration module. We may want to utilize it for a Neatcoin-specific
TLD. This will be done through a democracy referendum. The earliest possible
date for this to complete will be 43 days after genesis block.

## Relaunch

There may also be fatal errors during the process, in which case a re-launch may
have to happen. If this is the case, then it simply means Neatcoin's second era
of re-genesis will happen much earlier than expected.