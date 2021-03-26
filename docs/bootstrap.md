---
id: bootstrap
title: Bootstrap
---

Bootstraping a network, specifically, allocating balances in the genesis
block, is a boring, yet important task that has to be done. Unlike a PoW
blockchain, a PoS one like Neatcoin must have some forms of pre-mine.

For obvious reasons, it will not be possible to purchase any Neatcoin tokens. The
devs will also not reserve any coins for themselves. The whole Neatcoin genesis
allocation will be inheriting from another blockchain, called Kulupu, using a
fancy way, called lock dropping.

The lock dropping period will last for one month on the Kulupu blockchain.
During this time, KLP token holders can voluntarily decide to "lock up" their
coins, with minimum locking period of one quarter, and maximum locking period of 7
years (we consider 1 year to be 52 weeks). The allocation of Neatcoin scales
linearly with the locking period. For example, locking for one quarter will result
in 0.25x scaling, and locking for 7 years will result in 7x scaling. The actual
scaling will be calculated down precise to the actual lock block numbers, using
integer divisions.

## Details

The details should be mostly considered fixed, after community review.

* Lock-drop end date: Kulupu block number 504000 (approximately 27 April, 2021).
* Minimum lock end date: Kulupu block number 635040 (approximately 27 July, 2021).
* Maximum lock end date: Kulupu block number 4173120 (approximately 18 April, 2028).

The calculation is done as follows. Take `L` as your lock end date, and `A` as
the locked balance. The final balance on the Neatcoin blockchain is

```
(min(L, 4173120) - 504000) * A / 524160
```

Note that `/` denotes integer division.

## Additional notes

The launch date of Neatcoin has not been determined.

There may still be a (really small) chance that the details changes. In any
case, a change will only extend the lock, but never shrink it.

Unless the lockdrop suffers from technical failures or security issues (in which
case a new lockdrop will have to take place), the current lockdrop will be the
only source of Neatcoin's genesis block. There won't be any additional
allocations or lockdrops.

## Status

import LockdropStatus from '@site/src/components/LockdropStatus';

The bootstrapping is ongoing. <LockdropStatus />