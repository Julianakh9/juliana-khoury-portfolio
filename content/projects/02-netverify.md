---
title: "NetVerify — Network Verification & Test Automation"
description: "Developed and released a Python network verification framework featuring TCP/UDP checks, Scapy-based ICMP/ARP testing, Linux fault injection, recovery monitoring, and automated CI."
order: 2
repoUrl: "https://github.com/Julianakh9/NetVerify"
technologies:
  - "Python"
  - "OOP"
  - "pytest"
  - "Linux"
  - "TCP/UDP"
  - "ICMP/ARP"
  - "Scapy"
  - "Network Namespaces"
  - "iproute2"
  - "Git"
  - "GitHub Actions"
  - "CI/CD"
---

**Released v0.2.0** — [Official GitHub Release](https://github.com/Julianakh9/NetVerify/releases/tag/v0.2.0).

Designed reusable Python APIs for TCP/UDP and packet-level ICMP/ARP verification using optional Scapy. Implemented structured failure diagnostics, JSON reporting, and a CLI for core TCP/UDP checks.

Built isolated Linux network testing environments with Network Namespaces, virtual Ethernet interfaces, controlled fault injection, recovery monitoring, and least-privilege CAP_NET_RAW execution.

**Verified:** 640 tests passed on each of Python 3.11, 3.12, and 3.13. All 21 Linux integration tests passed, including 11 packet-level tests, using pytest and GitHub Actions.
