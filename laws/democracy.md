---
id: democracy
title: Democracy
---

This Neatcoin Laws article describes the Neatcoin democracy module.

## Governance bodies

In Neatcoin, three different governance bodies exist.

### Users

Anyone who owns Neatcoin automatically becomes a Neatcoin User. The right is
automatic, and instant. The moment one owns Neatcoin, one can start to
participate in Neatcoin governance matters. The other two governance bodies,
council and technical committee, are directly or indirectly elected by Neatcoin
Users.

The voting right of a Neatcoin User depends on the amount of coins the User
owns. Once a User ceases to own Neatcoin, it ceases to be a Neatcoin User.

### Council

Neatcoin Council consists of 7 seats (Prime Council Members and Council
Members), 30 Runners Up, and a number of Candidates.

Council Members have equal voting rights. Runners Up and Candidates do not have
voting rights.

Council Members serve for one Council Term. A Council Term lasts 24 hours. Users
(including Council Members, Runners Up and Candidates) can choose to vote on
Council Members, Runners Up and Candidates by locking coins. Each new Council
Term, an election is held based on the Phragmen election algorithm. The first 7
elected becomes Council Members. The next 30 elected becomes Runners Up. Anyone
elected below this or have zero backing are removed. The first elected also gets
the Prime Council Member status.

All Neatcoin Users can choose to become a Candidate at any time.

### Technical Committee

Neatcoin Technical Committee consists of an arbitrary number of seats (Prime
Technical Committee Member and Technical Committee Members).

Prime Technical Committee Member and Technical Comittee Members are appointed
through Referendums.

## Governance matters

Users, Council and Technical Committee decide on different governance matters.

### Users

Users, through Referendum, can decide on all governance matters. In particular,
anything that is considered to be a Root Matter can only be decided directly by
users. Those Root Matters include:

* Conducting a runtime upgrade.
* Blacklist a proposal from being tabled again.
* Appoint Prime Technical Committee Member and Technical Committee Members.
* Appoint identity registrar.
* Decide on inflation rate.
* Decide on staking validator count.
* Other Root Matters.

### Council

Council Members, through Council Motions, can decide on a limited number of
governance matters. Those include:

* Table an external super-majority, simple-majority and simple-default
  Referendum for Users to vote on.
* Approve and disapprove treasury proposals, tips and bounties.
* Cancel a Referendum when it is in the voting phrase.
* Cancel staking slashes.
* Other governance matters Council Members can vote through Council Motions.

### Technical Committee

Technical Committee, through Technical Committee Motions, can decide on a
limited number of governance matters. Those include:

* Cancel a Referendum when it is in the proposing phrase.
* Fast-track a simple-majority and simple-default Referendum.
* Other governance matters Technical Committee Members can vote through
  Technical Committee Motions.

## Voting rules

Users, Council Members and Technical Committee Members decide by voting, and
they follow different voting rules.

### Referendums

Referendums are the voting rules for Users.

#### Referendum statuses

Depending how a referendum was tabled and as democracy terms advance, a
referendum goes through different statuses:

* **Proposed**: A referendum is tabled by Users. It will enter Super-Majority
  Voting status next, or get cancelled.
* **Externally proposed with super-majority voting**: A referendum is tabled by
  agreement of Council. It will enter Super-Majority Voting status next, or get
  cancelled.
* **Externally proposed with simple-majority voting**: A referendum is tabled by
  agreement of Council. It will enter Simple-Majority Voting status next, or get
  cancelled.
* **Externally proposed with simple-default voting**: A referendum is tabled by
  agreement of Council. It will enter Simple-Default Voting status next, or get
  cancelled.
* **Super-majority voting**: A referendum under voting under super-majority
  rule. It will either get passed and enter Activating status, or get rejected.
* **Simple-majority voting**: A referendum under voting under simple-majority
  rule. It will either get passed and enter Activating status, or get rejected.
* **Simple-default voting**: A referendum under voting under simple-default
  rule. It will either get passed and enter Activating status, or get rejected.
* **Acticating**: A referendum that has passed voting and will be activated in 8
  days. Any User has the ability to submit preimage for a Referendum. If a
  preimage is submitted in time, the referendum will be executed. Otherwise, the
  referendum fails.

#### Democracy terms

Democracy terms are the general way Referendums advance statuses. Each democracy
term lasts 7 days.

When a new democracy term is started, a referendum, in one of **Proposed**,
**Externally proposed with super-majority voting**, **Externally proposed with
simple-majority voting** or **Externally proposed with simple-default voting**
statuses gets put in one of **Super-majority voting**, **Simple-majority
voting** or **Simple-default voting**. Proposed and Externally Proposed
referendums alternate. For Proposed referendum, the one with the highest backing
wins, regardless of submission time.

#### Fast tracking

Technical Committee Members, through Technical Committee Motions, can fast track
a referendum under **Externally proposed with simple-majority voting** or
**Externally proposed with simple-default voting** status. The fast track
referendum does not follow normal democracy terms.

A fast track referendum has a minimum voting period of 1 day.

### Council Motions

Each Council Member has equal voting rights for every Council Motion.

In case of abstain, a Council Member's vote is decided as:

1. Aye, if more than half of Council Members voted Aye.
2. Aye, if Prime Council Member voted Aye, and if (1) does not hold.
3. Nay, otherwise.

For a Council Motion to pass, it must have more than threshold number of Council
Members voted Aye. The thresholds are as follows:

* To propose an external super-majority referendum: at least 50%.
* To propose an external simple-majority referendum: at least 80%.
* To propose an external simple-default referendum: 100%.
* To cancel a referendum under voting: 100%.
* To cancel a staking slash: 100%.
* To approve a treasury proposal: at least 80%.
* To reject a treasury proposal: at least 50%.

In the case of proposing an external referendum, Technical Committee Members
have the chance to veto a proposal.

### Technical Committee Motions

Each Technical Committee Member has equal voting rights for every Technical Committee Motion.

In case of abstain, a Technical Committee Member's vote is decided as:

1. Aye, if Prime Technical Committee Member voted Aye.
2. Nay, otherwise.

For a Technical Committee Motion to pass, it must have more than threshold
number of Technical Committee Members voted Aye. The thresholds are as follows:

* To fast track a proposal: 100%.
* To cancel a referendum under proposing: 100%.