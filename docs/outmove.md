---
id: outmove
title: Outmove Smart Contract
---

Outmove is a variant of [Move](https://developers.diem.com/docs/move/overview/),
Libra's smart contract programming language, adopted for Substrate.

## Status

The proof of concept of this experiement is live!

## Adoptations

Move makes some assumptions of its blockchain structures in the language. Those
that do not fit Neatcoin was modified accordingly in Outmove. For example, the
address format was changed from 16 bytes into 32 bytes.

While Outmove is a variant of Move, the future plan is to develop on its own. We
do not plan to maintain byte-wise compatibility nor execution compatibility. For
example, in the future, the encoding format may be changed from BCS to SCALE.