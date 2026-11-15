---
title: "NetVerify — Network Verification & Test Automation"
description: "Developed and released a modular Python framework for automated network verification, fault injection, failure diagnostics, and recovery testing. Implemented TCP/UDP checks, Scapy-based ICMP/ARP verification, and isolated Linux network testing with automated pytest and GitHub Actions validation."
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

Independent software engineering project, officially released as [v0.2.0 on GitHub](https://github.com/Julianakh9/NetVerify/releases/tag/v0.2.0).

NetVerify uses a modular architecture with reusable Python verification APIs. It provides TCP connectivity and UDP echo verification, plus packet-level ICMP Echo and ARP verification using Scapy, which is an optional dependency and is not bundled with NetVerify.

Tests run in isolated Linux network namespaces connected by virtual Ethernet interfaces. The framework supports controlled network fault injection with recovery monitoring, structured failure diagnostics, and JSON reporting. A command-line interface covers the core TCP and UDP checks. Packet-level execution follows a least-privilege model using CAP_NET_RAW.

Automated verification uses pytest and GitHub Actions. 640 tests passed on each of Python 3.11, 3.12, and 3.13. 21 Linux integration tests passed, including 11 packet-level tests.
