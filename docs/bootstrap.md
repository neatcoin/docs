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
coins, with minimum locking period of one month, and maximum locking period of 5
years. The allocation of Neatcoin scales linearly with the locking period. For
example, locking for one month will result in 0.083x scaling, and locking for 5
years will result in 5x scaling. The actual scaling will be calculated down
precise to the actual lock block numbers, using integer divisions.