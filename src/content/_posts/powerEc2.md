---
id: "powerEc2"
title: "How to start your ec2 server"
description: "A guide ,how to power on a remote ec2 server"
date: "2025-06-29"
tags: ["aws", "ec2"]
---



## Prerequisites

[[setup for aws cli]]

---

### Commands (Hardware layer)

- Power On 🍥
```bash
aws ec2 start-instances --instance-ids i-xxxxxxx
```

- To shut down the machine 🚫
```bash
aws ec2 stop-instances --instance-ids i-xxxxxxxxx
```

- Check status whether machine is ***One*** or ***Off***
```bash
aws ec2 describe-instance-status --instance-ids i-xxxxxxxxx
```


# Now Go SSH your server