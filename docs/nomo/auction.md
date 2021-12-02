---
title: Auction domains
---

Auction domains are domains distributed through auction. Currently,
`.neat` TLD on Neatcoin is planned to operate this way.

## Candle auction with second-price

The auction process in Neatcoin works as follows. Upon a specific time
deterministically determined by the domain name's "name hash", an
auction of the domain can be open, for a period of 20 days. During
this time, all Neatcoin holders can place bids on this domain name.

The auction works as a candle auction. The first 10 days of the
auction is called the bidding period, when normal bids happen. The
second 10 days of the auction is called the ending period, when people
can continue to place bids. At the end of the auction, a random block
number within the ending period is selected as the auction's true
ending time, and the winner is decided as the highest bidder in that
block. The winner then pay the second highest bidder's price for the
domain (or a chain-level minimum price if no other bidders exist).

This particular auction design prevents the situation when a bidder
places a bid last minute in order to win an auction.
