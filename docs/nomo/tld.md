---
title: Top-level domains
---

Top-level domains (TLDs) are bare domains with only one part, like
`.com`, `.org`, or `.neat`. In Neatcoin, top-level domains are
distributed through governance, to enable further registrations and
interoperability with other DNS systems.

## Types

### Neatcoin-specific TLDs

Neatcoin-specific TLDs are currently `.neat` and `.neatuser`. More can
be added through on-chain governance later. Their registration
information is directly stored on the Neatcoin blockchain.

`.neat` domains are distributed through auction, and `.neatuser`
domains are first-come-first-served. You can read the subsections to
learn more about how they works.

### ICANN TLDs

ICANN TLDs are normal domain names like `.com`, `.net` and
`.org`. Their entry in Neatcoin is specifically masked so that they
point to the ICANN root zone. This design allows Neatcoin to easily
handle interoperability with existing DNS system as well as handling
future addition of ICANN TLDs.

### OpenNIC TLDs

OpenNIC is an alternative DNS root zone with specific additional TLDs
like `.null`, `.libre` and `.bbs`. Similar to ICANN TLDs, their entry
in Neatcoin is specifically masked to point to the OpenNIC root zone.

### Additional TLDs

Additional alternative root zone services can also be added. In order
to ensure all Neatcoin resolvers understand the meaning of all TLD
types and can properly resolve them. They are added through on-chain
runtime upgrades.

The current list of additional TLD types include Handshake root
zone. Because the way Handshake works, it's impossible to support
Handshake while maintaining compatibility with traditional DNS system,
even for basic things like `.com` and `.org`. Therefore, Neatcoin only
resolves particular Handshake TLDs of interests.

## Methods

### Conflict resolution

It may happen that in the future ICANN adds an additional TLD that
conflicts with one already on the Neatcoin network. On-chain
governance on Neatcoin provides a method for conflict
resolution. Neatcoin coin holders can collectively decide if they want
to move solely to the new ICANN TLD, to continue to solely use the
existing Neatcoin TLD, or to combine both with a priority system.


