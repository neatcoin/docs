---
id: bootstrap
title: Bootstrap
description: Overview of Neatcoin's bootstrap process.
sidebar_label: Introduction
---

Neatcoin's bootstrap consists of in total two things.

First, we need to handle the genesis block balance allocation. The whole genesis
allocation of Neatcoin will be done by taking a "fancy snapshot" of another
Proof of Work blockchain, called Kulupu. The allocation process, as well as details
about how Kulupu holders can participate, are documented
[here](bootstrap/allocation.md).

Second, when the genesis block starts to run, we aim at only putting the
necessary minimum information into the blockchain. This includes all genesis
allocation, together with keys of PoA validators. The network then switches to
PoS, setup the technical committee as well as registrars, input existing ICANN
TLDs, and setup a first-come-first-served TLD. The whole procedure is documented
[here](bootstrap/procedure.md).